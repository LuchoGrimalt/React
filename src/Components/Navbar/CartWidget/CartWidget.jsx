import "./style.css";
import { BsMinecart } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { useCartContext } from "../../Cart/CartContext/CartContext";

export default function CartWidget() {
  const { totalProd } = useCartContext();
  return (
    <div className="iconocart">
      <div className="enCarrito">
      {totalProd !== 0 ? <input type="text" value={totalProd()} readOnly /> : ""}
      </div>
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
