import React from "react";
import Button from 'react-bootstrap/Button'
import { useCartContext } from "../CartContext/CartContext";

const CartItem = ({ id, quantity, name, img, price }) => {
    const {delProdCart} = useCartContext();
    return (
        <div className="itemCarrito w-auto shadow-lg rounded d-flex row  col-3">
            <img src={img} alt={name} className="imgProductoCart img-fluid" />
            <div className="itemCarritoBody d-flex row col p-1 mb-2">
                <h4>Nombre: {name} </h4>
                <p> Cantidad: {quantity} </p>
                <p> Precio unitario: ${price}</p>
                <p> Subtotal: ${quantity * price}</p>
                 <Button onClick={()=> delProdCart(id)}>Quitar Producto</Button> 
            </div>
        </div>
    )
}
export default CartItem;