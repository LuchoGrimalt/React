import React from "react";
import './style.css'
import { BsMinecart } from "react-icons/bs";


export default function CarWidget (){
    return ( 
        <div className="iconocart">
            <div className="enCarrito">0</div>
            <div> <BsMinecart style={{width:30, height:30, borderRadius:15, backgroundColor:'yellow', padding:3}}/> </div>
        </div>
    )
}
