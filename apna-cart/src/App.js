import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      price : 10999,
      model : 'IPhone 14',
      quantity : 3
    },
    {
      price : 28374,
      model : 'IPhone 14 max',
      quantity : 2
    }
  ]
  return (
      <>
        <Navbar/>
        <ProductList products = {products}/>
        <Footer/>
      </>
  );
}

export default App;
