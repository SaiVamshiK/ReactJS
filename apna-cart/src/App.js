import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      price : 70000,
      model : 'IPhone 14',
      quantity : 0
    },
    {
      price : 97000,
      model : 'IPhone 14 max',
      quantity : 0
    }
  ]
  return (
      <>
        <Navbar/>
        <main className="container mt-5">
          <ProductList products = {products}/>
        </main>
        <Footer/>
      </>
  );
}

export default App;
