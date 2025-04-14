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
import { Visibility, VisibilityOff, PhotoCamera, Delete, AddCircleOutline } from "@mui/icons-material";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function ArtistProfile() {
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [artistData, setArtistData] = useState({
    name: "",
    artistType: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
    country: "",
    state: "",
    location: "",
    pincode: "",
    about: "",
    experience: "",
    priceRange: "",
    specialization: "",
    facebook: "",
    instagram: "",
    youtube: "",
    profilePhoto: "",
    services: [{ name: "", cost: "" }],
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    handleMenuClose(); // Close the menu after selecting a photo
  };

  const handleRemovePhoto = () => {
    setProfileImage("https://via.placeholder.com/150"); // Reset to default placeholder
    handleMenuClose(); // Close the menu after removing the photo
  };

  useEffect(() => {
    const fetchArtistData = async (userEmail) => {
      const db = getFirestore();
      const collections = ["mahendiartists", "nailartists", "makeupartists"];
      let artistFound = false;

      try {
        for (const collectionName of collections) {
          console.log(`Checking collection: ${collectionName}`);
          const querySnapshot = await getDocs(
            query(collection(db, collectionName), where("email", "==", userEmail))
          );

          if (!querySnapshot.empty) {
            const artistDoc = querySnapshot.docs[0];
            const data = artistDoc.data();
            console.log("Artist data found:", data);

            setArtistData({
              ...data,
              name: data.name || "Unknown Artist",
              artistType: data.artistType || "Unknown Type",
            });

            if (data.profilePhoto) {
              setProfileImage(data.profilePhoto);
            }

            artistFound = true;
            break;
          }
        }

        if (!artistFound) {
          console.error("No artist data found in any collection!");
          alert("No artist data found. Please ensure your profile is set up correctly.");
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      } finally {
        setLoading(false);
      }
    };

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user.email);
        fetchArtistData(user.email); // Fetch data using the user's email
      } else {
        console.error("No user is logged in!");
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const handleChange = (e) => {
    setArtistData({ ...artistData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return (
      <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "100px" }}>
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Loading artist data...
        </Typography>
      </Container>
    );
  }

  // Define the order of fields explicitly
  const fieldOrder = [
    "name", // Correct field name for artist name
    "artistType", // Correct field name for artist type
    "mobile",
    "address",
    "email",
    "password",
    "country",
    "state",
    "location",
    "pincode",
    "experience",
    "priceRange",
  ];

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "80px", textAlign: "center" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Avatar
            src={profileImage}
            alt="Artist Profile"
            sx={{ width: 90, height: 90, margin: "auto" }}
          />
          {editMode && (
            <>
              <IconButton
                color="primary"
                onClick={handleMenuOpen}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
          Artist Profile
        </Typography>
        <Grid container spacing={2}>
          {fieldOrder.map((key) => (
            <Grid item xs={6} key={key}>
              {key === "password" ? (
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  value={artistData.password}
                  onChange={editMode ? handleChange : undefined}
                  InputProps={{
                    readOnly: !editMode,
                    endAdornment: editMode ? (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                          edge="end"
                        >
                          {showPassword ? <Visibility/> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                  }}
                />
              ) : (
                <TextField
                  fullWidth
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  variant="outlined"
                  name={key}
                  value={artistData[key]}
                  onChange={editMode ? handleChange : undefined}
                  InputProps={{
                    readOnly: !editMode,
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>

        {/* Specialization Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Specialization"
            name="specialization"
            variant="outlined"
            value={artistData.specialization}
            onChange={editMode ? handleChange : undefined}
            InputProps={{
              readOnly: !editMode,
            }}
          />
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Facebook"
            name="facebook"
            variant="outlined"
            value={artistData.facebook}
            onChange={editMode ? handleChange : undefined}
            InputProps={{
              readOnly: !editMode,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Instagram"
            name="instagram"
            variant="outlined"
            value={artistData.instagram}
            onChange={editMode ? handleChange : undefined}
            InputProps={{
              readOnly: !editMode,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="YouTube"
            name="youtube"
            variant="outlined"
            value={artistData.youtube}
            onChange={editMode ? handleChange : undefined}
            InputProps={{
              readOnly: !editMode,
            }}
          />
        </Grid>

        {/* About Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="About"
            name="about"
            variant="outlined"
            multiline
            rows={2}
            value={artistData.about}
            onChange={editMode ? handleChange : undefined}
            InputProps={{
              readOnly: !editMode,
            }}
          />
        </Grid>

        {/* Services Section */}
        <Typography variant="h6" style={{ marginTop: "20px", textAlign: "left" }}>
          Services
        </Typography>
        {artistData.services.map((service, index) => (
          <Grid container spacing={2} key={index} alignItems="center">
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Service Name"
                name={`serviceName-${index}`}
                value={service.name}
                onChange={(e) => {
                  const updatedServices = [...artistData.services];
                  updatedServices[index].name = e.target.value;
                  setArtistData({ ...artistData, services: updatedServices });
                }}
                InputProps={{
                  readOnly: !editMode,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="Cost"
                name={`serviceCost-${index}`}
                value={service.cost}
                onChange={(e) => {
                  const updatedServices = [...artistData.services];
                  updatedServices[index].cost = e.target.value;
                  setArtistData({ ...artistData, services: updatedServices });
                }}
                InputProps={{
                  readOnly: !editMode,
                }}
              />
            </Grid>
            {editMode && (
              <Grid item xs={2}>
                <IconButton
                  color="error"
                  onClick={() => {
                    const updatedServices = artistData.services.filter((_, i) => i !== index);
                    setArtistData({ ...artistData, services: updatedServices });
                  }}
                >
                  <Delete />
                </IconButton>
              </Grid>
            )}
          </Grid>
        ))}

        {editMode && (
          <Button
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={() => {
              const updatedServices = [...artistData.services, { name: "", cost: "" }];
              setArtistData({ ...artistData, services: updatedServices });
            }}
          >
            Add Service
          </Button>
        )}

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

export default ArtistProfile;
