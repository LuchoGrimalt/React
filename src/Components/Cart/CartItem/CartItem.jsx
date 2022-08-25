import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../CartContext/CartContext";

const CartItem = ({ id, quantity, name, img, price }) => {
  const { delProdCart } = useCartContext();
  return (
    <Card
      className="card mb-3"
      style={{
        maxWidth: "500px",
        margin: "12px",
        padding: "8px",
        display: "flex",
      }}
    >
      <div className="row g-0  d-flex align-items-center">
        <div className="col-md-4">
          <Card.Img
            src={img}
            className="img-fluid rounded-start"
            variant="top"
          />{" "}
        </div>
        <div className="col-md-8
         align-items-center">
          <Card.Body>
            <Card.Title>
              <div>
                <h4> {name} </h4>
                <p> Cantidad: {quantity} </p>
                <p> Precio unitario: ${price}</p>
                <p> Subtotal: ${quantity * price}</p>
                <Button
                  className="btn btn-secondary col-6"
                  onClick={() => delProdCart(id)}
                >
                  Quitar Producto
                </Button>
              </div>
            </Card.Title>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
export default CartItem;
