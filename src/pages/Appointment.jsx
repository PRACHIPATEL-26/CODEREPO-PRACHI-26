import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../config/firebase";

const AppointmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  // Retrieve data passed from Mahendiartistdetail
  const { artistName, service, cost } = location.state || {};

  const [formData, setFormData] = useState({
    artistName: artistName || "",
    service: service || "",
    cost: cost || "",
    date: "",
    time: "",
    paymentStatus: "Pending",
    userName: "", // Will be fetched from Firestore
  });

  // Fetch user's name from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const name = userSnap.data().name || "Anonymous";
            setFormData((prev) => ({
              ...prev,
              userName: name,
            }));
          } else {
            console.log("No such user document in Firestore!");
          }
        } catch (error) {
          console.error("Error fetching user name from Firestore:", error);
        }
      } else {
        console.log("No user is logged in");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Appointment Details:", formData);

    try {
      // Add to user's previous orders
      const userOrderRef = await addDoc(collection(db, "userpreviousorders"), {
        artist: formData.artistName,
        service: formData.service,
        cost: formData.cost,
        date: formData.date,
        time: formData.time,
        paymentStatus: formData.paymentStatus,
        status: "Pending",
        userName: formData.userName,
        createdAt: new Date(),
      });

      console.log("User Order written with ID:", userOrderRef.id);

      // Add to artist's booking requests
      const artistBookingRef = await addDoc(collection(db, "bookingRequests"), {
        client: formData.userName,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        cost: formData.cost,
        paymentStatus: formData.paymentStatus,
        status: "Pending",
      });

      console.log("Artist Booking Request ID:", artistBookingRef.id);

      alert("Appointment booked successfully!");
      navigate("/User/Orders");
    } catch (error) {
      console.error("Error adding appointment:", error);
      alert("Failed to book the appointment. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 4, mt: 10 }}>
        <Typography variant="h4" gutterBottom style={{ color: "#825272", textAlign: "center" }}>
          Book Your Appointment
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {/* User Name (Read-Only) */}
          <TextField
            label="Your Name"
            name="userName"
            value={formData.userName}
            fullWidth
            required
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />

          <TextField
            label="Artist Name"
            name="artistName"
            value={formData.artistName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <TextField
            label="Service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <TextField
            label="Cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <TextField
            label="Preferred Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Preferred Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            type="time"
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth required margin="normal">
            <InputLabel>Payment Status</InputLabel>
            <Select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="50% Payment">50% Payment</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#c69087" }}
          >
            Book Appointment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AppointmentPage;
