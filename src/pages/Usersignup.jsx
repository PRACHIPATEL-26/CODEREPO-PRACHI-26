import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  Paper,
  Grid,
  Avatar,
  IconButton,
  Box,
  InputAdornment,
} from "@mui/material";
import { PhotoCamera, Visibility, VisibilityOff } from "@mui/icons-material"; // Import visibility icons
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();

function Trial() {
  let navigate = useNavigate();

  const signup = async () => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        address,
        gender,
        number,
        country,
        state,
        city,
        pincode,
        password,
        profileImage, // Save the profile image URL
      });

      alert("Signup successful!");
      navigate("/User/Login");
    } catch (err) {
      console.error(err);
      alert("Error during signup: " + err.message);
    }
  };

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [gender, setGender] = useState("");
  let [number, setNumber] = useState("");
  let [country, setCountry] = useState("");
  let [state, setState] = useState("");
  let [city, setCity] = useState("");
  let [pincode, setPincode] = useState("");
  let [profileImage, setProfileImage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the base64 image as the profile image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "25px", marginTop: "80px", color: "#825272" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Avatar
                src={profileImage || "https://via.placeholder.com/150"} // Fallback image
                alt="Profile"
                sx={{ width: 100, height: 100, margin: "auto" }}
              />
              <IconButton
                color="primary"
                component="label"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <PhotoCamera />
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
              </IconButton>
            </Box>
            <Typography variant="h4" align="center">
          Create Account
        </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Mobile No"
              type="text"
              variant="outlined"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email Id"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              multiline
              rows={2}
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Country"
              variant="outlined"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="State"
              variant="outlined"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Pincode"
              type="text"
              variant="outlined"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#c69087" }}
              fullWidth
              onClick={signup}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Trial;
