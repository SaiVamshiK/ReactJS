import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";

function App() {
  const productList = [
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
  ];
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList products={productList} />
      </main>
      <Footer />
    </>
  );
}

export default App;
