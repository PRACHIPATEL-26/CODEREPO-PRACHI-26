import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

function Trial() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: "20px", marginTop: "80px", borderRadius: "8px" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login Page
                </Typography>
                <TextField
                    fullWidth
                    label="Email Id"
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
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => console.log({ email, password })}
                    style={{ marginTop: "20px", backgroundColor:"#c69087"}}
                >
                    Login
                </Button>
                <Typography align="center" style={{ marginTop: "15px" }}>
               IF NOT REGISTERED,<Button color="primary" onClick={() => navigate("/Usersignup")}>
                         click here
                    </Button>
                </Typography>
            </Paper>
        </Container>
    );
}

export default Trial;
