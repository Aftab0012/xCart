import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
// import { useLocation } from "react-router-dom";
import Products from "./Products";

function Homepage() {
  //use this technique to useLocation to get data sent through Navigate
  // const location = useLocation();
  // let data = location.state;
  // console.log(data);
  console.log("homepage");

  return (
    <div>
      {/* <Navbar username={data} /> */}
      <Navbar />
      <Products />
    </div>
  );
}

export default Homepage;
