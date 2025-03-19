import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const services = [
  {
    title: "Mehendi Art",
    description: "Intricate and beautiful mehendi designs for all occasions.",
    image: "https://cdn.pixabay.com/photo/2017/10/14/06/03/mehndi-2849864_640.jpg",
  },
  {
    title: "Makeup Services",
    description: "Professional makeup services to enhance your beauty.",
    image: "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2023/07/bigstock-Makeup-Artist-Applies-Eye-Shad-470517451.jpg",
  },
  {
    title: "Nail Art",
    description: "Trendy and stylish nail art designs for every occasion.",
    image: "https://www.instyle.com/thmb/kQwJUEGDXzlk7m1T_kXnDVgqvG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WonkySmiley-54db0f7506044bcd90561928dccc0bb9.jpeg",
  },
];

const ServicesPage = () => {
  return (
    <Container sx={{ py: 5 , mt:10}}>
      <Typography variant="h3" textAlign="center" gutterBottom>
      Enhance Your Beauty with GlamourShine!
      </Typography>
      <Grid container spacing={4} textAlign={"center"}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, mx: "auto", boxShadow: 3, borderRadius: 3 }}>
              <CardMedia component="img" height="220" image={service.image} alt={service.title} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                <Button variant="contained" sx={{ mt: 2, backgroundColor: "#c69087" }} fullWidth>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;