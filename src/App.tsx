import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Product from "./components/Product";
import { CartContext } from "./context";

function App() {

 const [products, setProducts] = useState([]);
 const { cart } = useContext(CartContext);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json));
  }, []);

  return (
   
      <div className="App">
        <h1>Web store application</h1>
        <p>Cart: {cart.length}</p>
        <Link to="/">Home</Link> | { }
        <Link to="/products">Products</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products}/>} />
          <Route path="/products/:id" element={<Product products={products} />} />
        </Routes>
      </div>
    
  );
}

export default App;
