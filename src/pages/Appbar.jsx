import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation items for User and Artist
  const userNavItems = [
    { label: "Home", path: "/Homepage" },
    { label: "User Profile", path: "/User/Profile" },
    { label: "View Previous Orders", path: "User/Orders" },
    { label: "About Us", path: "/Aboutuspage" },
    { label: "Contact", path: "/Contactus" },
  ];

  const artistNavItems = [
    { label: "View Appointments", path: "/Artist/Bookingreq" },
    { label: "Profile", path: "/Artist/Profile" },
    { label: "Earnings", path: "/Artist/Earning" },
    { label: "Help", path: "/Artist/Help" },
  ];

  // Check current path to decide which menu to show
  const isArtistPath = location.pathname.startsWith("/Artist");
  const navItems = isArtistPath ? artistNavItems : userNavItems;

  // Toggle Drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="absolute" sx={{ backgroundColor: "#c69087" }}>
      <Toolbar>
        {/* Drawer Menu Icon */}
        {localStorage.getItem("token") ? (
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : null}

        {/* Drawer Component */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div style={{ width: 250, backgroundColor: "#FFF", height: "100%" }}>
            <List>
              <ListItem button onClick={toggleDrawer(false)}>
                <ArrowBackIcon />
                <ListItemText primary="" sx={{ marginLeft: 2 }} />
              </ListItem>
              <Divider />

              {navItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setDrawerOpen(false);
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>

        {/* App Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFF", marginLeft: 2 }}>
          GlamourShine
        </Typography>

        {/* Login / Logout Button */}
       {/* Login / Logout Button */}
{location.pathname !== "/" && location.pathname !== "/Mainpage" && (
  localStorage.getItem("token") ? (
    <Button
      color="inherit"
      sx={{ marginLeft: "auto" }}
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate(isArtistPath ? "/Artist/Login" : "/User/Login");
      }}
    >
      LOGOUT
    </Button>
  ) : (
    <Button
      color="inherit"
      sx={{ marginLeft: "auto" }}
      onClick={() => navigate(isArtistPath ? "/Artist/Login" : "/User/Login")}
    >
      LOGIN
    </Button>
  )
)}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
