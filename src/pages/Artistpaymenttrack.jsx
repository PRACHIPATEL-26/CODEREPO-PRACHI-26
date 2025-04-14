import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";

// Sample payment data
const payments = [
  {
    id: 1,
    client: "Kritika Joshi",
    service: "Bridal Makeup",
    date: "2025-03-28",
    paymentStatus: "Advance Paid",
    amountPaid: 1500,
    totalAmount: 3000,
  },
  {
    id: 2,
    client: "Radhika Sharma",
    service: "Mehendi",
    date: "2025-03-29",
    paymentStatus: "Full Paid",
    amountPaid: 1200,
    totalAmount: 1200,
  },
  {
    id: 3,
    client: "Neha Verma",
    service: "Nail Art",
    date: "2025-03-30",
    paymentStatus: "Remaining Pending",
    amountPaid: 400,
    totalAmount: 800,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Advance Paid":
      return "warning";
    case "Full Paid":
      return "success";
    case "Remaining Pending":
      return "error";
    default:
      return "default";
  }
};

const PaymentStatus = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto",mt:8,ml:0 }}>
      <Typography variant="h4" fontWeight={600} mb={3} color="#825272"> 
        Payment Status
      </Typography>

      <Grid container spacing={3}>
        {payments.map((payment) => (
          <Grid item xs={12} sm={6} md={4} key={payment.id}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 4,
                background: "#fdfbff",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600} color="#825272">
                      {payment.client}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {payment.service}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <CalendarMonthIcon fontSize="small" />
                  <Typography variant="body2">{payment.date}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <CurrencyRupeeIcon fontSize="small" />
                  <Typography variant="body2">
                    ₹{payment.amountPaid} / ₹{payment.totalAmount}
                  </Typography>
                </Stack>

                <Chip
                  label={payment.paymentStatus}
                  color={getStatusColor(payment.paymentStatus)}
                  size="small"
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PaymentStatus;
