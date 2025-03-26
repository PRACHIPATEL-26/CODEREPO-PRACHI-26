import React from "react";
import {
  Card,
  Typography,
  Avatar,
  Rating,
  Chip,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SmallArtistCard = () => {
  const navigate=useNavigate();
  const artist = {
    name: "Henna by Riya",
    location: "Ahmedabad",
    experience: "7+ yrs",
    rating: 4.8,
    reviews: 92,
    profilePic: "https://source.unsplash.com/80x80/?woman,indian",
    specialization: "Bridal & Arabic Mehendi",
    priceRange: "₹1500 - ₹5000",
    about:
      "Riya is a professional mehendi artist known for elegant and intricate designs. She specializes in bridal and Arabic mehendi styles and has more than 7 years of experience.",
  };
  return (
    <Card
      sx={{
        width: 280,
        borderRadius: 3,
        boxShadow: 3,
        p: 2,
        m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt:10,
      }}
    >
      {/* Top Section */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          alt={artist.name}
          src={artist.profilePic}
          sx={{ width: 60, height: 60 }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {artist.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {artist.location}
          </Typography>
        </Box>
      </Box>

      {/* Rating & Experience */}
      <Box mt={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <Rating value={artist.rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2">({artist.reviews})</Typography>
        </Box>
        <Chip
          label={artist.experience}
          size="small"
          color="secondary"
          sx={{ mt: 1 }}
        />
      </Box>

      {/* Specialization & Price Range */}
      <Divider sx={{ my: 1 }} />
      <Box>
        <Typography variant="body2" fontWeight="500">
          Specialization:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {artist.specialization}
        </Typography>
      </Box>

      <Box mt={1}>
        <Typography variant="body2" fontWeight="500">
          Price Range:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {artist.priceRange}
        </Typography>
      </Box>

      {/* View Artist Button */}
      <Box mt={2} textAlign="center">
        <Button variant="outlined" size="small" color="primary" fullWidth  onClick={() => navigate("/User/Mahendiartistdetail")}>
          View Artist
        </Button>
      </Box>
    </Card>
  );
};

export default SmallArtistCard;
