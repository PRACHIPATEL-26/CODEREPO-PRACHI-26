import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Box,
  Tooltip,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { AddCircleOutline, Delete, PhotoCamera, Visibility, VisibilityOff } from "@mui/icons-material"; // Import visibility icons
import { db } from "../config/firebase"; // Import Firestore instance
import { setDoc,doc, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const ArtistSignup = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([{ name: "", cost: "" }]);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [artistType, setArtistType] = useState(""); // State for artist type
  const [formData, setFormData] = useState({
    name: "",
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
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addService = () => {
    setServices([...services, { name: "", cost: "" }]);
  };

  const removeService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignup = async () => {
    if (!artistType) {
      alert("Please select your artist type.");
      return;
    }

    const auth = getAuth();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Prepare artist data
      const artistData = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        password: formData.password,
        address: formData.address,
        country: formData.country,
        state: formData.state,
        location: formData.location,
        pincode: formData.pincode,
        about: formData.about,
        experience: formData.experience,
        priceRange: formData.priceRange,
        specialization: formData.specialization,
        facebook: formData.facebook,
        instagram: formData.instagram,
        youtube: formData.youtube,
        profilePhoto: previewPhoto || "",
        services: services,
        artistType: artistType, // Include artist type
        createdAt: serverTimestamp(), // Add a timestamp
      };

      // Determine the collection based on artist type
      const collectionName =
        artistType === "Mahendi Artist"
          ? "mahendiartists"
          : artistType === "Nail Artist"
          ? "nailartists"
          : "makeupartists"

      // Save artist data to Firestore
      await setDoc(doc(db, collectionName), artistData);

      alert("Signup successful!");
      // Redirect to login page
      navigate("/Artist/Login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 10 }}>
        {/* Profile Photo Section */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={-5}
          position="relative"
        >
          <Avatar
            src={previewPhoto || "https://via.placeholder.com/150"} // Fallback image
            alt="Profile"
            sx={{
              width: 90,
              height: 90,
              margin: "auto",
            }}
          />
          <input
            accept="image/*"
            id="profile-photo"
            type="file"
            onChange={handleProfilePhotoChange}
            style={{ display: "none"}}
          />
          <label htmlFor="profile-photo">
            <Tooltip title="Upload Profile Photo">
              <IconButton
                 color="primary"
                component="span"
                sx={{
                  position: "relative",
                  bottom: 42,
                  right: -28
                }}
              >
                <PhotoCamera />
              </IconButton>
            </Tooltip>
          </label>
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem" ,marginBottom:0} }}
        >
          Artist Signup
        </Typography>

        {/* Form Fields */}
        <Grid container spacing={2} sx={{ marginTop: 0 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Artist Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="artist-type-label">Artist Type</InputLabel>
              <Select
                labelId="artist-type-label"
                value={artistType}
                onChange={(e) => setArtistType(e.target.value)}
                label="Artist Type"
              >
                <MenuItem value="Mahendi Artist">Mahendi Artist</MenuItem>
                <MenuItem value="Nail Artist">Nail Artist</MenuItem>
                <MenuItem value="Makeup Artist">Makeup Artist</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 0 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile No"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email ID"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"} // Toggle between text and password
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: 0 }}>
          {/* Experience Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Experience (in years)"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              type="number"
              variant="outlined"
            />
          </Grid>

          {/* Price Range Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price Range"
              name="priceRange"
              value={formData.priceRange}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

          {/* Specialization Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Facebook URL"
              name="facebook"
              value={formData.facebook}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Instagram URL"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="YouTube URL"
              name="youtube"
              value={formData.youtube}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>

        {/* About Field */}
        <Grid item xs={12} >
            <TextField
              fullWidth
              label="About"
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              multiline
              rows={2}
              variant="outlined"
            />
          </Grid>
   </Grid>

        {/* Services Section */}
        <Typography variant="h6" sx={{ marginTop: 3 }}>
          Services
        </Typography>
        {services.map((service, index) => (
          <Grid container spacing={2} key={index} alignItems="center">
            <Grid item xs={12} sm={5.5}>
              <TextField
                fullWidth
                label="Service Name"
                value={service.name}
                onChange={(e) => handleServiceChange(index, "name", e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={5.5}>
              <TextField
                fullWidth
                label="cost"
                value={service.cost}
                onChange={(e) => handleServiceChange(index, "cost", e.target.value)}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Example Photo URL"
                value={service.photo}
                onChange={(e) => handleServiceChange(index, "photo", e.target.value)}
                variant="outlined"
              />
            </Grid> */}
            <Grid item xs={12} sm={1}>
              <IconButton color="error" onClick={() => removeService(index)}>
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Button
          startIcon={<AddCircleOutline />}
          onClick={addService}
          sx={{ marginTop: 2 }}
        >
          Add Service
        </Button>

        {/* Signup Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 3, fontSize: { xs: "0.9rem", sm: "1rem" ,backgroundColor:"#c69087"} }}
          onClick={handleSignup}
        >
          Signup
        </Button>
      </Paper>
    </Container>
  );
};

export default ArtistSignup;
