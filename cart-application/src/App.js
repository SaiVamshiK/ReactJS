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
  let [totalAmount,setTotalAmount] = useState(0);


  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList)
    // totalAmount += newProductList[index].price
    // setTotalAmount(totalAmount)
    let curTotalAmount = totalAmount
    curTotalAmount += newProductList[index].price
    setTotalAmount(curTotalAmount)
  }
  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    if(newProductList[index].quantity !== 0){
      newProductList[index].quantity--;
      setProductList(newProductList)
      // totalAmount -= newProductList[index].price
      // setTotalAmount(totalAmount)
      let curTotalAmount = totalAmount
      curTotalAmount -= newProductList[index].price
      setTotalAmount(curTotalAmount)
    }
  }
  

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList products={productList} incrementQuantity = {incrementQuantity} decrementQuantity ={decrementQuantity}/>
      </main>
      <Footer totalAmount = {totalAmount}/>
    </>
  );
}

export default App;
