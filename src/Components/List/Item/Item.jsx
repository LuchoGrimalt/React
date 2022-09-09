import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <Card style={{ width: "18rem", margin: "12px", padding: "0px" }}>
      <Link to={`/Detalle/${props.id}`}>
        <Card.Img src={props.img} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title>
          <div>
            <h4>{props.name}</h4>
            <h6>Categoría: {props.category}</h6>
            <h6>${props.price}</h6>
          </div>
        </Card.Title>
        <Link varaiant="danger" to={`/Detalle/${props.id}`}>
          <Button className="btn-info">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
