import React, { useContext, useState } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // vaciar carrito con array nuevo.
  const emptyCart = () => setCart([]);

  // el prod ya estaba en el cart?
  const inCart = (id) => (cart.find((prod) => prod.id === id) ? true : false);

  // Boorar formando un nuevo array sacando al elegido
  const delProdCart = (id) => setCart(cart.filter((prod) => prod.id !== id));

  // Agregardo condicional
  const addProdCart = (item, stockCart) => {
    if (inCart(item.id)) {
      setCart(cart.map((prod) => {
          return prod.id === item.id
            ? { ...prod, stockCart: prod.stockCart + stockCart }
            : prod;
        }));
    } else { setCart([...cart, { ...item, stockCart }]);
    }
  };

  return (
    <CartContext.Provider value={{ addProdCart, emptyCart, inCart, delProdCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
