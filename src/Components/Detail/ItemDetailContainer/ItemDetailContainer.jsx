import { useEffect, useState } from "react";
import React from "react";
import { getProductsById } from "../../Products/Products";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [prod, setProd] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    getProductsById(detailId)
    .then(prod => setProd(prod))
    }, [detailId]);

    return (
    <div className="item-detail-container">
      <ItemDetail {...prod} />
    </div>
  );
};

