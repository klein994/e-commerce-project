import React from 'react';
import {Link} from 'react-router-dom'
import {useCartContext} from "../../../context/CartContext";
import {IoBagHandleOutline} from 'react-icons/io5';
import {FaShoppingBag} from "react-icons/fa";

const CartWidget = () => {
    const {cartList, cantidadProductos, precioTotal, formatNumber} = useCartContext()

    return (
        <>
            <button id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom"
                    className="block text-2xl  py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                    type="button">
                {cantidadProductos() === 0 ? '' : <span
                    className="absolute ml-1 -mt-3  bg-blue-100 text-blue-800 text-sm font-medium  px-2.5 py-0.5 rounded-full ">{cantidadProductos()}</span>}
                <IoBagHandleOutline/>
            </button>
            <div id="dropdownBottom"
                 className="hidden z-10 p-3 max-w-md bg-white rounded  shadow-xl ">
                <ul className="py-1 text-sm text-gray-700 divide-y divide-gray-100"
                    aria-labelledby="dropdownBottomButton">
                    {cartList.map(prod => <li key={prod.id}
                                              className="pt-3 pb-0 sm:pt-4 hover:bg-gray-50 ">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src={prod.picture}
                                     alt="Neil image"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900  truncate ">
                                    {prod.tittle}
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    {prod.category}
                                </p>
                            </div>
                            <div
                                className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                {prod.cantidad} x ${formatNumber(prod.price)}
                            </div>
                        </div>
                    </li>)}
                    {cartList.length > 0 ?
                        <>
                            <li className='inline-flex items-center justify-between w-full font-semibold'>
                                <h2 className='text-2xl'>Total</h2> <h3
                                className='text-xl'>$ {formatNumber(precioTotal())}</h3>
                            </li>
                            <li>
                                <Link className='m-1' to='/cart'>
                                    <button
                                        className='block m-auto w-full flex items-center   text-xs justify-center py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '>Ir
                                        al Carrito  &nbsp; <FaShoppingBag/>
                                    </button>
                                </Link>
                            </li>
                        </>
                        :
                        <li>
                            <button
                                className='block m-auto w-full flex items-center   text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '>Carrito
                                vacío  &nbsp; <FaShoppingBag/>
                            </button>
                        </li>
                    }
                </ul>
            </div>
        </>
    );
};

export default CartWidget;
