import { DB } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

export const getProductsData = (categoryId) => {
  return new Promise((res, rej) => {
    // creo la referencia a la colecion
    const colRef = collection(DB, "products");
    getDocs(colRef).then(
      (snapshot) => {
        console.log("snapshotdocs: ", snapshot.docs);

        // Adaptador para convertir DB en array de objetos
        const productsDB = snapshot.docs.map((rawdoc) => {
          return {
            id: rawdoc.id,
            ...rawdoc.data(),
          };
        });
        console.log("-->productos", productsDB);
        res(productsDB);
      },
      (error) => {
        rej("error al trear los docs: ", error);
      }
    );
  });
};
