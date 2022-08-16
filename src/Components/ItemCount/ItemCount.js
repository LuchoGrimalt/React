import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";


export default function ItemCount(initial, stock, onAdd) {
  const [count, setCount] = useState(1);

  function addItem() {
    count < stock  
      ? setCount(count + 1)
      : alert("Solo se pueden cargar hasta 5 unidades");
  }
  function removeItem() {
    count > 1
      ? setCount(count - 1)
      : alert("minima cantidad seleccionada");
  }

  useEffect(()=>{
    setCount(1)
}, [initial])

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button size='sm' onClick={removeItem}>-</Button>
      {count}
      <Button size='sm' onClick={addItem}>+</Button>
      <Button onClick={()=> onAdd(count)}>Sumar al carrito</Button>
    </div>
  );
}
