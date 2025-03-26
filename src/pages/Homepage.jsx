import React, { useState } from 'react';
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

const HomePage = () => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!location || !service) {
      alert("Please select both location and service.");
      return;
    }
  
    // Map service to route path
    let route = '';
    switch (service.toLowerCase()) {
      case 'mehendi':
        route = '/User/Mahendiartist';
        break;
      case 'nail art':
        route = '/User/Nailartist';
        break;
      case 'makeup':
        route = '/User/Makeupartist';
        break;
      default:
        route ='/Homepage';
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
        <Typography variant="h3" sx={{ color:"#c69087", fontWeight: 'bold', textAlign: 'center' }}>
          Welcome to GlamourShine
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, maxWidth: 400,color:"#825272"}}>
          Discover the elegance within you. Book your beauty sessions with the finest artists in town!
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
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 ,color:"#825272"}}>
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
              <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
              <MenuItem value="Gandhinagar">Gandhinagar</MenuItem>
              <MenuItem value="Rajkot">Rajkot</MenuItem>
              <MenuItem value="Surat">Surat</MenuItem>
              <MenuItem value="Vadodara">Vadodara</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="service-label" required>Choose Service</InputLabel>
            <Select
              labelId="service-label"
              value={service}
              label="Choose Service"
              onChange={(e) => setService(e.target.value)}
            >
              <MenuItem value="Mehendi" >Mehendi</MenuItem>
              <MenuItem value="Nail Art">Nail Art</MenuItem>
              <MenuItem value="Makeup">Makeup</MenuItem>
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
