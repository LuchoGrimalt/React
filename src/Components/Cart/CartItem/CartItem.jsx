import React from "react";
import Button from 'react-bootstrap/Button'
import { useCartContext } from "../CartContext/CartContext";

const CartItem = ({product}) => {
    const {delProdCart} = useCartContext();
    return (
        <div className="itemCarrito w-auto shadow-lg rounded d-flex row  col-3">
            <img src={product.img} alt={product.name} className="imgProductoCart img-fluid" />
            <div className="itemCarritoBody d-flex row col p-1 mb-2">
                <h4 >Nombre: {product.name} </h4>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio unitario: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                 <Button onClick={()=> delProdCart(product.id)}>Quitar Producto</Button> 
            </div>
        </div>
    )
}
export default CartItem