import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import React, { useState } from 'react';


function App() {
  const products = [
    {
      price: 2000,
      name: "IPhone 14",
      quantity: 0,
    },
    {
      price: 1600,
      name: "IPhone 9",
      quantity: 0,
    },
    {
      price: 2300,
      name: "IPhone 13",
      quantity: 0,
    },
  ]
  let [productList,setProductList] = useState(products);
  const incrementQuantity = (index) => {
    console.log("Increment q called")
    let newProductList = [...productList]
    newProductList[index].quantity++
    console.log("New Q: "+newProductList[index].quantity)
    setProductList(newProductList)
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList products={productList} incrementQuantity = {incrementQuantity}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
