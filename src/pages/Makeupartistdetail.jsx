import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from "react-router-dom";

const Makeupartistdetail = ({ artist }) => {
  const navigate = useNavigate();

  const handleBookAppointment = (service, cost) => {
    navigate("/User/Appointment", {
      state: {
        artistName: artist.name,
        service,
        cost,
      },
    });
  };

  if (!artist) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h5">No artist details available</Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Avatar
          alt={artist.name}
          src={artist.profilePhoto}
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {artist.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {artist.location}
          </Typography>
        </Box>
        <IconButton onClick={() => window.open(artist.instagram, "_blank")} color="primary">
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={() => window.open(artist.facebook, "_blank")} color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton onClick={() => window.open(artist.youtube, "_blank")} color="primary">
          <YouTubeIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Experience</Typography>
      <Typography color="text.secondary" mb={2}>
        {artist.experience} years
      </Typography>

      <Typography variant="h6">Specialization</Typography>
      <Typography color="text.secondary" mb={2}>
        {artist.specialization}
      </Typography>

      <Typography variant="h6">Price Range</Typography>
      <Typography color="text.secondary" mb={2}>
        {artist.priceRange}
      </Typography>

      <Typography variant="h6">About</Typography>
      <Typography color="text.secondary" mb={2}>
        {artist.about}
      </Typography>
       <Typography variant="h6">Gallery</Typography>
            <Grid container spacing={2} mt={1}>
              {artist.gallery?.map((img, idx) => (
                <Grid item xs={4} key={idx}>
                  <img
                    src={img}
                    alt={`work-${idx}`}
                    style={{ width: "100%", borderRadius: 8, height: "300px" }}
                  />
                </Grid>
              ))}
            </Grid>

      <Typography variant="h6" mt={4}>
        Services
      </Typography>
      <Grid container spacing={2} mt={1}>
        {artist.services?.map((service, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              border="1px solid #ddd"
              borderRadius="8px"
            >
              <Typography variant="body1">{service.name}</Typography>
              <Box display="flex" alignItems="center" gap={2}>
                <Typography variant="body2" color="text.secondary">
                  ₹{service.cost}
                </Typography>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#c69087" }}
                  onClick={() => handleBookAppointment(service.name, service.cost)}
                >
                  Book
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Makeupartistdetail;
