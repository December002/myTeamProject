import PropTypes from "prop-types";
// @mui
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from '@mui/material/Rating';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
// utils

// components


// ----------------------------------------------------------------------

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff3d47',
  },
  '& .MuiRating-iconHover': {
    color: '#ff6d75',
  },
});

const StyledSave = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#454c53',
  },
  '& .MuiRating-iconHover': {
    color: '#72787f',
  },
});

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});
// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, eName} = product;

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
          {eName}
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
  );
}
export { default as ProductCard } from "./ProductCard";