import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";

export default function Cart () {
  const { cart, totalPrice, finalBuy } = useCartContext();
  console.log('carrito con', cart);

  if (cart.length === 0) {
    return (
      <div className="w-auto shadow-lg rounded d-flex row">
        <h3 className="text-dark text-center bg-warning ">Carrito Vacio 😕 </h3>
        <Link to={"/"}>
          <Button className="btn btn-info col-5">Volver al catálogo</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        {cart.map((product) => (
          <CartItem key={product.id} id={product.id} quantity={product.quantity} nombre={product.name} imagen={product.img} precio={product.price} />
        ))}
        <div>
          <h4 className="cartTotal">Total: ${totalPrice()}</h4>
          <span>{finalBuy()} </span>
        </div>
      </div>
    );
  }
};

