import {createContext, useContext, useState} from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setcartList] = useState([])

    const addToCart = (item) => {

        setcartList([...cartList, item])

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
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;

