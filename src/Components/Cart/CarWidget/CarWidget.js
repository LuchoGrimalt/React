import React from "react";
import "./style.css";
import { BsMinecart } from "react-icons/bs";
import { useCartContext } from "../../../CartContext/CartContext";


export default function CarWidget() {
    const nameProd = useCartContext
  return (
    <div className="iconocart">
      <div className="enCarrito">0</div>
      <div>
        {" "}
        <BsMinecart
          style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            backgroundColor: "yellow",
            padding: 3,
          }}
        />{" "}
      </div>
    </div>
  );
}
