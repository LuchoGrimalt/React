import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../Cart/CartContext/CartContext";

export default function ItemCount({initial, stock, onAddCart}) {
  const [count, setCount] = useState(number(initial));
  const [inStock, setInStock] = useState(stock);
  const { onAddCart } = useCartContext();

  useEffect(() => {
    setInStock(stock);
  }, [stock]);
  
  function addToCart() {onAddCart(count)}
  
  function addItem() {
    if (count < stock) {
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

      <Button
        onClick={() => {
          addToCart();
          addProdCart({ ...itemDataCount });
        }}
      >
        Sumar al carrito
      </Button>
    </div>
  );
}
