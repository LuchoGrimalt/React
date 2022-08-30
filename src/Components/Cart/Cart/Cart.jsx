import React from "react";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../CartContext/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartData, totalPrice, finalBuy, emptyCart } = useCartContext();
  // console.log("carrito con", cartData);

  // function createOrder() {
  //   const itemsOrder = test.finalList.map((item) => ({
  //     id: item.iditem,
  //     title: name.item,
  //     price: price.item,
  //   })).sort;

  //   let order = {
  //     buyer: {
  //       name: "Esteban Kito",
  //       phone: "1566889911",
  //       email: "oldschool@gmail.com",
  //     },
  //     items: test.finalList,
  //     total: test.totalBuy(),
  //   };

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
          <h3 className="text-dark text-center bg-warning ">Carrito Vacio </h3>
          <Link to={"/"}>
            <Button className="btn btn-info col-5">Volver al catálogo</Button>
          </Link>
        </div>
      )}
      <div>
        <h4 className="cartTotal">Total: ${totalPrice()}</h4>
        <Button onClick={finalBuy()}>Finalizar compra</Button>
        <Button onClick={emptyCart()}>Vaciar carrito</Button>
      </div>
      <br />
      <Link to={"/"}>
        <Button className="btn btn-info bg-warning">Volver al catálogo</Button>
      </Link>
    </div>
  );
}
