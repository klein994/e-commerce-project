import React from 'react';
import {useCartContext} from "../../context/CartContext";
import CountCart from "../countCart/countCart";
import {IoTrashOutline} from "react-icons/io5";
import CART from './CarritoVacio.png'
import {NavLink} from "react-router-dom";
import ResumenDeCompra from "../resumenDeCompra/resumenDeCompra";
import GenerarOrden from "../generarOrden/generarOrden";

function Cart() {
    const {cartList, vaciarCarrito, deleteItem, formatNumber} = useCartContext()
    return (
        <div>
            {cartList.length === 0 ?
                <div
                    className="p-4 m-10 mt-28  h-full bg-white rounded-lg border shadow-md sm:p-8 ">
                    <h1 className='text-3xl text-center m-2 '>Carrito Vacío</h1>
                    <img src={CART} className="h-auto m-auto" alt="Logo"/>
                    <NavLink to='/'
                             className="block m-auto mt-3 max-w-sm  text-center   text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                        Volver a la tienda
                    </NavLink>
                </div>
                :
                <div
                    className="p-4 m-10 mt-28 max-w-full   bg-white rounded-lg border shadow-md sm:p-8 ">
                    <h1 className='text-3xl text-center m-2 '>Carrito</h1>
                    <div className="">
                        <div className=''>
                            <div className="relative  overflow-x-auto max-h-fit w-full shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left  text-gray-500 ">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Producto
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            Categoría
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Precio
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <button
                                                className="block m-auto  flex items-center   text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                                                onClick={vaciarCarrito}>Vaciar carrito
                                            </button>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cartList.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)).map(prod => <tr
                                            key={prod.id}
                                            className="bg-white border-b  hover:bg-gray-50 ">
                                            <td className="px-4 py-4 text-2xl ">
                                                <button
                                                    onClick={() => deleteItem(prod.id)}
                                                    className=''><IoTrashOutline/>
                                                </button>
                                            </td>
                                            <td scope="row "
                                                className="px-9 flex justify-left content-center items-center py-4 font-medium text-gray-900  whitespace-nowrap">
                                                <img className='h-12 mr-2' src={prod.picture} alt=""/> {prod.tittle}
                                            </td>
                                            <td className="px-6 py-4">
                                                {prod.category}
                                            </td>
                                            <td className="px-6 py-4">
                                                ${formatNumber(prod.price)} {prod.currency}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <CountCart stock={prod.stock} initial={prod.cantidad} idProduct={prod}/>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                            <ResumenDeCompra/>
                            <GenerarOrden/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart


