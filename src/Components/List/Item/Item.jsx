import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <Card style={{ width: "18rem", margin: "12px", padding: "8px" }}>
      <Link to={`/Detalle/${props.id}`}>
        <Card.Img src={props.img} variant="top" />
      </Link>
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
