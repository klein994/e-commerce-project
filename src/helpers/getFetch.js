import ImageDefault from '../product-1.png'

const products = [{
    id: 1,
    tittle: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    description: 'Descripción del producto 1',
    price: 2100,
    category: 'SmartWatch',
    currency: 'Ars',
    picture: {ImageDefault},
    stock: 7
}
    , {
        id: 2,
        tittle: 'Apple Watch Series 7 GPS,  Aluminium Case, Starlight Sport 2',
        description: 'Descripción del producto 2',
        price: 2200,
        category: 'SmartWatch',
        currency: 'Ars',
        picture: {ImageDefault},
        stock: 0
    }
    , {
        id: 3,
        tittle: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport 3',
        description: 'Descripción del producto 3',
        price: 2500,
        category: 'Accessories',
        currency: 'Ars',
        picture: {ImageDefault},
        stock: 2

    }, {
        id: 4,
        tittle: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport 4',
        description: 'Descripción del producto 3',
        price: 2300,
        category: 'Accessories',
        currency: 'Ars',
        picture: {ImageDefault},
        stock: 9

    }]

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 2000)


})
