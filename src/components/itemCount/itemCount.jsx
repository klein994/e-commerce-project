import React, {useState} from 'react';
import {FaMinusCircle, FaPlusCircle, FaShoppingBag} from "react-icons/fa";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(1);

    const addOne = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };

    const removeOne = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    };
    const addToCart = () => {
        onAdd( count )
    };

    return (
        <div className="grid grid-cols-3 gap-0 items-center w-44">
            <div className="...">{(stock < 1) ? '' :
                <button
                    className='py-2.5 px-5 m-auto text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '
                    onClick={removeOne}><FaMinusCircle/>
                </button>
            }
            </div>
            <div className="...">
                {(stock < 1) ? '' :
                    <h2 className='p-4 text-sm m-auto font-semibold  text-gray-900 '>{count}</h2>}
            </div>
            <div className="...">{(stock < 1) ? '' :
                <button
                    className='py-2.5 px-5 m-auto text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '
                    onClick={addOne}><FaPlusCircle/>
                </button>
            }
            </div>
            <div className="col-span-3 ...">  {(stock < 1) ?
                <button
                    className='block m-auto flex items-center  text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '> sin
                    stock&nbsp; <FaShoppingBag/>
                </button>
                :
                <button
                    onClick={addToCart}
                    className='block m-auto w-full flex items-center   text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '> Añadir
                    al carrito &nbsp; <FaShoppingBag/>
                </button>}
            </div>
        </div>
    );
};

export default ItemCount;
