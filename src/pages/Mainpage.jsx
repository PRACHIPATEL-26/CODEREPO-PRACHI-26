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
  Link,
  Paper,
  Chip,
  useTheme
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
  LocationOn,
  CalendarToday,
  Star,
  AccessTime,
  Payment
} from "@mui/icons-material";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const roleCards = [
    {
      title: "For Clients",
      description: "Discover and book top-rated beauty professionals in your area for any occasion.",
      icon: <Person fontSize="large" />,
      buttonAction: () => navigate('/User/Login'),
      color: theme.palette.primary.main
    },
    {
      title: "For Artists",
      description: "Expand your clientele and manage your beauty business efficiently.",
      icon: <BusinessCenter fontSize="large" />,
      buttonAction: () => navigate('/Artist/Login'),
      color: theme.palette.secondary.main
    }
  ];

  const services = [
    { 
      icon: <Brush fontSize="large" />, 
      title: "Nail Art", 
      description: "Professional nail designs for all occasions",
      popular: true
    },
    { 
      icon: <Palette fontSize="large" />, 
      title: "Mehendi", 
      description: "Traditional and contemporary henna designs",
      popular: true
    },
    { 
      icon: <Face fontSize="large" />, 
      title: "Makeup", 
      description: "Professional makeup services for every event",
      popular: true
    },
    // { 
    //   icon: <AccessTime fontSize="large" />, 
    //   title: "Bridal Packages", 
    //   description: "Complete bridal beauty solutions"
    // },
    { 
      icon: <Star fontSize="large" />, 
      title: "Special Effects", 
      description: "Creative makeup for special occasions"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Select Service & Location",
      description: "Choose from our wide range of beauty services and your preferred location",
      icon: <LocationOn color="primary" fontSize="large" />
    },
    {
      step: 2,
      title: "Browse Artists",
      description: "View profiles, portfolios, and ratings of available artists",
      icon: <Person color="primary" fontSize="large" />
    },
    {
      step: 3,
      title: "Book Appointment",
      description: "Select date, time, and confirm your booking with secure payment",
      icon: <CalendarToday color="primary" fontSize="large" />
    },
    {
      step: 4,
      title: "Enjoy Service",
      description: "Relax while our professional artists deliver exceptional service",
      icon: <Star color="primary" fontSize="large" />
    }
  ];

  return (
    <Box sx={{ backgroundColor:"#faecd4"}}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "80vh",
          minHeight: "600px",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1950')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 2,
          position: "relative"
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Elevate Your Beauty Experience
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Connecting you with the finest beauty professionals for flawless results
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={() => navigate('/User/Login')}
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Book an Artist
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              onClick={() => navigate('/Artist/Login')}
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Join as Artist
            </Button>
          </Box>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 8, backgroundColor: "#faecd4"}}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              mb: 6,
              color: theme.palette.text.primary
            }}
          >
            How BeautyConnect Works
          </Typography>
          
          <Grid container spacing={12}>
            {howItWorks.map((step, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Paper elevation={3} sx={{ 
                  p: 3, 
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[10]
                  }
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: 2 
                  }}>
                    <Avatar sx={{ 
                      width: 60, 
                      height: 60, 
                      backgroundColor: theme.palette.primary.light 
                    }}>
                      {step.icon}
                    </Avatar>
                  </Box>
                  <Typography 
                    variant="h6" 
                    align="center" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: theme.palette.primary.main
                    }}
                  >
                    Step {step.step}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    align="center" 
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    align="center" 
                    color="text.secondary"
                  >
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8 ,backgroundColor:"#faecd4"}}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              mb: 6,
              color: theme.palette.text.primary
            }}
          >
            Our Premium Services
          </Typography>
          
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[10]
                  }
                }}>
                  <CardContent sx={{ 
                    flexGrow: 1,
                    textAlign: 'center', 
                    py: 4,
                    px: 3
                  }}>
                    {service.popular && (
                      <Chip 
                        label="Popular" 
                        color="secondary" 
                        size="small" 
                        sx={{ 
                          position: 'absolute', 
                          top: 10, 
                          right: 10 
                        }} 
                      />
                    )}
                    <Avatar sx={{ 
                      width: 70, 
                      height: 70, 
                      mx: 'auto', 
                      mb: 3,
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText
                    }}>
                      {service.icon}
                    </Avatar>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* User/Artist Cards Section */}
      <Box sx={{ 
        py: 8,
        backgroundColor:"#faecd4"
        // backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              mb: 6,
              color: theme.palette.text.primary
            }}
          >
            Join Our Community
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {roleCards.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={4} sx={{ 
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: card.color,
                  color: 'white'
                }}>
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    py: 5,
                    px: 4
                  }}>
                    <Avatar sx={{ 
                      width: 80, 
                      height: 80, 
                      mx: 'auto', 
                      mb: 3,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white'
                    }}>
                      {card.icon}
                    </Avatar>
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      paragraph 
                      sx={{ 
                        my: 3,
                        fontSize: '1.1rem'
                      }}
                    >
                      {card.description}
                    </Typography>
                    <Button 
                      variant="contained" 
                      onClick={card.buttonAction}
                      sx={{ 
                        mt: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        color: card.color,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.9)'
                        }
                      }}
                    >
                      {card.title.includes("Clients") ? "Find Artists Now" : "Join As Artist"}
                    </Button>
                  </CardContent>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      {/* <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              mb: 6,
              color: theme.palette.text.primary
            }}
          >
            What Our Clients Say
          </Typography>
          
          <Grid container spacing={4}>
            {[1, 2, 3].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} color="primary" fontSize="small" />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "I found the perfect makeup artist for my wedding through BeautyConnect. The platform made it so easy to compare portfolios and book exactly what I wanted."
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                      src={`https://randomuser.me/api/portraits/women/${index + 30}.jpg`} 
                      sx={{ mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Sarah Johnson</Typography>
                      <Typography variant="body2" color="text.secondary">Bride, New York</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* Footer */}
      <Box sx={{ 
        bgcolor: theme.palette.grey[900], 
        color: 'white', 
        pt: 6,
        pb: 4
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Spa fontSize="large" sx={{ mr: 1, color: theme.palette.primary.light }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>BeautyConnect</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2, opacity: 0.8 }}>
                Your premier platform connecting beauty enthusiasts with top-tier professionals for all occasions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  <Facebook fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  <Instagram fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  <Twitter fontSize="large" />
                </Link>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Quick Links</Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Home</Link>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/services" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Services</Link>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/artists" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Artists</Link>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/about" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>About Us</Link>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Link href="/contact" color="inherit" underline="hover" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>Contact</Link>
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>Contact Information</Typography>
              <List dense>
                <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 36, color: theme.palette.primary.light, mt: 0.5 }}>
                    <Email />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>contact@beautyconnect.com</Typography>
                </ListItem>
                <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 36, color: theme.palette.primary.light, mt: 0.5 }}>
                    <Phone />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>+1 (555) 123-4567</Typography>
                </ListItem>
                <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 36, color: theme.palette.primary.light, mt: 0.5 }}>
                    <LocationOn />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>123 Beauty Street, Suite 101<br />New York, NY 10001</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          
          <Divider sx={{ 
            my: 4, 
            bgcolor: 'rgba(255,255,255,0.1)' 
          }} />
          
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} BeautyConnect. All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Terms of Service | Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;