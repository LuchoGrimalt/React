
const products = [
    {
        id: 1,
        name: 'Gorro',
        category: 'Accesorios',
        price: 99.00,
        stock: 5,
        img: "../Images/gorro.jpg"
    },
    {
        id: 2,
        name: 'pantalon',
        category: 'Vestimenta',
        price: 42.00,
        stock: 4,
        img: "../Images/pantalon.jpg"
    },
    {
        id: 3,
        name: 'remera',
        category: 'Vestimenta',
        price: 34.00,
        stock: 12,
        img: "../Images/remera.jpg"
    },
    {
        id: 4,
        name: 'medias',
        category: 'Vestimenta',
        price: 19.00,
        stock: 6,
        img: "../Images/medias.jpg"
    },
    {
        id: 5,
        name: 'bufanda',
        category: 'Accesorios',
        price: 19.00,
        stock: 0,
        img: "../Images/bufanda.jpg"
    },
]

const getFetch = new Promise ((res,rej)=>{
    let condition = true
    if(condition){
        setTimeout(()=>{
            res(products)
        },2000);
    }
    else{
        rej(console.log("no hay datos"))
    }
})

export default getFetch;


// export const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 1000)
//     })
//   }
  
//   export const getProductsByCategory = (categoryId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category === categoryId))
//         }, 500)
//     })
//   }
  
//   export const getProductById = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === id))
//         }, 500)
//     })
//   }