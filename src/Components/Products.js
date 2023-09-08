import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { config } from "../App";
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
    <div className=" h-full w-full">
      <div className="flex flex-wrap justify-center align-center">
        {products.map((product) => (
          <div className="m-3" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
