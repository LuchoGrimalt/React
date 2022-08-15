import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsByCategory } from "../Products/Products";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [prod, setProd] = useState([]);
  const { detailId } = useParams();

  useEffect(() => {
    getProductsByCategory(detailId)
      .then(prod => setProd(prod))
      .catch(error => console.log(error));
  }, [detailId]);

  return (
    <div className="item-detail-container">
      <ItemDetail {...prod} />
    </div>
  );
}
