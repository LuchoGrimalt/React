export const products = [
  {
    id: 1,
    name: "Gorro",
    category: "Accesorios",
    price: 1600,
    stock: 5,
    img: "../Images/gorro.jpg",
  },
  {
    id: 2,
    name: "Pantalon",
    category: "Ropa",
    price: 4200,
    stock: 4,
    img: "../Images/pantalon.jpg",
  },
  {
    id: 3,
    name: "Remera",
    category: "Ropa",
    price: 3400,
    stock: 12,
    img: "../Images/remera.jpg",
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
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products.filter(prod => prod.category === categoryId));
    }, 200);
  });
};

export const getProductsById = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products.find(prod=> prod.id === parseInt(id)));
    }, 200);
  });
};