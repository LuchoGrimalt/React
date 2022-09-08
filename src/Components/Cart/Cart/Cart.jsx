import React from "react";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../CartContext/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addDoc, collection, doc, increment, updateDoc } from "firebase/firestore";
import { DB } from "../../Data/Firebase";

export default function Cart() {
  const { cart, totalPrice, emptyCart } = useCartContext();
  console.log("carrito con", cart);

  const order = {
    buyer: {
      name: "Esteban Kito",
      phone: "1566889911",
      email: "oldschool@gmail.com",
    },
    items: cart.map((data) => ({
      id: data.id,
      title: data.name,
      price: data.price,
      quantity: data.quantity,
    })),
    total: totalPrice(),
  };
  console.log(order);

  const genOrder = () => {
    const ordersCollection = collection(DB, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
    cart.forEach(async (item) => {
      const itemRef = doc(DB, "products", item.id);
      await updateDoc(itemRef, { stock: increment(-item.quantity) });
    });
    emptyCart();
  };

  if (cart.length === 0) {
    return (
      <div>
        <p>No hay elemetos en el carrito</p>
        <Link to="/">
          <Button>Seguir comprando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {" "}
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              name={item.name}
              img={item.img}
              price={item.price}
            />
          );
        })
      ) : (
        <></>
      )}
      <div>
        <h4 className="cartTotal">Total: ${totalPrice()}</h4>
        <Link to={"/"}>
          <Button>Seguir comprando</Button>
        </Link>
      </div>
      <div className="my-3">
        <Button className="bg-info"onClick={() => emptyCart()}>Vaciar carrito</Button>
      </div>
      <Link to={"/"}>
        <Button  onClick={genOrder}>Comprar</Button>
      </Link>
      <br />
    </div>
  );
}
