import { useEffect, useState } from "react";
import React from "react";
import { getProductsData } from "../../Data/Products";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [item, setProd] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    getProductsData(detailId).then((prod) => setProd(prod));
  }, [detailId]);

  return (
    <div className="item-detail-container">
      <ItemDetail id={item.id} name={item.name} img={item.img} 
      category={item.category} price={item.price} stock={item.stock}/>
    </div>
  );
}
