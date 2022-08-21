import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../Products/Products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [prod, setProd] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      getProducts().then((prod) => {
        setProd(prod);
      });
    } else {
    getProductsByCategory(categoryId).then((prod) => {
      setProd(prod);
      });
    }
  }, [categoryId]);

  return (
    <div>
      <ItemList prod={prod} />
    </div>
  );
}
