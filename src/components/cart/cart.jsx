import {useState} from 'react';
import {useCartContext} from "../../context/CartContext";
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from 'firebase/firestore'
import CountCart from "../countCart/countCart";
import {IoTrashOutline} from "react-icons/io5";
import CART from './CarritoVacio.png'


import {NavLink} from "react-router-dom";
import * as React from "react";


function Cart() {
    const {cartList, vaciarCarrito, deleteItem, precioTotal, formatNumber} = useCartContext()
    const [showModal, setShowModal] = React.useState(false);
    const [id, setId] = useState(null)
    const [dataForm, setDataForm] = useState({
        email: '',
        phone: '',
        name: ''
    })
    const generarOrden = async (e) => {
        e.preventDefault()

        let order = {}


        order.buyer = dataForm
        order.total = precioTotal()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.tittle
            const precio = cartItem.price * cartItem.cantidad
            const cantidad =  cartItem.cantidad

            return {id, nombre, precio,cantidad}
        })

        const db = getFirestore()
        const queryCollectionItems = collection(db, 'orders')
        await addDoc(queryCollectionItems, order)
            .then(({ id }) => setId(id))
            .catch(err => console.log(err))
            .finally(() => vaciarCarrito() )


        const queryCollection = collection(db, 'productos')

        const queryActulizarStock = await query(
            queryCollection, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,
            where( documentId() , 'in', cartList.map(it => it.id) )
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) ))
            .finally(()=> console.log('actulalizado'))

        batch.commit()



    }
    const handleChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            {id && <div
                className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 absolute inset-x-50 left-1/2 top-50 "
                role="alert">
                <span className="font-medium">Orden creada!</span> tu id de orden es {id}.
            </div>
            }
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
                            <div className="w-full mt-8 flex justify-end">
                                <div className="text-right w-min  shadow-md sm:rounded-lg ">
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
                            <div className=" mt-8 flex justify-end  w-full">
                                <>

                                    <button
                                        className="block  w-96 m-auto text-xs   py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                                        type="button"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Generar orden
                                    </button>
                                    {showModal ? (
                                        <>

                                            <div
                                                className="justify-center rounded-lg items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
                                            >
                                                <div className="relative  w-auto my-6 mx-auto max-w-3xl">
                                                    <div
                                                        className="border-0 rounded-lg shadow-lg z-10 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        <div>
                                                            <div className=" w-full rounded-lg">
                                                                <div className="text-right w-min  m-auto shadow-md sm:rounded-lg ">

                                                                    <table className=" text-sm text-left text-gray-500 p-2 w-96">
                                                                        <thead
                                                                            className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                                                        <tr>
                                                                            <th scope="col"
                                                                                className="px-6 py-3  flex justify-between  items-center">
                                                                                <div className=' '>Datos del comprador</div>
                                                                                <button
                                                                                    className="p-1 text-black  bg-transparent border-0 p-0 text-3xl float-right leading-none font-semibold outline-none focus:outline-none"
                                                                                    onClick={() => setShowModal(false)}>
                                                                                    <div className="text-black"> ×</div>
                                                                                </button>
                                                                            </th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td scope="row "
                                                                                className="p-3">
                                                                                <form
                                                                                    className='mt-5'
                                                                                    onSubmit={generarOrden}
                                                                                >

                                                                                    <div className="mb-2 ">
                                                                                        <label htmlFor="nombre"
                                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                                                                                        <input type="text" id="nombre"
                                                                                               name='name'
                                                                                               onChange={handleChange}
                                                                                               value={dataForm.name}
                                                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                                                               placeholder='Nombre'
                                                                                               required/>
                                                                                    </div>
                                                                                    <div className="mb-2">
                                                                                        <label htmlFor="telefono"
                                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
                                                                                        <input type="text" id="telefono"
                                                                                               name='phone'
                                                                                               onChange={handleChange}
                                                                                               value={dataForm.phone}
                                                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                                                               placeholder='Telefono'
                                                                                               required/>
                                                                                    </div>
                                                                                    <div className="mb-2">
                                                                                        <label htmlFor="email"
                                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                                                                        <input type="email" id="email"
                                                                                               name='email'
                                                                                               placeholder='email'
                                                                                               onChange={handleChange}
                                                                                               value={dataForm.email}
                                                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                                                               required/>
                                                                                    </div>
                                                                                    <div className="mb-2">
                                                                                        <label htmlFor="email2"
                                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmar
                                                                                            Email</label>
                                                                                        <input type="email" id="email2"
                                                                                               name='validarEmail'
                                                                                               placeholder='Repetir Email'
                                                                                               onChange={handleChange}
                                                                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                                                                               required/>
                                                                                    </div>
                                                                                    <div className="mt-8 mb-8 ">
                                                                                        <button
                                                                                            onClick={generarOrden}
                                                                                            className='block w-96  m-auto    py-2.5 px-5   text-mdtext-gray-900 bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>Generar
                                                                                            orden
                                                                                        </button>
                                                                                    </div>
                                                                                </form>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opacity-50 fixed inset-0 z-10 bg-black"></div>
                                        </>
                                    ) : null}
                                </>

                            </div>
                        </div>

                    </div>


                </div>
            }


        </div>
    )
}

export default Cart


