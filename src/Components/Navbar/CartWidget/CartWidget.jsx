import "./style.css";
import { BsMinecart } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export default function CartWidget() {
  return (
    <div className="iconocart">
      <div className="enCarrito">0</div>
      <div>
        <Button variant="warning">
          <Link to="/Cart">
            <BsMinecart
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
                backgroundColor: "yellow",
                padding: 3,
              }}
            />{" "}
          </Link>
        </Button>
      </div>
    </div>
  );
}
