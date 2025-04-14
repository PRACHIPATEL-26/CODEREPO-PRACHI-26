import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Rating,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

// Sample reviews
const reviews = [
  {
    id: 1,
    client: "Anjali Mehta",
    service: "Bridal Makeup",
    rating: 5,
    comment: "Absolutely loved the makeup! You made my big day even more special 💖",
    date: "March 20, 2025",
  },
  {
    id: 2,
    client: "Simran Kaur",
    service: "Mehendi",
    rating: 4,
    comment: "Great design and smooth experience. Would book again!",
    date: "March 18, 2025",
  },
  {
    id: 3,
    client: "Pooja Yadav",
    service: "Nail Art",
    rating: 4.5,
    comment: "Nail art was classy and long-lasting. Thank you so much!",
    date: "March 15, 2025",
  },
];

const RatingsReviews = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" ,mt:8,ml:0,mr:0}}>
      <Typography variant="h4" fontWeight={600} mb={3} style={{color:"#825272"}}>
        Ratings & Reviews
      </Typography>

      <Grid container spacing={3}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 4,
                background: "#f9f5ff",
                border: "1px solid #e2d6f9",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600} color="#825272">
                      {review.client}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.service}
                    </Typography>
                  </Box>
                </Stack>

                <Rating
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  sx={{ mb: 1 }}
                />

                <Typography variant="body2" sx={{ mb: 1 }}>
                  "{review.comment}"
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {review.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RatingsReviews;
