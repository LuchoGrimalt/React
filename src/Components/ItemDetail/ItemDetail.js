import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../CartContext/CartContext";

const ItemDetail = (props) => {
  const [toCart, setCart] = useState(false);
  const { addProd } = useCartContext();

  function addProduct(stock) {
    setCart(true);
    addProd(props, stock);
    alert(`¡Muy bien, agregaste ${stock} ${props.category} ${props.name} con éxito!`);
  }

  return (
    <Card style={{ width: "18rem", margin: "12px", padding: "8px" }}>
      <Card.Img src={props.img} variant="top" />
      <Card.Body>
        <Card.Title>
          <div>
            <h2>{props.name}</h2>
            <h6>Categoria: {props.category}</h6>
            <h6>precio ${props.price}</h6>
            <h6>stock {props.stock}</h6>
            {toCart ? (
              <link to="/cart>Terminar compra" />
            ) : (
              <ItemCount initial={1} stock={props.stock} onAdd={addProduct} />
            )}
          </div>
        </Card.Title>
        <Button variant="success">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
