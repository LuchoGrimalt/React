import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../Cart/CartContext/CartContext";

export default function ItemCount(props) {
  const [count, setCount] = useState(1);
  const [inStock, setInStock] = useState(props.stock);
  const { onAddCart } = useCartContext();

  useEffect(() => {
    setInStock(props.stock);
  }, [props.stock]);
  
  function addToCart() {
    onAddCart(count)
  }
  
  function addItem() {
    if (count < props.stock) {
      setCount(count + 1);
      setInStock(inStock - 1);
    } else {
      alert("Sin más stock");
    }
  }

  function removeItem() {
    if (count > 1) {
      setCount(count - 1);
      setInStock(inStock + 1);
    } else {
      alert("Mínima cantidad seleccionada");
    }
  }


  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button size="sm" onClick={removeItem}>
        -
      </Button>
      {count}
      <Button size="sm" onClick={addItem}>
        +
      </Button>

      <Button onClick={addToCart}>
      Agregar al 🛒
      </Button>
    </div>
  );
}
