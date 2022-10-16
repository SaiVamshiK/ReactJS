import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import React, { useState } from "react";
import AddItem from "./components/AddItem.js";

function App() {
  const products = [
    {
      price: 2000,
      name: "IPhone 14",
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
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  let [productCount, setProductCount] = useState(0);

  let findProductCount = (products) => {
    let count = 0;
    for (let product of products) {
      if (product.quantity > 0) {
        count++;
      }
    }
    return count;
  };

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
    // totalAmount += newProductList[index].price
    // setTotalAmount(totalAmount)
    let curTotalAmount = totalAmount;
    curTotalAmount += newProductList[index].price;
    setTotalAmount(curTotalAmount);

    let newProductCount = productCount;
    newProductCount = findProductCount(productList);
    setProductCount(newProductCount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    if (newProductList[index].quantity !== 0) {
      newProductList[index].quantity--;
      setProductList(newProductList);
      // totalAmount -= newProductList[index].price
      // setTotalAmount(totalAmount)
      let curTotalAmount = totalAmount;
      curTotalAmount -= newProductList[index].price;
      setTotalAmount(curTotalAmount);

      let newProductCount = productCount;
      newProductCount = findProductCount(productList);
      setProductCount(newProductCount);
    }
  };

  const resetButton = () => {
    let newProductList = [...productList];
    newProductList = newProductList.map((product) => {
      product.quantity = 0;
      return product;
    });
    setProductList(newProductList);
    let newTotalAmount = 0;
    setTotalAmount(newTotalAmount);

    let newProductCount = productCount;
    newProductCount = findProductCount(productList);
    setProductCount(newProductCount);
  };

  const findIndexAmount = (productList, index) => {
    return productList[index].quantity * productList[index].price;
  };

  const removeProduct = (index) => {
    let curTotalAmount = totalAmount;
    curTotalAmount -= findIndexAmount(productList, index);
    let newProductList = [...productList];
    newProductList = newProductList.filter(
      (elem) => elem !== productList[index]
    );
    setProductList(newProductList);
    setTotalAmount(curTotalAmount);

    let newProductCount = productCount;
    newProductCount = findProductCount(newProductList);
    setProductCount(newProductCount);
  };

  const addProduct = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
    let newProductCount = productCount;
    newProductCount = findProductCount(newProductList);
    setProductCount(newProductCount);
  };

  return (
    <>
      <Navbar productCount={productCount} />
      <main className="container mt-5">
        <AddItem addProduct={addProduct} />
        <ProductList
          products={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeProduct={removeProduct}
        />
      </main>
      <Footer totalAmount={totalAmount} resetButton={resetButton} />
    </>
  );
}

export default App;
