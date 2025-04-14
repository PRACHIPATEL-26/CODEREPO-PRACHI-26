import React, { useState, useEffect } from "react";
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
  CircularProgress,
  Menu,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff, PhotoCamera } from "@mui/icons-material";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

  // State for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const newProfileImage = reader.result;
        setProfileImage(newProfileImage);

        // Update the profile image in Firestore
        const db = getFirestore();
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userRef = doc(db, "users", user.uid);
          try {
            await updateDoc(userRef, { profileImage: newProfileImage });
            console.log("Profile image updated successfully!");
          } catch (error) {
            console.error("Error updating profile image:", error);
          }
        }
      };
      reader.readAsDataURL(file);
    }
    handleMenuClose(); // Close the menu after selecting a photo
  };

  const handleRemovePhoto = async () => {
    setProfileImage("https://via.placeholder.com/150"); // Reset to default placeholder

    // Update Firestore to remove the profile photo
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, { profileImage: "https://via.placeholder.com/150" });
        console.log("Profile photo removed successfully!");
      } catch (error) {
        console.error("Error removing profile photo:", error);
      }
    }
    handleMenuClose(); // Close the menu after removing the photo
  };

  useEffect(() => {
    const fetchUserData = async (user) => {
      const db = getFirestore();
      const userId = user.uid;
      const userRef = doc(db, "users", userId);

      try {
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData(data);
          if (data.profileImage) {
            setProfileImage(data.profileImage);
          }
        } else {
          console.error("No such user!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user);
      } else {
        console.error("No user is logged in!");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="md" style={{ textAlign: "center", marginTop: "100px" }}>
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Loading user data...
        </Typography>
      </Container>
    );
  }

  const fieldOrder = [
    "name",
    "address",
    "email",
    "password",
    "number",
    "gender",
    "country",
    "state",
    "city",
    "pincode",
  ];

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "80px", textAlign: "center" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Avatar
            src={profileImage}
            alt="Profile"
            sx={{ width: 90, height: 90, margin: "auto" }}
          />
          {editMode && (
            <>
              <IconButton
                color="primary"
                onClick={handleMenuOpen}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <PhotoCamera />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <label style={{ cursor: "pointer" }}>
                    Select Photo
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </MenuItem>
                <MenuItem onClick={handleRemovePhoto}>Remove Photo</MenuItem>
              </Menu>
            </>
          )}
        </div>
        <Typography variant="h4" gutterBottom style={{ color: "#825272" }}>
          User Profile
        </Typography>
        <Grid container spacing={2}>
          {fieldOrder.map((key) => (
            <Grid item xs={6} key={key}>
              <TextField
                fullWidth
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                variant="outlined"
                name={key}
                type={key === "password" && editMode ? (showPassword ? "text" : "password") : "text"}
                value={key === "password" && !editMode ? "••••••••" : userData[key]}
                onChange={editMode ? (e) => setUserData({ ...userData, [e.target.name]: e.target.value }) : undefined}
                InputProps={{
                  readOnly: !editMode,
                  endAdornment:
                    key === "password" && editMode ? (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
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
          style={{ marginTop: "20px", backgroundColor: "#c69087" }}
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Save Profile" : "Edit Profile"}
        </Button>
      </Paper>
    </Container>
  );
}

export default UserProfile;
