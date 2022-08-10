import React from "react";
import { useState } from "react";


export default function (props){
    const [count, setCount]= useState (1);
    function addItem (){
        count < props.stock ? setCount (count + 1): alert('Solo se pueden cargar hasta 5 unidades')
    }

    function removeItem (){
        count > props.initial ? setCount (count - 1): alert('minima cantidad seleccionada')
    }
    return(
        <div style={{display:'flex', justifyContent: 'space-evenly'}}>
            <button onClick={removeItem}>-</button>
            {count}
            <button onClick={addItem}>+</button>
        </div>
    )    
}