import React from "react";
import { Container, TextField, Button, Typography, Grid, Paper } from "@mui/material";

const ContactUs = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10.5}}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Have questions? Feel free to reach out to us!
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Name" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Email" variant="outlined" type="email" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Message" variant="outlined" multiline rows={3} required />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" style={{backgroundColor:"#c69087"}} fullWidth>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Contact Information
        </Typography>
        <Typography variant="body2" align="center">
        📍Address: 123 Main Street, Your City, Your Country
        </Typography>
        <Typography variant="body2" align="center">
        📞Phone: +1 234 567 890
        </Typography>
        <Typography variant="body2" align="center">
        ✉Email: contact@yourdomain.com
        </Typography>
      </Paper>
    </Container>
  );
};

export default ContactUs;
