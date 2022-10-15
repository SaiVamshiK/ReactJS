import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <ProductList/>
      <Footer/>
    </>
  );
}

export default App;
