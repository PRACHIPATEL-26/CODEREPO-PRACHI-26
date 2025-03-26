import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Link
} from "@mui/material";

function Trial() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
    // Add actual login logic here
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
        <Typography variant="h4" align="center" gutterBottom style={{color:"#825272"}}>
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
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/Artist/Forgotpw")}
              style={{ marginTop: "8px", marginBottom: "16px" }}
            >
              Forgot password?
            </Link>
          </Grid>
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
          <Button color="primary" onClick={() => navigate("/Artist/Signup")}>
            Sign Up
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Trial;
