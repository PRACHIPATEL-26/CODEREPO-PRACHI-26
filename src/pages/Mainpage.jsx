import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Container,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Link
} from "@mui/material";
import { 
  Spa, 
  Brush, 
  Face, 
  Palette, 
  Person,
  BusinessCenter,
  Email,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  LocationOn
} from "@mui/icons-material";

const HomePage = () => {
  const navigate = useNavigate();

  const roleCards = [
    {
      title: "For Clients",
      description: "Book professional artists for various beauty services with ease.",
      icon: <Person fontSize="large" />,
      buttonAction: () => navigate('/User/Login'),
    },
    {
      title: "For Artists",
      description: "Showcase your skills and grow your beauty business with us.",
      icon: <BusinessCenter fontSize="large" />,
      buttonAction: () => navigate('/Artist/Login'),
    }
  ];

  const services = [
    { 
      icon: <Brush fontSize="large" />, 
      title: "Nail Art", 
      description: "Professional nail designs for all occasions"
    },
    { 
      icon: <Palette fontSize="large" />, 
      title: "Mehendi", 
      description: "Traditional and contemporary henna designs"
    },
    { 
      icon: <Face fontSize="large" />, 
      title: "Makeup", 
      description: "Professional makeup services for every event"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          mt:8,
          height: "400px",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 2
        }}
      >
        <Box>
          <Typography variant="h3" gutterBottom>
            Beauty Services Platform
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Connect with professional beauty artists
          </Typography>
        </Box>
      </Box>

      {/* User/Artist Cards Section */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {roleCards.map((card, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }}>
                    {card.icon}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ my: 2 }}>
                    {card.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    onClick={card.buttonAction}
                    sx={{ mt: 2 }}
                  >
                    {card.title.includes("Clients") ? "Find Artists" : "Join As Artist"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Section */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
          Our Beauty Services
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    mx: 'auto', 
                    mb: 2,
                    bgcolor: 'primary.main',
                    color: 'white'
                  }}>
                    {service.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#333', color: 'white', py: 4, mt: 4 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Spa fontSize="large" sx={{ mr: 1 }} />
                <Typography variant="h6">BeautyConnect</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Connecting clients with professional beauty artists for all occasions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="inherit"><Facebook /></Link>
                <Link href="#" color="inherit"><Instagram /></Link>
                <Link href="#" color="inherit"><Twitter /></Link>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Quick Links</Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/" color="inherit" underline="hover">Home</Link>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/services" color="inherit" underline="hover">Services</Link>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/artists" color="inherit" underline="hover">Artists</Link>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/about" color="inherit" underline="hover">About Us</Link>
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Contact Us</Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                    <Email fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="body2">contact@beautyconnect.com</Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                    <Phone fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="body2">+1 (555) 123-4567</Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 30, color: 'white' }}>
                    <LocationOn fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="body2">123 Beauty St, City, Country</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />
          
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} BeautyConnect. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;