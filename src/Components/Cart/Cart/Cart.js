import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../CartContext/CartContext";

const Cart = () => {
  const { cart, finalPrice, finalBuy } =  useCartContext ;

  return (
    <>
      {cart.length === 0 ? (
        <div className="w-auto shadow-lg rounded d-flex row">
          <h3 className="text-dark text-center bg-warning">
            Carrito Vacio 😕{" "}
          </h3>
          <Link to={"/"}>
            <Button className="btn btn-info col-12">Volver al catálogo</Button>
          </Link>
        </div>
      ) : (
        cart.map((prod) => {
          return < CartItem key={prod.id} prod={prod} />;
        })
      )}
      <div>
        <h4 className="cartTotal">Total: ${finalPrice()}</h4>
        <span>{finalBuy()} </span>
      </div>
    </>
  );
};

export default Cart;
