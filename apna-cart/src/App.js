import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Navbar/>
        <ProductList/>
        <Footer/>
      </>
  );
}

export default App;
