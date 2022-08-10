import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./style.css";



export default function ItemListContainer(){
    return(
            <div className="Contenedor">
                <h4>Aproveche las ofertas de invierno 2022</h4>
                 <></>
                <ItemCount stock={'5'} initial={'1'} /> 
                <button type="button" >Agregar al carrito</button>
            </div>
    )
}