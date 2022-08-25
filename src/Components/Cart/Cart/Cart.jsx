import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const { cartData, totalPrice, finalBuy, emptyCart } = useCartContext();
  console.log("carrito con", cartData);

  return (
    <div>
      {" "}
      {cartData.length > 0 ? (
        cartData.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              nombre={item.name}
              imagen={item.img}
              precio={item.price}
            />
          );
        })
      ) : (
        <div className="w-auto shadow-lg rounded d-flex row">
          <h3 className="text-dark text-center bg-warning ">
            Carrito Vacio {" "}
          </h3>
          <Link to={"/"}>
            <Button className="btn btn-info col-5">Volver al catálogo</Button>
          </Link>
        </div>
      )}
      <div>
        <h4 className="cartTotal">Total: ${totalPrice()}</h4>
        <>{finalBuy()}</>
        <>{emptyCart()}</>
      </div>
      <br />
      <Link to={"/"}>
        <Button className="btn btn-info bg-warning">Volver al catálogo</Button>
      </Link>
    </div>
  );
}
