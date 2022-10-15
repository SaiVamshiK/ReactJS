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
    {
      price: 7609,
      name: "One Plus 13",
      quantity: 0,
    },
    {
      price: 7636,
      name: "Redmi 13",
      quantity: 0,
    },
    {
      price: 1234,
      name: "Samsung 13",
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

  const resetButton = () => {
    let newProductList = [...productList]
    newProductList = newProductList.map((product) => {
      product.quantity = 0
      return product
    })
    setProductList(newProductList)
    let newTotalAmount = 0
    setTotalAmount(newTotalAmount)
  }

  const findIndexAmount = (productList,index) => {
    return productList[index].quantity*productList[index].price
  }

  const removeProduct = (index) => {
    let curTotalAmount = totalAmount
    curTotalAmount -= findIndexAmount(productList,index)
    let newProductList = [...productList]
    newProductList = newProductList.filter((elem) => elem !== productList[index])
    setProductList(newProductList)
    setTotalAmount(curTotalAmount)
  }
  

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList products={productList} incrementQuantity = {incrementQuantity} decrementQuantity ={decrementQuantity} removeProduct = {removeProduct}/>
      </main>
      <Footer totalAmount = {totalAmount} resetButton = {resetButton}/>
    </>
  );
}

export default App;
