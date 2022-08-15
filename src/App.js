import "./App.css";
import Navbar from "./Components/Navbar/Nabvar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProdDetailPage from "./Pages/ProdDetailPage";
import Home from "./Pages/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Ofertas de invierno</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categoria/:categoryId" element={<ProdDetailPage />} />
        <Route path="/Detalle/:detailId" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

