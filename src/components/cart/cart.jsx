import {React} from 'react';
import {useCartContext} from "../../context/CartContext";
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import CountCart from "../countCart/countCart";
import {IoTrashOutline} from "react-icons/io5";
import CART from './CarritoVacio.png'

import {NavLink} from "react-router-dom";


function Cart() {


    const {cartList, vaciarCarrito, deleteItem, precioTotal, formatNumber} = useCartContext()


    function generarOrden(e) {
        // e.preventDefault();

        let order = {}

        // debugger
        order.buyer = {name: 'Alberto', email: 'Klein994@hotmail.com', phone: '1127645038'}
        order.total = precioTotal()

        order.item = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.cantidad
            return {id, nombre, precio}
        })
        // console.log(order)

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        console.log(queryCollection)

        addDoc(queryCollection, order)
            .then(res => console.log("resProm: ", res))
            .catch(err => console.log("error: ", err))


    }


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
                    className="p-4 m-10 mt-28 max-w-full h-full bg-white rounded-lg border shadow-md sm:p-8 ">
                    <h1 className='text-3xl text-center m-2 '>Carrito</h1>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 ">
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

                            {cartList.map(prod => <tr key={prod.id}
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
                                        <CountCart stock={prod.stock} initial={prod.cantidad} idProduct={prod.id}/>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end w-full">
                        <div className="text-right w-min  mt-8 shadow-md sm:rounded-lg ">
                            <table className=" text-sm text-left text-gray-500 p-2 w-96">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Resumen de compra
                                    </th>
                                    <th scope="col" className="px-6 py-3 w-10">

                                    </th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td scope="row "
                                        className="p-3">
                                        Sub-total:
                                    </td>
                                    <td scope="row "
                                        className="p-3 text-right">
                                        ${formatNumber(precioTotal())}
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row "
                                        className="p-3">
                                        Envío:
                                    </td>
                                    <td scope="row "
                                        className="p-3 text-right">
                                        ${formatNumber(0)}
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row "
                                        className="text-2xl p-3 ">
                                        Total:
                                    </td>
                                    <td scope="row "
                                        className="text-2xl p-3 text-right">
                                        ${formatNumber(precioTotal())}
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-end w-full">
                        <button
                            onClick={() => generarOrden()}
                            className='block  w-96 mt-8 text-xs  py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>Generar
                            orden
                        </button>
                    </div>


                </div>
            }


        </div>
    )
}

export default Cart


