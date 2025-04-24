import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Mainpage.png";
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
  useTheme,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails
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
  Payment,
  ExpandMore,
  RateReview,
  QuestionAnswer,
  Send
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

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride, Delhi",
      rating: 5,
      content: "Found the perfect makeup artist for my wedding through BeautyConnect. The attention to detail was incredible!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Aarav Patel",
      role: "Groom, Mumbai",
      rating: 5,
      content: "The mehendi artist I booked created stunning designs that lasted through all my wedding events. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Neha Kapoor",
      role: "Bridesmaid, Bangalore",
      rating: 4,
      content: "Easy to use platform with talented professionals. The nail artist arrived right on time with all her equipment.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const faqs = [
    {
      question: "How do I book a beauty service?",
      answer: "Simply select your service, browse available artists in your area, choose your preferred date/time, and complete the booking with secure payment."
    },
    {
      question: "What if I need to cancel my appointment?",
      answer: "You can cancel up to 24 hours before your appointment through your dashboard. Cancellation policies may vary by artist."
    },
    {
      question: "How are artists vetted on BeautyConnect?",
      answer: "All artists undergo a rigorous verification process including portfolio review, skill assessment, and background checks."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit/debit cards, UPI, and net banking. Payment is securely processed through our platform."
    },
    {
      question: "Can I request a specific artist?",
      answer: "Yes, you can search for specific artists by name or browse our featured professionals to find your perfect match."
    }
  ];

  return (
    <Box sx={{ backgroundColor: "#f9f5f0" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "90vh",
          minHeight: "700px",
          backgroundImage: "url('https://img.freepik.com/premium-vector/soft-pastel-gradient-background-with-gentle-transitions_1304147-271685.jpg')",
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
            variant="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }
            }}
          >
            Elevate Your Beauty Experience
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4,
              textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
            }}
          >
            Connecting you with the finest beauty professionals for flawless results
          </Typography>
          {/* <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            justifyContent: 'center', 
            mt: 4,
            flexWrap: 'wrap'
          }}>
            <Button 
              variant="contained" 
              size="large" 
              onClick={() => navigate('/User/Login')}
              sx={{ 
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '50px',
                boxShadow: theme.shadows[4],
                '&:hover': {
                  boxShadow: theme.shadows[8]
                }
              }}
            >
              Book an Artist
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              onClick={() => navigate('/Artist/Login')}
              sx={{ 
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '50px',
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.15)'
                }
              }}
            >
              Join as Artist
            </Button>
          </Box> */}
        </Container>
        
        {/* Scrolling indicator */}
        <Box sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) translateX(-50%)' },
            '40%': { transform: 'translateY(-20px) translateX(-50%)' },
            '60%': { transform: 'translateY(-10px) translateX(-50%)' }
          }
        }}>
          <ExpandMore sx={{ fontSize: '3rem', color: 'white' }} />
        </Box>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ 
        py: 4,
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        boxShadow: theme.shadows[4]
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" sx={{ fontWeight: 700 }}>500+</Typography>
              <Typography variant="subtitle1">Professional Artists</Typography>
            </Grid>
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" sx={{ fontWeight: 700 }}>10K+</Typography>
              <Typography variant="subtitle1">Happy Clients</Typography>
            </Grid>
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" sx={{ fontWeight: 700 }}>50+</Typography>
              <Typography variant="subtitle1">Cities</Typography>
            </Grid>
            <Grid item xs={6} sm={3} textAlign="center">
              <Typography variant="h3" sx={{ fontWeight: 700 }}>98%</Typography>
              <Typography variant="subtitle1">Satisfaction Rate</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 10, backgroundColor: "#f9f5f0" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Chip 
              label="PROCESS" 
              color="primary" 
              sx={{ 
                mb: 2,
                px: 2,
                py: 1,
                fontSize: '0.8rem',
                fontWeight: 600
              }} 
            />
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary
              }}
            >
              How BeautyConnect Works
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                color: theme.palette.text.secondary
              }}
            >
              Simple steps to book your perfect beauty professional
            </Typography>
          </Box>
          
          <Grid container spacing={6}>
            {howItWorks.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ 
                  position: 'relative',
                  height: '100%',
                  '&:hover .step-number': {
                    transform: 'scale(1.1)',
                    color: theme.palette.primary.main
                  }
                }}>
                  <Box 
                    className="step-number"
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.background.paper,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: theme.palette.text.secondary,
                      boxShadow: theme.shadows[2],
                      transition: 'all 0.3s ease',
                      zIndex: 2
                    }}
                  >
                    {step.step}
                  </Box>
                  <Paper elevation={4} sx={{ 
                    p: 4, 
                    height: '100%',
                    borderRadius: 3,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: theme.shadows[10]
                    }
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 3,
                      color: theme.palette.primary.main
                    }}>
                      {step.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      align="center" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2
                      }}
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
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Chip 
              label="SERVICES" 
              color="secondary" 
              sx={{ 
                mb: 2,
                px: 2,
                py: 1,
                fontSize: '0.8rem',
                fontWeight: 600
              }} 
            />
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary
              }}
            >
              Our Premium Services
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                color: theme.palette.text.secondary
              }}
            >
              Discover our range of professional beauty services tailored for every occasion
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  borderRadius: 3,
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: theme.shadows[10],
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                      backgroundColor: theme.palette.primary.main,
                      color: 'white'
                    }
                  }
                }}>
                  <CardContent sx={{ 
                    flexGrow: 1,
                    textAlign: 'center', 
                    py: 5,
                    px: 3,
                    position: 'relative'
                  }}>
                    {service.popular && (
                      <Chip 
                        label="Popular" 
                        color="secondary" 
                        size="small" 
                        sx={{ 
                          position: 'absolute', 
                          top: 15, 
                          right: 15,
                          fontWeight: 600
                        }} 
                      />
                    )}
                    <Avatar 
                      className="service-icon"
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        mx: 'auto', 
                        mb: 3,
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        transition: 'all 0.3s'
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ fontWeight: 700 }}
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
                    <Button 
                      variant="text" 
                      color="primary"
                      sx={{ mt: 2 }}
                      onClick={() => navigate('/services')}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box textAlign="center" mt={6}>
            <Button 
              variant="outlined" 
              size="large" 
              onClick={() => navigate('/services')}
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '50px',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: "#f9f5f0" }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Chip 
              label="TESTIMONIALS" 
              sx={{ 
                mb: 2,
                px: 2,
                py: 1,
                fontSize: '0.8rem',
                fontWeight: 600,
                backgroundColor: theme.palette.success.light,
                color: theme.palette.success.dark
              }} 
            />
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                color: theme.palette.text.secondary
              }}
            >
              Hear from people who have experienced our services
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={2} sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: 3,
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    backgroundColor: theme.palette.primary.main,
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px'
                  }
                }}>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} color="primary" fontSize="small" />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ 
                    mb: 3, 
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    position: 'relative',
                    '&:before, &:after': {
                      content: '"\\201C"',
                      fontSize: '3rem',
                      color: theme.palette.grey[300],
                      position: 'absolute',
                      opacity: 0.5
                    },
                    '&:before': {
                      top: -15,
                      left: -10
                    },
                    '&:after': {
                      content: '"\\201D"',
                      bottom: -30,
                      right: -10
                    }
                  }}>
                    {testimonial.content}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                    <Avatar 
                      src={testimonial.avatar} 
                      sx={{ 
                        mr: 2,
                        width: 60,
                        height: 60,
                        border: `3px solid ${theme.palette.primary.light}`
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
          
          <Box textAlign="center" mt={6}>
            <Button 
              variant="contained" 
              startIcon={<RateReview />}
              onClick={() => navigate('/reviews')}
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '50px',
                boxShadow: theme.shadows[2],
                '&:hover': {
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              Read More Reviews
            </Button>
          </Box>
        </Container>
      </Box>

      {/* User/Artist Cards Section */}
      <Box sx={{ py: 10, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary
              }}
            >
              Join Our Community
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                color: theme.palette.text.secondary
              }}
            >
              Whether you're looking for beauty services or offering them, we have the perfect platform for you
            </Typography>
          </Box>
          
          <Grid container spacing={4} justifyContent="center">
            {roleCards.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={4} sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundColor: card.color,
                  color: 'white',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[10]
                  },
                  transition: 'all 0.3s'
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100px',
                    height: '100px',
                    clipPath: 'circle(50% at 100% 0)',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }} />
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    py: 6,
                    px: 4,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <Avatar sx={{ 
                      width: 90, 
                      height: 90, 
                      mx: 'auto', 
                      mb: 3,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        fontSize: '2.5rem'
                      }
                    }}>
                      {card.icon}
                    </Avatar>
                    <Typography 
                      variant="h3" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 700,
                        fontSize: '2rem',
                        mb: 2
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      paragraph 
                      sx={{ 
                        my: 3,
                        fontSize: '1.1rem',
                        opacity: 0.9,
                        maxWidth: '400px',
                        mx: 'auto'
                      }}
                    >
                      {card.description}
                    </Typography>
                    <Button 
                      variant="contained" 
                      onClick={card.buttonAction}
                      sx={{ 
                        mt: 2,
                        px: 5,
                        py: 1.5,
                        fontSize: '1rem',
                        borderRadius: '50px',
                        backgroundColor: 'white',
                        color: card.color,
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          transform: 'scale(1.05)'
                        },
                        transition: 'all 0.3s'
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

      {/* FAQ Section */}
      <Box sx={{ py: 10, backgroundColor: "#f9f5f0" }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={8}>
            <Chip 
              label="FAQS" 
              icon={<QuestionAnswer />}
              sx={{ 
                mb: 2,
                px: 2,
                py: 1,
                fontSize: '0.8rem',
                fontWeight: 600,
                backgroundColor: theme.palette.info.light,
                color: theme.palette.info.dark
              }} 
            />
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: '700px',
                mx: 'auto',
                color: theme.palette.text.secondary
              }}
            >
              Find answers to common questions about our platform
            </Typography>
          </Box>
          
          <Box sx={{ mb: 6 }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={index} 
                elevation={2} 
                sx={{ 
                  mb: 2,
                  borderRadius: '8px !important',
                  overflow: 'hidden',
                  '&:before': {
                    display: 'none'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore color="primary" />}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: theme.palette.background.paper }}>
                  <Typography>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          
          <Box textAlign="center">
            <Button 
              variant="outlined" 
              size="large" 
              onClick={() => navigate('/contact')}
              sx={{ 
                px: 6,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '50px',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              Still Have Questions? Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stay Updated Section */}
      <Box sx={{ 
        py: 10,
        backgroundImage: 'linear-gradient(135deg, rgba(123, 31, 162, 0.9) 0%, rgba(33, 150, 243, 0.9) 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              mb: 3
            }}
          >
            Stay Updated
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Subscribe to our newsletter for the latest beauty trends, special offers, and artist spotlights
          </Typography>
          
          <Box 
            component="form" 
            sx={{ 
              display: 'flex', 
              maxWidth: '500px',
              mx: 'auto',
              mt: 4
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Your email address"
              sx={{ 
                mr: 2,
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: '50px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px'
                }
              }}
              InputProps={{
                style: {
                  paddingLeft: '20px'
                }
              }}
            />
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              endIcon={<Send />}
              sx={{ 
                px: 4,
                borderRadius: '50px',
                fontWeight: 600,
                boxShadow: theme.shadows[4],
                '&:hover': {
                  boxShadow: theme.shadows[8]
                }
              }}
            >
              Subscribe
            </Button>
          </Box>
          
          <Typography variant="body2" sx={{ mt: 3, opacity: 0.7 }}>
            We respect your privacy. Unsubscribe at any time.
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ 
        bgcolor: theme.palette.grey[900], 
        color: 'white', 
        pt: 8,
        pb: 4
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Spa fontSize="large" sx={{ mr: 2, color: theme.palette.primary.light }} />
                <Typography variant="h4" sx={{ fontWeight: 700 }}>BeautyConnect</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
                Your premier platform connecting beauty enthusiasts with top-tier professionals for all occasions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Link href="#" color="inherit" sx={{ 
                  opacity: 0.8, 
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s'
                }}>
                  <Facebook fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ 
                  opacity: 0.8, 
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s'
                }}>
                  <Instagram fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ 
                  opacity: 0.8, 
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.3s'
                }}>
                  <Twitter fontSize="large" />
                </Link>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>Company</Typography>
              <List dense disablePadding>
                {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                  <ListItem key={item} disableGutters sx={{ py: 0.5 }}>
                    <Link href="#" color="inherit" underline="hover" sx={{ 
                      opacity: 0.8, 
                      '&:hover': { 
                        opacity: 1,
                        color: theme.palette.primary.light
                      },
                      transition: 'all 0.2s'
                    }}>
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>Support</Typography>
              <List dense disablePadding>
                {['Help Center', 'Safety', 'Community', 'Guidelines'].map((item) => (
                  <ListItem key={item} disableGutters sx={{ py: 0.5 }}>
                    <Link href="#" color="inherit" underline="hover" sx={{ 
                      opacity: 0.8, 
                      '&:hover': { 
                        opacity: 1,
                        color: theme.palette.primary.light
                      },
                      transition: 'all 0.2s'
                    }}>
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>Contact Us</Typography>
              <List dense disablePadding>
                <ListItem disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36, color: theme.palette.primary.light, mt: 0.5 }}>
                    <Email />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>contact@beautyconnect.com</Typography>
                </ListItem>
                <ListItem disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36, color: theme.palette.primary.light, mt: 0.5 }}>
                    <Phone />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>+1 (555) 123-4567</Typography>
                </ListItem>
                <ListItem disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36, color: theme.palette.primary.light, mt: 0.5 }}>
                    <LocationOn />
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>123 Beauty Street, Suite 101<br />New York, NY 10001</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          
          <Divider sx={{ 
            my: 6, 
            bgcolor: 'rgba(255,255,255,0.1)' 
          }} />
          
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} BeautyConnect. All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  <Typography variant="body2">Terms of Service</Typography>
                </Link>
                <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  <Typography variant="body2">Privacy Policy</Typography>
                </Link>
                <Link href="#" color="inherit" underline="hover" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  <Typography variant="body2">Cookie Policy</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;