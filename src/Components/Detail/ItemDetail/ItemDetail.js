import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../../Detail/ItemCount/ItemCount";
import { CartContext } from "../../Cart/CartContext/CartContext";

export default function ItemDetail(props) {
  const [prodToCart, setProdToCart] = useState(false);
  const { addProdCart } = useContext(CartContext);

  function onAdd(quantity) {
    setProdToCart(true);
    addProdCart(props, quantity);
    alert(
      `Se cargo al carrito ${quantity} ${props.category} ${props.name} con éxito!`
    );
  }

  return (
    <Card
      className="card mb-3"
      style={{
        maxWidth: "900px",
        margin: "12px",
        padding: "8px",
        display: "flex",
      }}
    >
      <div className="row g-0  d-flex align-items-center">
        <div className="col-md-8">
          <Card.Img
            src={props.img}
            className="img-fluid rounded-start"
            variant="top"
          />{" "}
        </div>
        <div className="col-md-4">
          <Card.Body>
            <Card.Title>
              <div>
                <h2>{props.name}</h2>
                <h6>Categoria: {props.category}</h6>
                <h6>precio ${props.price}</h6>
                <h6>stock {props.stock}</h6>
                {prodToCart ? (
                  <div className="justify-content-center col-6">
                    <Link to="/cart">
                      {" "}
                      <Button className="btn btn-dark">
                        Ir al carrito
                      </Button>{" "}
                    </Link>
                  </div>
                ) : (
                  <ItemCount
                    initial={props.initial}
                    stock={props.stock}
                    onAddCart={onAdd}
                  />
                )}
              </div>
            </Card.Title>
            <Button variant="warning">
              <Link to="/Cart">Ir al carrito</Link>
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}
