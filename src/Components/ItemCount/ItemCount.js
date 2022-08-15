import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount() {
  const [count, setCount] = useState(1);


  function addItem() {
    count < 5  
      ? setCount(count + 1)
      : alert("Solo se pueden cargar hasta 5 unidades");
  }
  function removeItem() {
    count > 1
      ? setCount(count - 1)
      : alert("minima cantidad seleccionada");
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button size='sm' onClick={removeItem}>-</Button>
      {count}
      <Button size='sm' onClick={addItem}>+</Button>
      {/* <Button onClick={()=> onAdd (count)}>Sumar al carrito</Button> */}
    </div>
  );
}
