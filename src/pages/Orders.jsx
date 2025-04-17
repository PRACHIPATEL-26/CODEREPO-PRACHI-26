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
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../config/firebase";

const PreviousOrders = () => {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not logged in.");
        setUserId(null);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const ordersRef = collection(db, "userpreviousorders");
    const q = query(ordersRef, where("userId", "==", userId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersList);
    });

    return () => unsubscribe();
  }, [userId]);

  const handleCancel = async (orderId) => {
    try {
      await deleteDoc(doc(db, "userpreviousorders", orderId));
      setOrders((prev) => prev.filter((order) => order.id !== orderId));
      console.log(`Order with ID ${orderId} canceled.`);
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
              <Card elevation={3} style={{ borderRadius: "10px", padding: "10px" }}>
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
                            : "gray",
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
                    Payment Status: {order.paymentStatus || "N/A"}
                  </Typography>

                  <Box mt={2} display="flex" justifyContent="space-between">
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
