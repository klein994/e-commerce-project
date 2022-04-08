import {createContext, useContext, useState} from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setcartList] = useState([])

    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)//pos    -1
        if (index > -1) {
            const aQty = cartList[index].cantidad
            cartList.splice(index, 1)
            setcartList([...cartList, { ...item, cantidad: item.cantidad + aQty}])
        } else {
            setcartList([...cartList, {...item, cantidad: item.cantidad}])
        }
    }

    const formatNumber = (number) => new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number)

    const precioTotal=() =>{
        return cartList.reduce((count,prod)=> count + (prod.cantidad * prod.price),0)
    }
    const cantidadProductos=() =>{
        return cartList.reduce((count,prod)=> count += prod.cantidad ,0)
    }

    const vaciarCarrito = () => {
        setcartList([])
    }
    const deleteItem = (id) => {
        const eliminar = cartList.filter((iten) => iten.id !== id);
        setcartList(eliminar);
    };

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            deleteItem,
            precioTotal,
            cantidadProductos,
            formatNumber
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;

