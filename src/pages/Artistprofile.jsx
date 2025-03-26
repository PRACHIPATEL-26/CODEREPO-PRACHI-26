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
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    OutlinedInput,
    Checkbox,
    ListItemText,
} from "@mui/material";
import { Visibility, VisibilityOff, PhotoCamera } from "@mui/icons-material";

const servicesList = ["Mehendi", "Nail Art", "Makeup"];

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
        pincode: "90001",
        services: "",
        experience: ""
    });
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

    const maskedPassword = "•".repeat(userData.password.length);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleServiceChange = (event) => {
        const {
            target: { value },
        } = event;
        setUserData({
            ...userData,
            services: typeof value === "string" ? value.split(",") : value,
        });
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
            <Paper elevation={3} style={{ padding: "20px", marginTop: "80px", textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                    <Avatar src={profileImage} alt="" sx={{ width: 90, height: 90, margin: "auto" }} />
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
                <Typography variant="h4" gutterBottom style={{ color: "#825272" }}>
                    Profile
                </Typography>
                <Grid container spacing={2}>
                    {Object.entries(userData).map(([key, value]) => {
                        if (key === "services" || key === "experience") return null; // Skip custom render
                        return (
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
                        );
                    })}

                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Service</InputLabel>
                            <Select
                                name="services"
                                value={userData.services}
                                onChange={handleChange}
                                label="Service"
                                disabled={!editMode}
                                sx={{ textAlign: "left" }}
                            >
                                {servicesList.map((service) => (
                                    <MenuItem key={service} value={service}>
                                        {service}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Experience Field */}
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Years of Experience"
                            variant="outlined"
                            name="experience"
                            type="number"
                            value={userData.experience}
                            onChange={editMode ? handleChange : undefined}
                            InputProps={{
                                readOnly: !editMode,
                            }}
                        />
                    </Grid>
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
