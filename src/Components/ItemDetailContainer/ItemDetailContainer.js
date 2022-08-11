import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import { getProducts, getProductsByCategory } from '../Products/asyncmock';
//import { useParams } from 'react-router-dom';


export default function ItemDetailContainer (prod){
  return(
    <div className="detail-conntainer">
        <ItemDetail prodList={prod}/>
    </div>
  )
}
