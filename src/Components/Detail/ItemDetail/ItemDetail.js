import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../../Detail/ItemCount/ItemCount";
import { CartContext } from "../../Cart/CartContext/CartContext";

export const ItemDetail = ({
  img,
  name,
  price,
  id,
  category,
  initial,
  stock,
}) => {
  const { addProdCart } = useContext(CartContext);
  const [prodtoCart, setProdToCart] = useState(false);

  const onAdd = (quantityToAdd) => {
    addProdCart({ id, name, quantity: quantityToAdd, img, category, price });
    setProdToCart(true);
  };

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
            src={img}
            className="img-fluid rounded-start"
            variant="top"
          />{" "}
        </div>
        <div className="col-md-4">
          <Card.Body>
            <Card.Title>
              <div>
                <h2>{name}</h2>
                <h6>Categoria: {category}</h6>
                <h6>precio ${price}</h6>
                <h6>stock {stock}</h6>
                {prodtoCart ? (
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
                    initial={initial}
                    stock={stock}
                    onAddCart={onAdd}
                  />
                )}
              </div>
            </Card.Title>
            <Button variant="success"> 😄Terminar Compra</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
