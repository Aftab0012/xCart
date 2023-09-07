import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { config } from "../App";
import { SentimentDissatisfied } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const backendURL = `${config.endpoint}/products`;

  const getProducts = async () => {
    try {
      const response = await axios.get(backendURL, {
        headers: { Authorization: `Bearer ${localStorage["token"]}` },
      });
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Grid
        className="product-card"
        container
        marginY="1rem"
        paddingX="1rem"
        spacing={2}
      >
        {products.length > 0 ? (
          products.map((products) => (
            <Grid item xs={6} md={3} key={products._id}>
              <ProductCard product={products} />
            </Grid>
          ))
        ) : (
          <Box className="loading">
            <SentimentDissatisfied color="action" />
            <h3 style={{ color: "636363" }}>No Products Found</h3>
          </Box>
        )}
      </Grid>
    </div>
  );
}

export default Products;
