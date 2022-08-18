import React from "react";
import Button from 'react-bootstrap/Button'
import { useCartContext } from "../CartContext/CartContext";

const CartItem = ({prod}) => {
    const {delProdCart} = useCartContext;
    return (
        <div className="itemCarrito w-auto shadow-lg rounded d-flex row  col-3">
            <img src={prod.img} alt={prod.name} className="imgProductoCart img-fluid" />
            <div className="itemCarritoBody d-flex row col p-1 mb-2">
                <h4 >Nombre: {prod.name} </h4>
                <p>Cantidad: {prod.quantity} </p>
                <p>Precio unitario: ${prod.price}</p>
                <p>Subtotal: ${prod.quantity * prod.precio}</p>
                 <Button onClick={()=> delProdCart(prod.id)}>Quitar Producto</Button> 
            </div>
        </div>
    )
}
export default CartItem