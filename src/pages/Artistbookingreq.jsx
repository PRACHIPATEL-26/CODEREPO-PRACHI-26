import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const BookingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const auth = getAuth();

  // Check if a user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch all booking requests (no matter who is logged in)
  useEffect(() => {
    if (!userLoggedIn || loading) return;

    const requestsRef = collection(db, "userpreviousorders");

    const unsubscribe = onSnapshot(requestsRef, (snapshot) => {
      const requestsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRequests(requestsData);
    });

    return () => unsubscribe();
  }, [userLoggedIn, loading]);

  const handleAccept = async (id) => {
    try {
      const requestRef = doc(db, "userpreviousorders", id);
      await updateDoc(requestRef, { status: "Accepted" });
      setRequests((prev) =>
        prev.map((request) =>
          request.id === id ? { ...request, status: "Accepted" } : request
        )
      );
      alert("Request Accepted!");
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const requestRef = doc(db, "userpreviousorders", id);
      await deleteDoc(requestRef);
      setRequests((prev) => prev.filter((request) => request.id !== id));
      alert("Request Rejected and deleted");
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (!userLoggedIn) return <Typography>Please log in to view booking requests.</Typography>;

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", mt: 8 }}>
      <Typography variant="h4" fontWeight={600} mb={3} color="#825272">
        Booking Requests
      </Typography>

      {requests.length === 0 ? (
        <Typography>No booking requests found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {requests.map((request) => (
            <Grid item xs={12} sm={6} md={4} key={request.id}>
              <Card elevation={4} sx={{ borderRadius: 4, background: "#fffdfb" }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="#825272">
                        {request.userName || "Unknown"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {request.service || "No service"}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <CalendarMonthIcon fontSize="small" />
                    <Typography variant="body2">{request.date || "-"}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <AccessTimeIcon fontSize="small" />
                    <Typography variant="body2">{request.time || "-"}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <Typography variant="body2" fontWeight={600}>
                      Cost:
                    </Typography>
                    <Typography variant="body2">₹{request.cost || "N/A"}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <Typography variant="body2" fontWeight={600}>
                      Payment Status:
                    </Typography>
                    <Typography variant="body2">{request.paymentStatus || "N/A"}</Typography>
                  </Stack>

                  <Chip
                    label={request.status || "Pending"}
                    color={
                      request.status === "Accepted"
                        ? "success"
                        : request.status === "Rejected"
                        ? "error"
                        : "warning"
                    }
                    size="small"
                    sx={{ mt: 2 }}
                  />
                </CardContent>

                <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    onClick={() => handleAccept(request.id)}
                    disabled={request.status !== "Pending"}
                  >
                    Accept
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => handleReject(request.id)}
                    disabled={request.status !== "Pending"}
                  >
                    Reject
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default BookingRequests;
