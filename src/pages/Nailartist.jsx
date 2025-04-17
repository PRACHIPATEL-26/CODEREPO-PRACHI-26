import React, { useState, useEffect } from "react";
import Nailartistdetail from "./Nailartistdetail";
import {
  Card,
  Typography,
  Avatar,
  Chip,
  Box,
  Button,
  Divider,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const SmallArtistCard = () => {
  const [nailartists, setNailartists] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const db = getFirestore();

  // Get location from query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedLocation = queryParams.get("location"); // e.g., "Ahmedabad"

  // Fetch artists from Firestore based on location
  useEffect(() => {
    const fetchNailartists = async () => {
      try {
        const artistsRef = collection(db, "nailartists");
        const q = query(artistsRef, where("location", "==", selectedLocation));
        const querySnapshot = await getDocs(q);

        const nailartistsData = [];
        querySnapshot.forEach((doc) => {
          nailartistsData.push({ id: doc.id, ...doc.data() });
        });
        console.log(nailartistsData);
        setNailartists(nailartistsData);
      } catch (err) {
        console.error("Error fetching artists:", err);
      }
    };

    if (selectedLocation) {
      fetchNailartists();
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
      {/* <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", color: "#825272", mt: 4 }}
      >
        Mehendi Artists in {selectedLocation || "your area"}
      </Typography> */}

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 8 }}>
        {nailartists.length > 0 ? (
          nailartists.map((artist) => (
            <Grid item xs={12} sm={6} md={3} key={artist.id}>
              <Card
                sx={{
                  height: "100%",
                  width: 280,
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 2,
                  m: 1,
                  display: "flex",
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

                {/* Specialization & Price Range */}
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

                {/* View Artist Button */}
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
          <Nailartistdetail artist={selectedArtist} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SmallArtistCard;
