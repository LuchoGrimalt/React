import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../CartContext/CartContext";

export default function ItemCount(stock, itemData, onAdd) {
  const [count, setCount] = useState(1);
  const [inStock, setInStock] = useState(stock);
  const itemDataCount = { ...itemData, count };
  const { addProdCart } = useCartContext();

  useEffect(() => {
    setInStock(stock);
  }, [stock]);

  function addItem() {
    if (stock > 1) {
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
      alert("Mínima catidad seleccionada");
    }
  }

  function addToCart() {
    if (count >= 1) {
      setInStock(inStock - count);
      setInStock(inStock);
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
