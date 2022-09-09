import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../Cart/CartContext/CartContext";

export default function ItemDetail({ id, name, img, category, price, stock }) {
  const { addProdCart } = useCartContext();
  const [toCart, setToCart] = useState(false);

  function onAdd(quantityCart) {
    addProdCart({
      id,
      name,
      img,
      category,
      price,
      stock,
      quantity: quantityCart,
    });
    setToCart(true);
    console.log(`Se agrego ${quantityCart} ${name} al carrito!`);
  }

  return (
    <Card
      className="card mb-6"
      style={{
        maxWidth: "950px",
        margin: "12px",
        padding: "8px",
        display: "flex",
      }}
    >
      <div className="row d-flex align-items-center">
        <div className="col-md-9">
          <Card.Img
            src={img}
            className="img-fluid rounded"
            variant="top"
          />{" "}
        </div>
        <div className="col-md-3">
          <Card.Body>
            <Card.Title>
              <div>
                <h2>{name}</h2>
                <h6>Categoría: {category}</h6>
                <h6>precio ${price}</h6>
                <h6>stock {stock}</h6>
                {toCart ? (
                  <div>
                    <Link to="/cart">
                      <Button className="btn btn-info col-6">
                        Ir al carrito
                      </Button>
                    </Link>
                    <br />
                    <br />
                    <Link to={"/"}>
                      <Button varaiant="danger col 7">Seguir comprando</Button>
                    </Link>
                  </div>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                )}
              </div>
            </Card.Title>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}
