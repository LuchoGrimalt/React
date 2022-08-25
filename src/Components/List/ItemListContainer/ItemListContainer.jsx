import React, { useEffect, useState } from "react";
import { getProductsData } from "../../Products/Products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [prod, setProd] = useState([]);
  const { id } = useParams();
  const categoryId = !isNaN(id) && +id;

  useEffect(() => {
    setProd([]);
    const productsDBPromise = getProductsData(categoryId);
    productsDBPromise.then(
      (data) => {
        setProd(data);
      },
      (err) => {
        console.log("Error getting products", err);
      }
    );
  }, [categoryId]);

  return (
    <div>
      <ItemList prod={prod} category={categoryId} />
    </div>
  );
}
