import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
} from '@mui/material';

const orders = [
  {
    id: 'ORD123',
    service: 'Bridal Makeup',
    date: '2025-03-01',
    status: 'Completed',
    amountPaid: 1500,
    paymentStatus: 'Paid',
  },
  {
    id: 'ORD124',
    service: 'Mehendi',
    date: '2025-03-10',
    status: 'Upcoming',
    amountPaid: 500,
    paymentStatus: 'Advance Paid',
  },
  {
    id: 'ORD125',
    service: 'Nail Art',
    date: '2025-02-18',
    status: 'Completed',
    amountPaid: 1000,
    paymentStatus: 'Paid',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'Upcoming':
      return 'primary';
    case 'Cancelled':
      return 'error';
    default:
      return 'default';
  }
};

const PreviousOrders = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color:"#825272", textAlign: 'center' }}
      >
        Your Previous Orders
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          overflowX: 'auto',
          pb: 2,
          mt: 3,
        }}
      >
        {orders.map((order) => (
          <Card
            key={order.id}
            sx={{
              minWidth: 275,
              flexShrink: 0,
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                <Typography variant="h6">{order.service}</Typography>
                <Chip label={order.status} color={getStatusColor(order.status)} />
              </Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Date: {order.date}
              </Typography>
              <Typography variant="body2">
                Payment: ₹{order.amountPaid} ({order.paymentStatus})
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                Order ID: {order.id}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default PreviousOrders;
