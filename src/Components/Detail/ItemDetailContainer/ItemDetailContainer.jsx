import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../Data/Firebase";
import React from "react";
import ItemDetail from "../../Detail/ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState();
  const { detailId } = useParams();

  useEffect(() => {
    const prodDetail = doc(DB, "products", detailId);
    getDoc(prodDetail)
      .then((res) => setData({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));
  }, [detailId]);

  return (
    <div className="item-detail-container d-flex justify-content-md-center ">
      {data ? (
        <ItemDetail {...data} />
      ) : (
        <div className="item-detail-container"> Cargando producto....</div>
      )}
    </div>
  );
};
export default ItemDetailContainer;
