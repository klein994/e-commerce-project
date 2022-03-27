import React, {useState} from 'react';
import {FaMinusCircle, FaPlusCircle, FaShoppingBag} from "react-icons/fa";



const CountCart = ({stock, initial, onAdd, idProduct}) => {

    const [count, setCount] = useState(initial);
    const addOne = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };
    // handleDecrease
    const removeOne = () => {
        if (count >1) {
            setCount(count - 1)
        }
    };
    return (
        <div className="grid grid-cols-3 m-auto gap-0 items-center w-44">


            <div className="...">{(stock < 1) ? '' :
                <button
                    className='py-2.5 px-5 m-auto text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '
                    onClick={removeOne}><FaMinusCircle/>
                </button>
            }
            </div>
            <div className="...">
                {(stock < 1) ? '' :
                    <h2 className='p-4 text-sm m-auto font-semibold  text-gray-900 dark:text-white'>{count}</h2>}
            </div>
            <div className="...">{(stock < 1) ? '' :
                <button
                    className='py-2.5 px-5 m-auto text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '
                    onClick={addOne}><FaPlusCircle/>
                </button>
            }
            </div>



        </div>
    );
};

export default CountCart;
