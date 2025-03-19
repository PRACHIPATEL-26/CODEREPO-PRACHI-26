import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "Home", path: "/Homepage" },
    { label: "Appointment", path: "/Appointment" },
    { label: "About Us", path: "/Aboutuspage" },
    // { label: "Services", path: "/services" },
    { label: "Contact", path: "/Contactus" },
  ];

  return (
    <AppBar position="absolute" sx={{ backgroundColor: "#c69087" }}>
      <Toolbar>
        {/* Menu Button for Opening Drawer */}
        <IconButton color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        {/* Side Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div style={{ width: 250, backgroundColor: "#FFF", height: "100%" }}>
            <List>
              {/* Back Button */}
              <ListItem button onClick={toggleDrawer(false)}>
                <ArrowBackIcon />
                <ListItemText primary="" sx={{ marginLeft: 2 }} />
              </ListItem>
              <Divider />

              {/* Navigation Items */}
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

        {/* Logo & Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFF", marginLeft: 2 }}>
          GlamourShine
        </Typography>

        {/* Login Button */}
        <Button color="inherit" sx={{ marginLeft: "auto" }} onClick={()=> navigate("/Userlogin")}>LOGIN</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
