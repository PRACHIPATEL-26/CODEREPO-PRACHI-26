import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box
} from '@mui/material';

const nailArtists = [
  { name: "Nails by Riya", description: "Trendy gel and acrylic designs." },
  { name: "Aarti Nail Studio", description: "Classy French and ombré nails." },
  { name: "Neha’s Nail Art", description: "Creative nail extensions and art." },
  { name: "Simran’s Nail Lounge", description: "Elegant bridal nail looks." },
  { name: "Roshni Nail Studio", description: "Unique glitter and chrome styles." },
  { name: "Sana’s Nail Bar", description: "Minimalist to bold nail art." },
  { name: "Divya’s Nail World", description: "Quick, durable nail extensions." },
  { name: "Komal Nail Art", description: "Seasonal and theme-based nails." },
  { name: "Zara Nail Studio", description: "Long-lasting gel polish services." },
  { name: "Ayesha Nail Trends", description: "Trendy matte and glossy combos." },
  { name: "Tanya's Nail Space", description: "Party-ready glam nail sets." },
  { name: "Nidhi's Nail Studio", description: "Hand-painted custom nail designs." },
  { name: "Megha’s Nail Artistry", description: "Perfect for weddings and events." },
  { name: "Anjali’s Nails", description: "Simple, clean, and stylish." },
  { name: "Ritika’s Nail Hub", description: "Bold and bright nail finishes." },
  { name: "Riya’s Polish & Shine", description: "Elegant nail detailing." },
];

const NailArtistsList = () => {
  return (
    <Grid container spacing={3} padding={3} mt={5}>
      {nailArtists.map((artist, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image={`https://source.unsplash.com/featured/?nailart,nails,manicure,${index}`}
              alt={artist.name}
            />
            <CardContent>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  {artist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {artist.description}
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                size="small"
                variant="contained"
                sx={{ borderRadius: 2, backgroundColor: "#c69087" }}
                color="secondary"
              >
                Book Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NailArtistsList;
