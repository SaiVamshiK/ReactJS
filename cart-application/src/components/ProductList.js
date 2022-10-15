import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  console.log(props);
  return (
    props.products.map((product) => {
        return <Product product = {product}/>
    })
  );
}
