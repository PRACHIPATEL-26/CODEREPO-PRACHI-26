import React, { useState, useEffect } from "react";
import Mahendiartistdetail from "./Mahendiartistdetail";
import {
  Card,
  Typography,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const SmallArtistCard = () => {
  const [mahendiartists, setMahendiartists] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [open, setOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const db = getFirestore();

  // Get location from query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedLocation = queryParams.get("location"); // e.g., "Ahmedabad"

  // Fetch artists from Firestore based on location
  useEffect(() => {
    const fetchMahendiartists = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const artistsRef = collection(db, "mahendiartists");
        const q = query(artistsRef, where("location", "==", selectedLocation));
        const querySnapshot = await getDocs(q);

        const mahendiartistsData = [];
        querySnapshot.forEach((doc) => {
          mahendiartistsData.push({ id: doc.id, ...doc.data() });
        });

        setMahendiartists(mahendiartistsData);
      } catch (err) {
        console.error("Error fetching artists:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (selectedLocation) {
      fetchMahendiartists();
    }
  }, [db, selectedLocation]);

  const handleOpenDialog = (artist) => {
    setSelectedArtist(artist); // Set the selected artist
    setOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedArtist(null);
  };

  return (
    <>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 8 }}>
        {loading ? (
          // Show loading spinner while data is being fetched
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : mahendiartists.length > 0 ? (
          mahendiartists.map((artist) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={artist.id}>
              <Card
                sx={{
                  maxWidth:300,
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 2,
                  display: "flex",
                  mr:"auto",
                  ml:"auto",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Artist Info */}
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    alt={artist.name}
                    src={artist.profilePhoto}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {artist.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {artist.location}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box>
                  <Typography variant="body2" fontWeight="500">
                    Specialization:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {artist.specialization}
                  </Typography>
                </Box>
                <Box mt={1}>
                  <Typography variant="body2" fontWeight="500">
                    Price Range:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {artist.priceRange}
                  </Typography>
                </Box>
                <Box mt={2} textAlign="center">
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    fullWidth
                    onClick={() => handleOpenDialog(artist)}
                  >
                    View Artist
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          // Show message if no artists are found
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#825272", mt: 4 }}
          >
            No artists found for {selectedLocation}.
          </Typography>
        )}
      </Grid>

      <Dialog fullScreen open={open} onClose={handleCloseDialog}>
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
            sx={{ position: "absolute", right: 16, top: 16 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Mahendiartistdetail artist={selectedArtist} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SmallArtistCard;
