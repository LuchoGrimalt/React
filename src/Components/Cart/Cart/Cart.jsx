import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../CartContext/CartContext";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  increment,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { DB } from "../../Data/Firebase";
import swal from "sweetalert";

export default function Cart() {
  const { cart, totalPrice, emptyCart } = useCartContext();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const order = {
    buyer: { name, phone, email },
    items: cart.map((data) => ({
      id: data.id,
      title: data.name,
      price: data.price,
      quantity: data.quantity,
    })),
    total: totalPrice(),
    date: serverTimestamp()
  };

  const genOrder = () => {
    const ordersCollection = collection(DB, "orders");
    addDoc(ordersCollection, order).then(({ id }) =>
    swal ({ 
      title: "Compra exitosa",
      text: `Orden de compra con ID: ${id} \n
      Pronto le llegara un mail con los detalles de la compra\n
      Gracias por confiar en nosotros!!`,
      icon: "success",
      button: "Aceptar",}
    )) ;
    cart.forEach(async (item) => {
      const itemRef = doc(DB, "products", item.id);
      await updateDoc(itemRef, { stock: increment(-item.quantity) });
    });
    emptyCart();
  };

  if (cart.length === 0) {
    return (
      <div>
        <p className="m-5">No hay elemetos en el carrito</p>
        <Link to="/">
          <Button className="mb-5">Seguir comprando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
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
            </div>
          </div>
          <div className="col-6">
            <Form style={{ flexDirection: "row" }}>
              <h5>Datos para la compra:</h5>
              <div>
                <label htmlFor="name" className="m-3">
                  Nombre:{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="phone" className="m-3">
                  Teléfono:{" "}
                </label>
                <input
                  type="number"
                  name="email"
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="email" className="m-3">
                  E-mail:{" "}
                </label>
                <input
                  type="email"
                  name="name"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                ></input>
              </div>
              <Link to={"/"}>
                <Button
                  type="submit"
                  disabled={!name || !phone || !email}
                  onClick={genOrder}
                >
                  Finalizar compra{" "}
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
      <div>
        <h4 className="cartTotal">Total: ${totalPrice()}</h4>
      </div>
      <div>
        <Link to={"/"}>
          <Button>Seguir comprando</Button>
        </Link>
        <Button className="bg-info m-3" onClick={() => emptyCart()}>
          Vaciar carrito
        </Button>
      </div>
      <br />
    </div>
  );
}
