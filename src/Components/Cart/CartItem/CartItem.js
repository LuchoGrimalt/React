import React from "react";
import Button from 'react-bootstrap/Button'
import { useCartContext } from "../CartContext/CartContext";

const CartItem = ({props}) => {
    const {delProdCart} = useCartContext();
    return (
        <div className="itemCarrito w-auto shadow-lg rounded d-flex row  col-3">
            <img src={props.img} alt={props.name} className="imgProductoCart img-fluid" />
            <div className="itemCarritoBody d-flex row col p-1 mb-2">
                <h4 >Nombre: {props.name} </h4>
                <p>Cantidad: {props.quantity} </p>
                <p>Precio unitario: ${props.price}</p>
                <p>Subtotal: ${props.quantity * props.price}</p>
                 <Button onClick={()=> delProdCart(props.id)}>Quitar Producto</Button> 
            </div>
        </div>
    )
}
export default CartItem