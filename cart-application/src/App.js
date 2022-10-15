import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";

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
