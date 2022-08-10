import './App.css';
import Navbar from './Components/Navbar/Nabvar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Ofertas de invierno</h2>
      <ItemListContainer />
    </div>
  );
}

export default App;
