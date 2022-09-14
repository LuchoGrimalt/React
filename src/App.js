import "./App.css";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./Components/Detail/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Components/Cart/CartContext/CartContext";
import Cart from "./Components/Cart/Cart/Cart";
import ItemListContainer from "./Components/List/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/Categoria/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/Detalle/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
