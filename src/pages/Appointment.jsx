import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';


const AppointmentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    paymentOption: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', formData);
  
    if (formData.paymentOption === 'advance') {
      // Navigate to the payment page with form data (if needed)
      navigate('/User/Payment', { state: { ...formData } });
    } else {
      alert('Appointment booked successfully! You will pay after the service.');
    }
  };
  const getCostDisplay = () => {
    const servicePrices = {
      Mehendi: 800,
      'Nail Art': 1200,
      Makeup: 1500,
    };
  
    const price = servicePrices[formData.service];
  
    if (!price) return '';
  
    if (formData.paymentOption === 'advance') {
      return `₹${price / 2} (50% advance)`;
    } else if (formData.paymentOption === 'after') {
      return `₹${price} (Full payment after service)`;
    }
    return '';
  };
  
  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 4, mt: 10 }}>
        <Typography variant="h4" gutterBottom style={{ color: "#825272", textAlign: "center" }}>
          Book Your Appointment
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Artist Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <FormControl fullWidth required margin="normal">
            <InputLabel>Select Service</InputLabel>
            <Select
            label="Select Service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <MenuItem value="Mehendi">Mehendi</MenuItem>
              <MenuItem value="Nail Art">Nail Art</MenuItem>
              <MenuItem value="Makeup">Makeup</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Preferred Date (e.g., 25 March 2025)"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            placeholder="25 March 2025"
          />

          <TextField
            label="Preferred Time (e.g., 3:00 PM)"
            name="time"
            value={formData.time}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            placeholder="3:00 PM"
          />

          <FormControl fullWidth required margin="normal">
            <InputLabel>Payment Option</InputLabel>
            <Select
            label="Payment Option"
              name="paymentOption"
              value={formData.paymentOption}
              onChange={handleChange}
            >
              <MenuItem value="advance">50% Advance, 50% After Service</MenuItem>
              <MenuItem value="after">Pay Full Amount After Service</MenuItem>
            </Select>
          </FormControl>

          {formData.paymentOption && (
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', color: "#555" }}>
              Cost: {getCostDisplay()}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#c69087" }}
          >
            Book Appointment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AppointmentPage;
