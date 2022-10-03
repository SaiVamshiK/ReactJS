import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return (
    props.products.map((product,idx) => {
        return <Product product = {product} key = {idx}/>
    })
  );
}
// we are getting the warning in console:
// Warning: Each child in a list should have a unique "key" prop.
// To remove this error we need to introduce a unique key as a part of the props passing so that react can understand
// that one component is different from another one.