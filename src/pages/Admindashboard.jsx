import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import SpaIcon from "@mui/icons-material/Spa";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FeedbackIcon from "@mui/icons-material/Feedback";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Bookings", icon: <EventIcon /> },
    { text: "Services", icon: <SpaIcon /> },
    { text: "Add Service", icon: <AddCircleIcon /> },
    { text: "Feedback", icon: <FeedbackIcon /> },
  ];

  const renderContent = () => {
    return (
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 2,
          minHeight: "300px",
          mt:2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          {activeTab}
        </Typography>

        <Typography variant="body1">
          {activeTab === "Dashboard" && "Welcome to the GlamourShine Admin Panel."}
          {activeTab === "Bookings" && "Here you can view and manage all customer bookings."}
          {activeTab === "Services" && "Update or remove Makeup, Mehendi, and Nail Art services."}
          {activeTab === "Add Service" && "Add a new beauty service to your list."}
          {activeTab === "Feedback" && "View reviews and feedback from customers."}
        </Typography>
      </Paper>
    );
  };

  return (
    <Box sx={{ display: "flex", height: "100vh"}}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 220,
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e0e0e0",
          p: 2,
          mt:7,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
          }}
        >
          GlamourShine Admin
        </Typography>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              selected={activeTab === item.text}
              onClick={() => setActiveTab(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
