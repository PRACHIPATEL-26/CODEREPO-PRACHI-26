import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function ServicesPage ()  {
  return (
    <Container sx={{ py: 5, mt: 7}}>
      <Typography variant="h3" textAlign="center" gutterBottom style={{color:"#825272"}}>
        Enhance Your Beauty with GlamourShine!
      </Typography>
      <Grid container spacing={4} textAlign={"center"}>
        
        {/* Mehendi Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, mx: "auto", boxShadow: 3, borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="220"
              image="https://cdn0.weddingwire.in/article/5474/3_2/1280/jpg/124745-muslim-mehndi-safarsaga-films.jpeg"
              alt="Mehendi Art"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">Mehendi Art</Typography>
              <Typography variant="body2" color="text.secondary">
                Intricate and beautiful mehendi designs for all occasions. Enhance your beauty with our intricate and artistic mehendi designs. Our skilled artists specialize in traditional, contemporary, and bridal mehendi, ensuring an elegant and long-lasting stain for your special occasions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Makeup Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, mx: "auto", boxShadow: 3, borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="220"
              image="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2023/07/bigstock-Makeup-Artist-Applies-Eye-Shad-470517451.jpg"
              alt="Makeup Services"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">Makeup Services</Typography>
              <Typography variant="body2" color="text.secondary">
                Professional makeup services to enhance your beauty. Transform your look with our professional makeup services. Whether it’s for a wedding, party, or a special event, our experts use high-quality products and techniques to give you a flawless, radiant finish tailored to your style.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Nail Art Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, mx: "auto", boxShadow: 3, borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="220"
              image="https://edited.beautybay.com/wp-content/uploads/2022/09/nailartbychlo.jpg"
              alt="Nail Art"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">Nail Art</Typography>
              <Typography variant="body2" color="text.secondary">
                Trendy and stylish nail art designs for every occasion. Indulge in creative and trendy nail art designs crafted by our experts. From minimalistic elegance to bold and intricate patterns, we offer customized nail services to complement your style and personality.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesPage;
