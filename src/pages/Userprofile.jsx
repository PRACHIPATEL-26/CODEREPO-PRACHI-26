import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Avatar,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, PhotoCamera } from "@mui/icons-material";

function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    address: "123 Main Street, City, State, 12345",
    email: "johndoe@example.com",
    password: "password123",
    number: "9876543210",
    gender: "Male",
    country: "USA",
    state: "California",
    city: "Los Angeles",
    pincode: "90001"
  });
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const maskedPassword = "•".repeat(userData.password.length);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px", textAlign: "center" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Avatar
            src={profileImage}
            alt=""
            sx={{ width: 90, height: 90, margin: "auto" }}
          />
          {editMode && (
            <IconButton
              color="primary"
              component="label"
              style={{ position: "absolute", bottom: 0, right: 0 }}
            >
              <PhotoCamera />
              <input type="file" hidden accept="image/*" onChange={handleImageChange} />
            </IconButton>
          )}
        </div>
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(userData).map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <TextField
                fullWidth
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                variant="outlined"
                name={key}
                type={key === "password" && editMode ? (showPassword ? "text" : "password") : "text"}
                value={key === "password" && !editMode ? maskedPassword : value}
                onChange={editMode ? handleChange : undefined}
                InputProps={{
                  readOnly: !editMode,
                  endAdornment: 
                    key === "password" && editMode ? (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: "20px", backgroundColor:"#c69087"}}
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Save Profile" : "Edit Profile"}
        </Button>
      </Paper>
    </Container>
  );
}

export default UserProfile;
