const products = [
    {
        id:'1',
        name:'Hoddie Gvng',
        price: 7500,
        category: 'Hoddie',
        img:'./img/gvng.jpg',
        stock: 4,
        decription:'Vestite con este Hoddie bien fachero',
    },
    {
        id:'2',
        name:'Jogger',
        price: 5000,
        category:'Jogger',
        img:'./img/jogger.webp',
        stock: 2,
        decription:'Vestite con un Jogger bien de calle',
    },
    {
        id:'3',
        name:'Cool Shirt',
        price: 3400,
        category:'Overshirt',
        img:'./img/cool.jpg',
        stock: 7,
        decription:'Vestite con esta Overshirt super comoda',
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}