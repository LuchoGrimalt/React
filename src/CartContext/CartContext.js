import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
export const CartProvider = ({ props }) => {
  const [cart, setCart] = useState([]);
  const addProdCart = (item, stockCart) => {
    if (addProdCart(item.id)) {
      setCart(
        cart.map((prod) => {
          return prod.id === item.id
            ? { ...prod, stockCart: prod.stockCart + stockCart }
            : prod;
        })
      );
    } else {
      setCart([...cart, { ...item, stockCart }]);
    }
  };

  const ClearCart = () => setCart([]); // vaciar carrito con array nuevo
  const inCart = (id) => (cart.find((prod) => prod.id === id) ? true : false); // esta en el cart?
  const delProdCart = (id) => setCart(cart.filter((prod) => prod.id !== id)); // forma un nuevo array sacando al elegido

  return (
    <CartContext.Provider
      value={{ addProdCart, ClearCart, inCart, delProdCart }}
    >
      {props}
    </CartContext.Provider>
  );
};
