export const products = [
  {
    id: 1,
    name: "Gorro",
    category: "Accesorios",
    price: 99.0,
    stock: 5,
    img: "../Images/gorro.jpg",
  },
  {
    id: 2,
    name: "Pantalon",
    category: "Ropa",
    price: 42.0,
    stock: 4,
    img: "../Images/pantalon.jpg",
  },
  {
    id: 3,
    name: "Remera",
    category: "Ropa",
    price: 34.0,
    stock: 12,
    img: "../Images/remera.jpg",
  },
  {
    id: 4,
    name: "Medias",
    category: "Ropa",
    price: 19.0,
    stock: 6,
    img: "../Images/medias.jpg",
  },
  {
    id: 5,
    name: "Bufanda",
    category: "Accesorios",
    price: 19.0,
    stock: 4,
    img: "../Images/bufanda.jpg",
  },
];

const getFetch = new Promise((res, rej) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      res(products);
    }, 2000);
  } else {
    rej(console.log("no hay datos"));
  }
});

export default getFetch;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
