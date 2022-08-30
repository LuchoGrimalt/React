import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { DB } from "../../Data/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const [prod, setProd] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const queryCol = collection(DB, "products");
    if (categoryId) {
      const queryCat = query(
        queryCol,
        where("category", "==", categoryId)
      );
      getDocs(queryCat).then((res) =>
        setProd(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCol).then((res) =>
        setProd(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <div>
      <ItemList data={prod} category={categoryId} />
    </div>
  );
}
