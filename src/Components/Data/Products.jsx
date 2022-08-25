import { DB } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

export const products = [
  {
    id: 1,
    name: "Gorra",
    category: "Accesorios",
    price: 1600,
    stock: 5,
    img: "../Images/gorra.jpg",
    image:
      "https://www.pexels.com/es-es/foto/nino-con-gorro-de-punto-naranja-y-chaqueta-marron-sentado-sobre-la-hierba-verde-5623729/",
  },
  {
    id: 2,
    name: "Pantalon Marron",
    category: "Ropa",
    price: 4200,
    stock: 4,
    img: "../Images/pantalon.jpg",
    image:
      "https://www.pexels.com/es-es/foto/persona-en-pantalones-marrones-y-zapatillas-blancas-y-negras-de-pie-sobre-el-piso-verde-y-blanco-5628759/",
  },
  {
    id: 3,
    name: "Sombrero",
    category: "Accesorios",
    price: 2200,
    stock: 12,
    img: "../Images/sombrero.jpg",
  },
  {
    id: 4,
    name: "Medias",
    category: "Ropa",
    price: 1000,
    stock: 6,
    img: "../Images/medias.jpg",
  },
  {
    id: 5,
    name: "Bufanda",
    category: "Accesorios",
    price: 1200,
    stock: 4,
    img: "../Images/bufanda.jpg",
  },
  {
    id: 6,
    name: "Remera",
    category: "Ropa",
    price: 3400,
    stock: 9,
    img: "../Images/remera.jpg",
  },
  {
    id: 7,
    name: "Buzo",
    category: "Ropa",
    price: 3600,
    stock: 10,
    img: "../Images/buzo.jpg",
  },
  {
    id: 8,
    name: "Jardinero",
    category: "Ropa",
    price: 5500,
    stock: 11,
    img: "../Images/jardinero.jpg",
  },
  {
    id: 9,
    name: "Gafas",
    category: "Accesorios",
    price: 3000,
    stock: 7,
    img: "../Images/gafas.jpg",
  },
  {
    id: 10,
    name: "Gorro de lana",
    category: "Accesorios",
    price: 1800,
    stock: 13,
    img: "../Images/gorro.jpg",
  },
];

export const getProductsData = (categoryId) => {
  return new Promise((res, rej) => {
    // creo la referencia a la collecion
    const colRef = collection(DB, "products");

    // Traigo los doc de la coleccion
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

// export const getFetch = new Promise((res, rej) => {
//   let condition = true;
//   if (condition) {
//     setTimeout(() => {
//       res(products);
//     }, 2000);
//   } else {
//     rej(console.log("no hay datos"));
//   }
// });

// export const getProducts = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(products);
//     }, 500);
//   });
// };

// export const getProductsById = (id) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(products.find((prod) => prod.id === parseInt(id)));
//     }, 200);
//   });
// }
