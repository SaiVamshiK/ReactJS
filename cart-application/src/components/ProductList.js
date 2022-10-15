import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return (
    props.products.map((product,index) => {
        return <Product product = {product} key = {index} incrementQuantity = {props.incrementQuantity} decrementQuantity = {props.decrementQuantity} index = {index}/>
    })
  );
}
