import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase"; // Ensure Firebase is configured in a separate file

const PreviousOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = () => {
      const ordersRef = collection(db, "userpreviousorders");

      // Listen for real-time updates
      const unsubscribe = onSnapshot(ordersRef, (snapshot) => {
        const ordersList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList); // Update the state with real-time data
      });

      // Cleanup the listener when the component unmounts
      return () => unsubscribe();
    };

    fetchOrders();
  }, [db]);

  const handleCancel = async (orderId) => {
    try {
      const orderRef = doc(db, "userpreviousorders", orderId);
      await deleteDoc(orderRef); // Delete the order from Firestore
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId)); // Update local state
      console.log(`Order with ID ${orderId} has been canceled.`);
    } catch (error) {
      console.error("Error canceling order:", error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "80px" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center", color: "#825272" }}>
        Previous Orders
      </Typography>
      {orders.length > 0 ? (
        <Grid container spacing={3}>
          {orders.map((order) => (
            <Grid item xs={12} sm={6} key={order.id}>
              <Card
                elevation={3}
                style={{
                  borderRadius: "10px",
                  position: "relative",
                  padding: "10px",
                }}
              >
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" style={{ fontWeight: "bold", color: "#825272" }}>
                      {order.service}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        borderRadius: "20px",
                        backgroundColor:
                          order.status === "Accepted"
                            ? "green"
                            : order.status === "Pending"
                            ? "orange"
                            : order.status === "Rejected"
                            ? "red"
                            : "blue",
                        color: "white",
                      }}
                      disabled
                    >
                      {order.status}
                    </Button>
                  </Box>
                  <Typography variant="body2" color="textSecondary" style={{ marginTop: "10px" }}>
                    Artist: {order.artist}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Date: {order.date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Time: {order.time}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Cost: ₹{order.cost}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Payment Status: {order.paymentStatus || "N/A"} {/* Display payment status */}
                  </Typography>
                  <Box
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleCancel(order.id)}
                    >
                      Cancel
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" style={{ textAlign: "center", marginTop: "20px" }}>
          No previous orders found.
        </Typography>
      )}
    </Container>
  );
};

export default PreviousOrders;
