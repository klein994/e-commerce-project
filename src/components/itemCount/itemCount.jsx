import React, {useState} from 'react';
import {FaMinusCircle, FaPlusCircle, FaShoppingBag} from "react-icons/fa";

const ItemCount = ({stock, initial, onAdd, idProduct}) => {
    const [count, setCount] = useState(0);

    const addOne = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };
    // handleDecrease
    const removeOne = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    };
    const addToCart = () => {
        console.log(`se añadió ${count} productos al carrito del producto id = ${idProduct}`)
    };

    return (
        <div className='text-center'>
            <div className='flex items-center justify-center'>
                <button
                    className='py-2.5 px-5 m-auto text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                    onClick={removeOne}><FaMinusCircle/>
                </button>
                <h2 className='p-4 text-sm m-auto font-semibold  text-gray-900 dark:text-white'>{count}</h2>
                <button
                    className='py-2.5 px-5 m-auto text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                    onClick={addOne}><FaPlusCircle/>
                </button>
            </div>
            {(stock < 1) ?
                <button
                    className='block m-auto flex items-center  text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'> sin
                    stock&nbsp; <FaShoppingBag/>
                </button>
                :
                <button
                    onClick={addToCart}
                    className='block m-auto flex items-center  text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'> Añadir
                    al carrito &nbsp; <FaShoppingBag/>
                </button>}
        </div>
    );
};

export default ItemCount;
