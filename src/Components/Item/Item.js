import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  // const navigateFn = useNavigate();
  // const LoadProdDetail = () =>{ navigateFn(`/products/${id}`)};
  return (
    <Card style={{ width: "18rem", margin: "12px", padding: "8px" }}>
      <Card.Img src={props.img} variant="top" />
      <Card.Body>
        <Card.Title>
          <div>
            <h2>{props.name}</h2>
            <h6>Categoria: {props.category}</h6>
            <h6>precio ${props.price}</h6>
          </div>
        </Card.Title>
        <Link varaiant="danger" to={`/Detalle/${props.id}`}>
          <Button>Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
