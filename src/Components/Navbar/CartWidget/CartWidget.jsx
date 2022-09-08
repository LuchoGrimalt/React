import "./style.css";
import { BsMinecart } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { useCartContext } from "../../Cart/CartContext/CartContext";

export default function CartWidget() {
  const { totalProd } = useCartContext();
  return (
    <div>
      <Button className="iconCart d-flex-row p-1" variant="warning">
        <div className="enCarrito mx-1">
          {totalProd !== 0 ? totalProd() : ""}
        </div>
        <div>
          <Link to="/Cart">
            <BsMinecart
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
              }}
            />{" "}
          </Link>
        </div>
      </Button>
    </div>
  );
}
