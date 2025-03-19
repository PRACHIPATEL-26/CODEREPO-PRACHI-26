import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

const GradientBackground = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
});

const services = [
  { title: "Mehendi", image: "https://images.picxy.com/cache/2020/5/20/87dec57f95c119152ac4ee7f26a3521b.jpg", description: "Elegant and artistic mehendi designs." },
  { title: "Makeup", image: "https://www.ogleschool.edu/wp-content/uploads/2014/04/best-traits-of-makeup-artist.jpg", description: "Get a glamorous look from our experts." },
  { title: "Nail Art", image: "https://i.pinimg.com/736x/5e/a7/94/5ea7948619cae78a0472c7b689eb41bd.jpg", description: "Trendy and stylish nail art services." }
];


const HomePage = () => {
  return (
    <GradientBackground>
      <Container sx={{ mt: 4 }}>
        <Typography style={{ color: "black" }} variant="h3" gutterBottom>
          Enhance Your Beauty with GlamourShine!
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" height="250" image={service.image} alt={service.title} />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  <Typography variant="h5">{service.title}</Typography>
                  <Typography variant="body1" color="text.secondary">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GradientBackground>
  );
};

export default HomePage;
