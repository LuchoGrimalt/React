import { useEffect, useState } from "react";
import React from "react";
import { getProducts } from "../../Products/Products";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {
  const [prod, setProd] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    getProducts()
    .then(prod => setProd(prod.find(
      products=> products.id === parseInt(detailId))))
    }, [detailId]);

  return (
    <div className="item-detail-container">
      <ItemDetail  {...prod} />
    </div>
  );
}
