import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../../ItemCount/ItemCount";
import { useCartContext } from "../../../CartContext/CartContext";

const ItemDetail = ({img, name, price, id, category, stock}) => {
  const [toCart, setCart] = useState(false);
  const { addProdCart } = useCartContext();
  const itemData = { img, name, price, id, category, stock };

  const onAdd = () => {
    setCart(true);
  };

  return (
    <Card style={{ width: "18rem", margin: "12px", padding: "8px" }}>
      <Card.Img src={img} variant="top" />
      <Card.Body>
        <Card.Title>
          <div>
            <h2>{name}</h2>
            <h6>Categoria: {category}</h6>
            <h6>precio ${price}</h6>
            <h6>stock {stock}</h6>
            {toCart ? (
              <Link to="/cart">Terminar compra</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            )}
          </div>
        </Card.Title>
        <Button variant="success">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
