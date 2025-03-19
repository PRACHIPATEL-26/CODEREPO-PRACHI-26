import React, { useState } from "react";
import { Container, TextField, MenuItem, Button, Typography, Box } from "@mui/material";

const services = ["Mehendi", "Makeup", "Nail Art"];

const AppointmentPage = () => {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ service, date, time, name, email, phone });
    alert("Appointment booked successfully!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "#f9f5ff" }}>
      <Typography variant="h4" gutterBottom align="center" style={{color:"#c69087"}}>
        Book an Appointment
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          select
          label="Select Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          margin="normal"
        >
          {services.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          label="Select Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          label="Select Time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
        />

        <Button type="submit" variant="contained" style={{backgroundColor:"#c69087"}} fullWidth sx={{ mt: 2 }}>
          Book Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default AppointmentPage;
