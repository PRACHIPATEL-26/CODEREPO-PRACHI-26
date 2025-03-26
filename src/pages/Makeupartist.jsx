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

const makeupArtists = [
  { name: "Glam by Riya", description: "Bridal and party makeup expert." },
  { name: "Aarti Makeovers", description: "Subtle glam for special events." },
  { name: "Neha Beauty Studio", description: "HD makeup and contouring." },
  { name: "Simran's Makeover", description: "Modern bridal looks." },
  { name: "Roshni Makeup Artistry", description: "Flawless base and eye makeup." },
  { name: "Sana’s Glam Studio", description: "Natural and elegant makeup." },
  { name: "Divya Beauty Hub", description: "Perfect for weddings and shoots." },
  { name: "Komal Creations", description: "Airbrush and party makeup." },
  { name: "Zara Makeup Studio", description: "Long-lasting glam looks." },
  { name: "Ayesha Artistry", description: "Affordable and trendy makeup." },
  { name: "Tanya’s Glow Studio", description: "Classic and bold looks." },
  { name: "Nidhi Makeovers", description: "Creative eye makeup specialist." },
  { name: "Megha Beauty Studio", description: "Highly rated for bridal glam." },
  { name: "Anjali’s Touch", description: "Quick and quality service." },
  { name: "Ritika's Makeup Lounge", description: "Trendy and radiant finishes." },
  { name: "Riya Glam Zone", description: "Specializes in elegant bridal makeup." },
];

const MakeupArtistsList = () => {
  return (
    <Grid container spacing={3} padding={3} mt={5}>
      {makeupArtists.map((artist, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image={`https://source.unsplash.com/featured/?makeup,beauty,artist,${index}`}
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

export default MakeupArtistsList;
