import "./App.css";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProdDetailPage from "./Pages/ProdDetailPage";
import Home from "./Pages/Home";
import ItemDetailContainer from "./Components/Detail/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Components/Cart/CartContext/CartContext";
import Cart from "./Components/Cart/Cart/Cart";

export default function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <h2>Ofertas de invierno</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categoria/:categoryId" element={<ProdDetailPage />} />
          <Route path="/Detalle/:detailId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}
