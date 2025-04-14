import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ArtistEarnings = () => {
  const [earnings, setEarnings] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const db = getFirestore();

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        // Query the bookingRequests collection for accepted requests
        const bookingRequestsRef = collection(db, "userpreviousorders");
        const acceptedQuery = query(bookingRequestsRef, where("status", "==", "Accepted"));
        const querySnapshot = await getDocs(acceptedQuery);

        // Map the data to an array
        const earningsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("Fetched data:", data); // Debugging log
          return {
            client: data.userName || "Unknown",
            service: data.service || "Unknown",
            date: data.date || "N/A",
            time: data.time || "N/A",
            cost: Number(data.cost) || 0, // Convert cost to a number
            status: data.status || "Unknown",
          };
        });

        setEarnings(earningsData);

        // Calculate total earnings
        const total = earningsData.reduce((sum, earning) => sum + earning.cost, 0);
        setTotalEarnings(total);
      } catch (error) {
        console.error("Error fetching earnings:", error);
      }
    };

    fetchEarnings();
  }, [db]);

  return (
    <Box sx={{ padding: 4, mt: 10 }}>
      <Typography variant="h4" style={{ color: "#825272" }} gutterBottom>
        💰 Your Earnings
      </Typography>

      <Card sx={{ mb: 4, backgroundColor: "#f9f9f9" }}>
        <CardContent>
          <Typography variant="h6">Total Earnings</Typography>
          <Typography variant="h3" color="#825272">
            ₹{totalEarnings}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h6" gutterBottom>
        Appointment History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#ffd3bc" }}>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Cost (₹)</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {earnings.map((earning, index) => (
              <TableRow key={index}>
                <TableCell>{earning.client}</TableCell>
                <TableCell>{earning.service}</TableCell>
                <TableCell>{earning.date}</TableCell>
                <TableCell>{earning.time}</TableCell>
                <TableCell>₹{earning.cost}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 20,
                      backgroundColor:
                        earning.status === "Accepted"
                          ? "green"
                          : earning.status === "Pending"
                          ? "orange"
                          : "red",
                      color: "white",
                    }}
                  >
                    {earning.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ArtistEarnings;
