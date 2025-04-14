import React, { useState, useEffect } from 'react';
import {db} from "../config/firebase";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const HomePage = () => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [services, setServices] = useState([]);
  const [locations, setLocations] = useState([]);
  
  const navigate = useNavigate();
  const db = getFirestore();

  // Fetch services from Firestore
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'services'));
        const servicesData = []; 
        const locationsSet = new Set();

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // console.log('---',data);
          servicesData.push(data.name);
          data.location.forEach((loc) => locationsSet.add(loc.trim()));
        });

        setServices(servicesData);
        setLocations(Array.from(locationsSet));
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    };

    fetchServices();
  }, [db]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!location || !service) {
      alert('Please select both location and service.');
      return;
    }

    // Map service to route path
    let route = '';
    switch (service.toLowerCase()) {
      case 'mahendi':
        route = '/User/Mahendiartist';
        break;
      case 'nail art':
        route = '/User/Nailartist';
        break;
      case 'makeup':
        route = '/User/Makeupartist';
        break;
      default:
        route = '/Homepage';
    }

    // Navigate to the selected service page with location as query
    navigate(`${route}?location=${location}`);
  };

  return (
    <Grid
      container
      sx={{
        height: '97vh',
        overflow: 'hidden',
      }}
    >
      {/* Left Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }}
      >
        <Typography variant="h3" sx={{ color: '#c69087', fontWeight: 'bold', textAlign: 'center' }}>
          Welcome to GlamourShine
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', mt: 2, maxWidth: 400, color: '#825272' }}
        >
          Discover the elegance within you. Book your beauty sessions with the finest artists in
          town!
        </Typography>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 400,
            backgroundColor: '#fff',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 3, color: '#825272' }}
          >
            Select Your Service
          </Typography>

          <FormControl fullWidth sx={{ mb: 3 }} required>
            <InputLabel id="location-label">Choose Location</InputLabel>
            <Select
              labelId="location-label"
              value={location}
              label="Choose Location"
              onChange={(e) => setLocation(e.target.value)}
            >
              {locations.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="service-label" required>
              Choose Service
            </InputLabel>
            <Select
              labelId="service-label"
              value={service}
              label="Choose Service"
              onChange={(e) => setService(e.target.value)}
            >
              {services.map((srv) => (
                <MenuItem key={srv} value={srv}>
                  {srv}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#c69087' }}>
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
