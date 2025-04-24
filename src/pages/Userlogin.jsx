import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Link,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import visibility icons
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Trial() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = async() => {
if(!email || !password) {
  alert("Please fill in all fields.");
  return;
}
try {
  // Add your login logic here, e.g., Firebase authentication
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log("Login successful:", userCredential.user);
  
  const token = await userCredential.user.getIdToken();
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userCredential.user.uid); 
    console.log({ email, password });
    navigate("/Homepage")
    // Add actual login logic here
} catch (error) {
  console.error("Login error:", error.message);
  alert("Invalid email or password. Please try again.");
}
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        style={{
          padding: "30px",
          marginTop: "80px",
          borderRadius: "12px",
          backgroundColor: "#fdfcfc"
        }}
      >
        <Typography variant="h4" align="center" style={{color:"#825272"}} gutterBottom>
          Login Page
        </Typography>

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"} // Toggle between text and password
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <Grid container justifyContent="flex-end">
          {/* <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/User/Forgotpw")}
              style={{ marginTop: "8px", marginBottom: "16px" }}
            >
              Forgot password?
            </Link>
          </Grid> */}
        </Grid>

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          style={{ marginTop: "10px", backgroundColor: "#c69087" }}
        >
          Login
        </Button>

        <Typography align="center" style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Button color="primary" onClick={() => navigate("/User/Signup")}>
            Sign Up
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Trial;
