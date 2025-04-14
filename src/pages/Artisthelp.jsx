import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const faqs = [
  {
    question: "How do I update my service pricing?",
    answer:
      "Go to the Service Management page and click on 'Edit' next to the service you want to update.",
  },
  {
    question: "How can I accept or reject a booking?",
    answer:
      "Navigate to the Booking Requests page, where you'll find Accept/Reject buttons for each request.",
  },
  {
    question: "When will I receive the remaining payment?",
    answer:
      "You will receive the remaining 50% payment after you mark the service as completed in the system.",
  },
  {
    question: "Can I contact the client after booking?",
    answer:
      "Yes, client contact details will be visible once you accept the booking request.",
  },
];

const ArtistHelp = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1000, mx: "auto",mt:8, color:"#825272"}}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Help & Support
      </Typography>

      {/* FAQs */}
      <Box mb={4}>
        <Typography variant="h6" mb={2}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={500}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Contact Support Card */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ borderRadius: 4, background: "#f9f5ff" }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <ContactSupportIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600} color="#825272">
                  Need Further Help?
                </Typography>
              </Stack>
              <Typography variant="body2" mb={2}>
                If your question is not listed above or you are facing a technical
                issue, feel free to contact our support team.
              </Typography>
              <Button variant="contained" color="primary">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArtistHelp;
