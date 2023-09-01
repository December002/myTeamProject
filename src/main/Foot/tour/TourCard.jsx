import PropTypes from "prop-types";
// @mui
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Modal from "../../../modal/Modal";




// components


// ----------------------------------------------------------------------



const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
// ----------------------------------------------------------------------

TourCard.propTypes = {  
  tourArray: PropTypes.object,
};


export default function TourCard({ tourArray ,}) {
  const [modalOpen, setModalOpen] = useState(false);
        const openModal = () => {
            setModalOpen(true);
        };

        const closeModal = () => {
            setModalOpen(false);
        };
  const { korTitle, locimages, engTitle, areacode} = tourArray;
  
  return (
    <>
    <Card>
        <Box sx={{ pt: "100%", position: "relative" }}>
          
          <StyledProductImg alt={korTitle} src={locimages} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>

          <Link style={{cursor:"pointer"}} color="inherit" underline="hover" onClick={openModal}>
            <Typography variant="subtitle2" noWrap >
              {korTitle}
            </Typography>
            {engTitle}
          </Link>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">
            </Typography>
          </Stack>
        </Stack>
      </Card>
      <Modal isOpen={modalOpen} onClose={closeModal} areacode={areacode}/>
     </>
  );
}
