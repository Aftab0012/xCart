import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import { styled } from "@mui/system"; // Import styled from @mui/system
import "./ProductCard.css";

const StyledButton = styled(Button)({
  display: "flex",
  width: "100%",
  alignSelf: "center",
});

const ProductCard = ({ product }) => {
  return (
    <div className=" cursor-pointer hover:bg-hoverColor rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md card p-3 h-full w-[330px] flex flex-col justify-between mt-10">
      <div>
        <img
          className="image sm:h-64 md:h-72 lg:h-96"
          src={product.image}
          alt="product image"
        />
      </div>
      <div>
        <div className="p-3">
          <div className="text-staleGray font-bold text-xl">
            {product.title}
          </div>
          <div className="font-bold">${product.price}</div>
        </div>
        <StyledButton
          className="text-customGrayForText"
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
      </div>
    </div>
  );
};

export default ProductCard;
