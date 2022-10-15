import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";

function App() {
  const productList = [
    {
      price : 43839,
      name : "IPhone 14",
      quantity : 2
    },
    {
      price : 43787,
      name : "IPhone 9",
      quantity : 4
    },
    {
      price : 81447,
      name : "IPhone 13",
      quantity : 1
    }
  ]
  return (
    <>
      <Navbar />
      <ProductList/>
      <Footer/>
    </>
  );
}

export default App;
