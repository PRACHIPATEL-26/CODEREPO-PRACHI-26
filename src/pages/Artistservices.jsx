import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Sample services (you can connect with Firebase later)
const services = [
  {
    id: 1,
    name: "Bridal Mehendi",
    price: 1500,
    duration: "2 hours",
    type: "Mehendi",
  },
  {
    id: 2,
    name: "Party Makeup",
    price: 1200,
    duration: "1.5 hours",
    type: "Makeup",
  },
  {
    id: 3,
    name: "French Nail Art",
    price: 800,
    duration: "1 hour",
    type: "Nail Art",
  },
];

const ServiceManagement = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" ,mt:8,ml:0}}>
      <Typography variant="h4" fontWeight={600} mb={3} style={{color:"#825272"}}>
        My Services
      </Typography>

      <Button
        variant="contained"
        sx={{ mb: 4, borderRadius: 3 ,backgroundColor:"#fab2a0"}}
        startIcon={<BrushIcon />}
      >
        Add New Service
      </Button>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 4,
                background: "#fff5fc",
                border: "1px solid #f2cbe3",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600} color="#825272">
                  {service.name}
                </Typography>

                <Stack direction="row" spacing={1} mt={1} mb={1}>
                  <Chip label={service.type} color="info" size="small" />
                  <Chip label={service.duration} color="warning" size="small" />
                </Stack>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Price:</strong> ₹{service.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceManagement;
