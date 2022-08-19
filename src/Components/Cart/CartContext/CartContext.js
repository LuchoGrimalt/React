import React, { Button, useContext, useState } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //const [quantity, setQuantity] = useState(0);

  // vaciar carrito con array nuevo.
  const emptyCart = () => setCart([]);

  // el prod ya estaba en el cart?
  const inCart = (id) => (cart.find((prod) => prod.id === id) ? true : false);

  // Borrar formando un nuevo array sacando al elegido
  const delProdCart = (id) => setCart(cart.filter((prod) => prod.id !== id));

  // Agregado condicional
  const addProdCart = (item, quantity) => {
    if (inCart(item.id)) {
      setCart(
        cart.map((prod) => {
          return prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Productos
  const totalProd = () => {
    return cart.reduce((prev, act) => prev + act.quantity, 0);
  };

  //Finalizar compra
  const finalBuy = () => {
    return cart.length >= 1 ? (
      <Button className="btn btn-success w-100">Finalizar Compra</Button>
    ) : (
      " "
    );
  };

  // Subtotal de carrito
  const totalPrice = () => {
    return cart.reduce(
      (subtotal, actual) => subtotal + actual.quantity * actual.price,
      0
    );
  };

  // Precio final de la compra
  const totalBuy = () => {
    cart.reduce((subtotal, prodActual) => subtotal + prodActual.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        addProdCart,
        emptyCart,
        inCart,
        delProdCart,
        totalProd,
        finalBuy,
        totalPrice,
        totalBuy,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
