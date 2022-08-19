import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem.js";


const Cart = (prod) => {
  const { cart, totalPrice, finalBuy } =  useCartContext() ;

  return (
    <>
      {cart.length === 0 ? (
        <div className="w-auto shadow-lg rounded d-flex row">
          <h3 className="text-dark text-center bg-warning ">
            Carrito Vacio 😕{" "}
          </h3>
          <Link to={"/"}>
            <Button className="btn btn-info col-5">Volver al catálogo</Button>
          </Link>
        </div>
      ) : (
        cart.map((prod) => {
          return < CartItem key={prod.id} prod={prod} />;
        })
      )}
      <div>
        <h4 className="cartTotal">Total: ${totalPrice()}</h4>
        <span>{finalBuy()} </span>
      </div>
    </>
  );
};

export default Cart;
