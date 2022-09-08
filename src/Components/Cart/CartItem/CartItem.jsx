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
        margin: "10px",
      }}
    >
      <div className="row g-0  d-flex align-items-center">
        <div className="col-md-4">
          <Card.Img
            src={img}
            className="img-fluid rounded mx-2"
            variant="top"
          />{" "}
        </div>
        <div className="col-md-8 align-items-center">
          <Card.Body>
            <Card.Title>
              <div>
                <h6>
                  {name} x {quantity} unidades a ${price} c/u
                </h6>
                <h6> Subtotal: ${quantity * price}</h6>
                <br />
                <Button
                  className="btn btn-secondary fs-6 p-2"
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
