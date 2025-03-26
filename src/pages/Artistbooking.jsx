import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
} from '@mui/material';

const bookings = [
  {
    id: 1,
    userName: 'Aisha Khan',
    service: 'Makeup',
    date: '2025-03-28',
    time: '10:30 AM',
    status: 'Confirmed',
  },
  {
    id: 2,
    userName: 'Sneha Patel',
    service: 'Nail Art',
    date: '2025-03-29',
    time: '2:00 PM',
    status: 'Pending',
  },
  {
    id: 3,
    userName: 'Riya Sharma',
    service: 'Mehendi',
    date: '2025-03-30',
    time: '11:00 AM',
    status: 'Completed',
  },
];

const getStatusChipColor = (status) => {
  switch (status) {
    case 'Confirmed':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Completed':
      return 'info';
    default:
      return 'default';
  }
};

const ArtistBookings = () => {
  return (
    <Box p={4} sx={{ minHeight: '100vh' ,mt:6}}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color:"#825272"}}>
        My Appointments
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor:"#ffc7bd" }}>
            <TableRow>
              <TableCell><strong>User Name</strong></TableCell>
              <TableCell><strong>Service</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Time</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.userName}</TableCell>
                <TableCell>{booking.service}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>
                  <Chip
                    label={booking.status}
                    color={getStatusChipColor(booking.status)}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ArtistBookings;
