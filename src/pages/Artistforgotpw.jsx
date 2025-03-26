import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const isArtistPath = location.pathname.includes("User");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Handle password reset logic here
      alert("Password reset successfully!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, p: 3, boxShadow: 3, borderRadius: 2 ,backgroundColor:"white"}}>
        <Typography variant="h4" textAlign="center" gutterBottom style={{color:"#825272"}}>
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            error={!!error}
            helperText={error}
          />
          <Button
            type="submit"
            variant="contained"
            style={{backgroundColor:"#c69087"}}
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate(isArtistPath ? "/User/Login":"/Artist/Login")}
          >
            Reset Password
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ForgetPassword;
