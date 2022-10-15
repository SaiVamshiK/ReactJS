import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
    if(props.products.length > 0){
        return (
            props.products.map((product,index) => {
                return <Product product = {product} key = {index} incrementQuantity = {props.incrementQuantity} decrementQuantity = {props.decrementQuantity} index = {index} removeProduct = {props.removeProduct}/>
            })
          );
    }else{
        return (
            <h3>No Product to display</h3>
        );
    }
  
}
