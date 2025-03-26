import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Typography, Paper, Grid } from "@mui/material";

function Trial() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [gender, setGender] = useState("");
  let [number, setNumber] = useState("");
  let [country, setCountry] = useState("");
  let [state, setState] = useState("");
  let [city, setCity] = useState("");
  let [pincode, setPincode] = useState("");

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "25px", marginTop: "80px",color:"#825272"}}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required/>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Mobile No" type="text" variant="outlined" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Email Id" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" multiline rows={2} variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} required/>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend" >Gender</FormLabel>
              <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Country" variant="outlined" value={country} onChange={(e) => setCountry(e.target.value)} required/>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="State" variant="outlined" value={state} onChange={(e) => setState(e.target.value)} required/>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} required/>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Pincode" type="text" variant="outlined" value={pincode} onChange={(e) => setPincode(e.target.value)} required/>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" style={{backgroundColor:"#c69087"}} fullWidth onClick={() => navigate("/Userlogin")}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Trial;
