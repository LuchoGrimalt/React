import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";

// Hook tuneado
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

//Funciones en el contexto del carrito de compras
export const CartProvider = ({ children }) => {
  const [cartData, setCart] = useState([]);

  // Agregado productos al carrito
  const addProdCart = (item) => {
    const cartList = cartData.find((prodInCart) => prodInCart.id === item.id)
      ? cartData.map((prodInCart) => {
          if (prodInCart.id === item.id) {
            return {
              ...prodInCart,
              quantity: prodInCart.quantity + item.quantity,
            };
          }
          return prodInCart;
        })
      : [...cartData, item];
    setCart(cartList);
  };

  // Borrar formando un nuevo array sacando al elegido
  const delProdCart = (id) =>
    setCart(cartData.filter((prod) => prod.id !== id));

  // vaciar carrito con array nuevo.
  const emptyCart = () => {
    setCart([]);
  };

  // Productos
  const totalProd = () => {
    return cartData.reduce((prev, act) => prev + act.quantity, 0);
  };

  // Subtotal de carrito
  const totalPrice = () => {
    return cartData.reduce(
      (subtotal, actual) => subtotal + actual.quantity * actual.price,
      0
    );
  };

  
  // Precio final de la compra
  const totalBuy = () => {
    cartData.reduce(
      (subtotal, prodActual) => subtotal + prodActual.quantity,
      0
    );
  };

  //Finalizar compra
  const finalBuy = () => {
    return cartData.length >= 1 ? (
      <Button className="btn btn-success">Finalizar Compra</Button>
    ) : (
      " "
    );
  };

  return (
    <CartContext.Provider
      value={{
        addProdCart,
        emptyCart,
        delProdCart,
        totalProd,
        totalPrice,
        totalBuy,
        finalBuy,
        cart: cartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
