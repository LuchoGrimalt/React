import React from "react";
import './style.css'
import { BsMinecart } from "react-icons/bs";


export default function CarWidget (){
    return ( 
        <div className="iconocart">
            <div className="enCarrito">0</div>
            <div> <BsMinecart width={40} height={40} /> </div>
        </div>
    )
}
