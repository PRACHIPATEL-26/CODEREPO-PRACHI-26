import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ArtistRegister() {
  const [formData, setFormData] = useState({
    name: '',
    Phone:'',
    email: '',
    password: '',
    serviceType: '',
    experience: '',
    gender: '',
    Address:'',
    country: '',
    state: '',
    city: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Artist Registration Data:', formData);
    // Connect this with Firebase later
  };
 const navigate =useNavigate();
  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ padding: 3, borderRadius: 3, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom style={{color:"#825272"}}>
          Create Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Full Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
               {/* Phone */}
               <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phone"
                fullWidth
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

       {/* Password */}
       <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>

              {/* Service Dropdown */}
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Service Type</InputLabel>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  label="Service Type"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Mehendi">Mehendi</MenuItem>
                  <MenuItem value="Makeup">Makeup</MenuItem>
                  <MenuItem value="Nail Art">Nail Art</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Experience */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Years of Experience"
                name="experience"
                fullWidth
                required
                value={formData.experience}
                onChange={handleChange}
              />
            </Grid>

            {/* Gender */}
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
             <Grid item xs={12}>
                        <TextField
                         label="Address"
                        name="Address"
                        multiline rows={2}
                        fullWidth
                        required
                        value={formData.Address}
                        onChange={handleChange}
                      
                         />
                      </Grid>

            {/* Country */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Country"
                name="country"
                fullWidth
                required
                value={formData.country}
                onChange={handleChange}
              />
            </Grid>

            {/* State */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                name="state"
                fullWidth
                required
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>

            {/* City */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                name="city"
                fullWidth
                required
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>

            {/* Pincode */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pincode"
                name="pincode"
                fullWidth
                required
                value={formData.pincode}
                onChange={handleChange}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
            <Button type="submit" style={{backgroundColor:"#c69087"}} variant="contained" fullWidth onClick={() => navigate("/Artist/Login")}>
  SignUp
</Button>

            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
