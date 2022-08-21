import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Cart/CartContext/CartContext";

export default function ItemDetail(prod) {
  const [toCart, setToCart] = useState(false);
  const { addProdCart } = useContext(CartContext);

  function onAdd(quantity) {
    setToCart(true);
    addProdCart(prod, quantity);
    console.log(prod,
      `Se compraron ${quantity} ${prod.name} con éxito!`
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
            src={prod.img}
            className="img-fluid rounded-start"
            variant="top"
          />{" "}
        </div>
        <div className="col-md-4 align-items-center">
          <Card.Body>
            <Card.Title>
              <div>
                <h2>{prod.name}</h2>
                <h6>Categoria: {prod.category}</h6>
                <h6>precio ${prod.price}</h6>
                <h6>stock {prod.stock}</h6>
                {toCart ? (
                  <div className="justify-content-center col-6">
                    <Link to="/cart">
                      <Button className="justify-content-center " >
                        Ir al carrito
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <ItemCount
                    initial={1}
                    stock={prod.stock}
                    onAdd={onAdd}
                  />
                )}
              </div>
            </Card.Title>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}
