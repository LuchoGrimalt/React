import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../../Data/Firebase";
import React from "react";
import ItemDetail from "../../Detail/ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

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
    <div >
      {data ? (
        <ItemDetail {...data} />
      ) : (
        <div className="m-4"> 
        <h6 >Cargando producto...</h6> 
        <Spinner animation="border" variant="warning" />
        </div>
      )}
    </div>
  );
};
export default ItemDetailContainer;
