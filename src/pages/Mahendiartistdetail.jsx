// src/pages/ArtistDetail.js
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Chip,
  Divider,
  Grid,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from "react-router-dom";

const ArtistDetail = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/User/Appointment");
  };

  const artist = {
    name: "Henna by Riya",
    location: "Ahmedabad",
    experience: "7+ yrs",
    rating: 4.8,
    reviews: [
      { name: "Sneha", rating: 5, comment: "Amazing bridal mehendi!" },
      { name: "Pooja", rating: 4.5, comment: "Loved the intricate designs." },
    ],
    profilePic: "https://source.unsplash.com/100x100/?woman,indian",
    specialization: "Bridal & Arabic Mehendi",
    priceRange: "₹1500 - ₹5000",
    gallery: [
      "https://source.unsplash.com/150x150/?mehendi",
      "https://source.unsplash.com/150x150/?bridal",
      "https://source.unsplash.com/150x150/?henna",
    ],
    socialLinks: {
      instagram: "https://instagram.com/riya_mehendi",
      facebook: "https://facebook.com/henna.by.riya",
      youtube: "https://youtube.com/@riyamehendi",
    },
  };

  return (
    <Box p={2} mt={10} maxWidth="md" mx="auto">
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardHeader
          avatar={
            <Avatar src={artist.profilePic} sx={{ width: 60, height: 60 }} />
          }
          title={
            <Typography variant="h5" fontWeight="bold">
              {artist.name}
            </Typography>
          }
          subheader={artist.location}
          action={
            <Box display="flex" gap={1}>
              {artist.socialLinks.instagram && (
                <IconButton
                  component={Link}
                  href={artist.socialLinks.instagram}
                  target="_blank"
                >
                  <InstagramIcon color="secondary" />
                </IconButton>
              )}
              {artist.socialLinks.facebook && (
                <IconButton
                  component={Link}
                  href={artist.socialLinks.facebook}
                  target="_blank"
                >
                  <FacebookIcon color="primary" />
                </IconButton>
              )}
              {artist.socialLinks.youtube && (
                <IconButton
                  component={Link}
                  href={artist.socialLinks.youtube}
                  target="_blank"
                >
                  <YouTubeIcon color="error" />
                </IconButton>
              )}
            </Box>
          }
        />
        <CardContent>
          {/* Rating & Experience */}
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Rating value={artist.rating} precision={0.1} readOnly />
            <Typography variant="body2">
              ({artist.reviews.length} reviews)
            </Typography>
            <Chip label={artist.experience} sx={{ ml: 2 }} />
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Specialization & Price */}
          <Typography variant="h6">Specialization</Typography>
          <Typography color="text.secondary">{artist.specialization}</Typography>

          <Typography variant="h6" mt={2}>
            Price Range
          </Typography>
          <Typography color="text.secondary">{artist.priceRange}</Typography>

          {/* Gallery */}
          <Typography variant="h6" mt={3}>
            Gallery
          </Typography>
          <Grid container spacing={2} mt={1}>
            {artist.gallery.map((img, idx) => (
              <Grid item xs={4} key={idx}>
                <img
                  src={img}
                  alt={`work-${idx}`}
                  style={{ width: "100%", borderRadius: 8 }}
                />
              </Grid>
            ))}
          </Grid>

          {/* Reviews */}
          <Typography variant="h6" mt={3}>
            Customer Reviews
          </Typography>
          {artist.reviews.map((review, idx) => (
            <Box key={idx} mt={1}>
              <Typography fontWeight="bold">{review.name}</Typography>
              <Rating value={review.rating} size="small" readOnly />
              <Typography color="text.secondary">{review.comment}</Typography>
            </Box>
          ))}

          {/* Book Appointment Button */}
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
             style={{backgroundColor:"#c69087"}}
              size="large"
              onClick={handleBookAppointment}
              sx={{ borderRadius: 2, px: 4 }}
            >
              Book Appointment
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ArtistDetail;
