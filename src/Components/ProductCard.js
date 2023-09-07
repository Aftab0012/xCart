import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import { styled } from "@mui/system"; // Import styled from @mui/system
import { Box } from "@mui/material";
import "./ProductCard.css";

const StyledCard = styled(Card)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "10px",
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  display: "flex",
  width: "90%",
  alignSelf: "center",
});

const ProductCard = ({ product }) => {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexWrap: "wrap",
    //   }}
    // >
    <StyledCard className="card">
      {/* Your CardMedia or image component here */}
      <img className="image" src={product.image} alt="product image" />
      <StyledCardContent>
        <Typography variant="h5" gutterBottom component="div">
          {product.title}
        </Typography>
        <Typography
          variant="h5"
          paddingY="0.5rem"
          fontWeight="700"
          gutterBottom
        >
          ${product.price}
        </Typography>

        {/* Add your Rating or other content here */}
      </StyledCardContent>
      <StyledButton
        name="add to cart"
        variant="contained"
        startIcon={<AddShoppingCartOutlined />}
        onClick={() => {
          console.log("added to cart");
          console.log(product._id);
        }}
      >
        Add to cart
      </StyledButton>
    </StyledCard>
    // </Box>
  );
};

export default ProductCard;
