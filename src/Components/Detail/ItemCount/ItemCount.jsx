import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial); // seteamos el inicio del counter
  const [inStock, setInStock] = useState(stock);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  function removeItem() {
    if (count >= 1) {
      setCount(count - 1);
      setInStock(inStock + 1);
    }
  };
  
  function addItem() {
    if (count < stock) {
      setCount(count + 1);
      setInStock(inStock - 1);
    }
  };

  return (
    <div className="row">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "10px 0px",
        }}
      >
        <Button disabled={count<=1}  size="sm" onClick={removeItem}>
          -
        </Button>
        {count}
        <Button disabled={count >=stock} size="sm" onClick={addItem}>
          +
        </Button>
      </div>
      <div>
        <Button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}
