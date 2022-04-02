import {React} from 'react';
import {useCartContext} from "../../context/CartContext";
import CountCart from "../countCart/countCart";
import {IoTrashOutline} from "react-icons/io5";
import {addDoc, collection, getFirestore} from 'firebase/firestore'

function Cart() {


    const {cartList, vaciarCarrito, deleteItem, precioTotal,formatNumber} = useCartContext()


    function generarOrden(e) {
        e.preventDefault();
        // let order = {}
        // order.buyer = {name: 'Alberto', email: 'Klein994@hotmail.com', phone: '1127645038'}
        // order.total = precioTotal()
        //
        // order.item = cartList.map(cartItem => {
        //     const id = cartItem.id
        //     const nombre = cartItem.name
        //     const precio = cartItem.price * cartItem.cantidad
        //     return {id, nombre, precio}
        // })
        //
        // const db = getFirestore()
        // const queryCollection = collection(db, 'orders')
        // addDoc(queryCollection, order)
        //     .then(({id}) => console.log(id))

         console.log('order')
    }


    return (
        <div>
            <div
                className="p-4 m-10 max-w-full h-full bg-white rounded-lg border shadow-md sm:p-8 ">
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


            </div>
            <button
                onClick={() => generarOrden()}
                className=''>Generar orden
            </button>
        </div>
    )
}

export default Cart


