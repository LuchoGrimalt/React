import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../Cart/CartContext/CartContext";

export default function ItemCount(props) {
  const [count, setCount] = useState(1);
  const [inStock, setInStock] = useState(props.stock);
  const { addProdCart } = useCartContext();

  useEffect(() => {
    setInStock(props.stock);
  }, [props.stock]);

  function addToCart() {
    addProdCart(count);
    console.log(`agregaste ${count} al carrito`);
  }

  function addItem() {
    if (count < props.stock) {
      setCount(count + 1);
      setInStock(inStock - 1);
      console.log(`quedan en stock ${inStock}`);
    } else {
      alert("Sin más stock");
    }
  }

  function removeItem() {
    if (count > 1) {
      setCount(count - 1);
      setInStock(inStock + 1);
      console.log(`quedan en stock ${inStock}`);
      
    } else {
      alert("Mínima cantidad seleccionada");
    }
  }

  return (
    <div className="row">
      <div style={{display:"flex", justifyContent:"space-evenly", padding:"10px 0px" }}>
        <Button size="sm" onClick={removeItem}>
          -
        </Button>
        {count}
        <Button size="sm" onClick={addItem}>
          +
        </Button>
      </div>
      <div>
        <Button onClick={()=> addToCart(count)}>Agregar al 🛒</Button>
      </div>
    </div>
  );
}
