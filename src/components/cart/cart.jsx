import {React} from 'react';
import {useCartContext} from "../../context/CartContext";
import CountCart from "../countCart/countCart";
import ItemCount from "../itemCount/itemCount";
import { IoTrashOutline } from "react-icons/io5";
import {getFirestore} from "@firebase/firestore";
function Cart() {
    const formatNumber = (number) => new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number)
    const {cartList, vaciarCarrito,deleteItem} = useCartContext()





    return (
        <div>
            <div
                className="p-4 m-10 max-w-full h-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-100 dark:border-gray-100">
                <h1 className='text-3xl text-center m-2 '>Carrito</h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            <button className="block m-auto  flex items-center   text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 " onClick={vaciarCarrito}>Vaciar carrito</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {cartList.map(prod =><tr key={prod.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-4 py-4 text-2xl ">
                                <button
                                    onClick={() => deleteItem(prod.id)}
                                    className=''><IoTrashOutline/>
                                </button>
                                {/*<  id={prod.id}/>*/}

                            </td>
                        <td scope="row "
                            className="px-9 flex justify-left content-center items-center py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <img className='h-12 mr-2' src={prod.picture} alt=""/> {prod.tittle}
                        </td>

                        <td className="px-6 py-4">
                            {prod.category}
                        </td>
                        <td className="px-6 py-4">
                            ${formatNumber(prod.price)} {prod.currency}
                        </td>
                        <td className="px-6 py-4 text-center">
                            <CountCart stock={prod.stock} initial={prod.cantidad} idProduct={prod.id} />
                        </td>
                    </tr>
                    )}
                    </tbody>
                </table>
            </div>



            </div>
        </div>
    )
}

export default Cart


