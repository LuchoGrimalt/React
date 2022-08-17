import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../../Detail/ItemCount/ItemCount";
import { CartContext } from "../../Cart/CartContext/CartContext";

const ItemDetail = ({img, name, price, id, category, initial, stock}) => {
  const { addProdCart } = useContext(CartContext);
  const [prodtoCart, setProdToCart] = useState(false);

  const onAdd = (quantityToAdd) => {
    addProdCart({ id, name, quantity: quantityToAdd, img, category, price});
    setProdToCart(true)}

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
            {prodtoCart ? (
              <Link to="/cart">Sumado al carrito</Link>
            ) : (
              <ItemCount initial={initial} stock={stock} onAddCart={onAdd} />
            )}
          </div>
        </Card.Title>
        <Button variant="success"> 😄Terminar Compra</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
