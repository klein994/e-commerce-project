import React, {useState} from 'react';
import ImageDefault from '../../product-1.png'
import {IoCheckmarkCircle} from "react-icons/io5";
import {FaShoppingBasket, FaShoppingBag} from "react-icons/fa";
import ItemCount from "../itemCount/itemCount";
import {useCartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";





const ItemDetail = ({item}) => {

    const [isCant, setIsCant] = useState(false)
    const {addToCart} = useCartContext()

    const onAdd= (cant) => {

        addToCart( { ...item, cantidad: cant } )
        setIsCant(true)
    }


    const formatNumber = (number) => new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number)

    return (
        <div>
            <div
                className="p-4 max-w-full h-full bg-white rounded-lg border shadow-md sm:p-8 ">
                <h1 className='text-3xl text-left m-5'>{item.tittle}</h1>
                <div className="grid md:grid-cols-2  items-center gap-5 justify-center lg:grid-cols-3">
                    <div className="shadow-md p-2 h-min  "><img className='max-h-56 items-center w-auto m-auto' src={item.picture} alt=""/></div>
                    <div className=" p-2 lg:col-span-2 ">
                        <div className="flex items-baseline text-gray-900 ">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-4xl font-extrabold tracking-tight">{formatNumber(item.price)}</span>
                            <span
                                className="ml-1 text-xl font-normal text-gray-500 ">{item.currency}</span>
                        </div>
                        <ul role="list" className="my-7 space-y-5">
                            <li className="flex space-x-3">
                                <IoCheckmarkCircle className='text-xl text-blue-600'/>
                                <span
                                    className="text-base font-normal leading-tight text-gray-500 ">{item.description}</span>
                            </li>
                            <li className="flex space-x-3">
                                <IoCheckmarkCircle className='text-xl text-blue-600'/>
                                <span
                                    className="text-base font-normal leading-tight text-gray-500 ">En Stock {item.stock} Uds.</span>
                            </li>


                        </ul>

                        <div className=" ">

                            {isCant ?
                                <div className="flex md:justify-start sm:justify-between ">

                                    <Link className='m-1' to='/'>
                                        <button

                                            className='block m-auto w-full flex items-center   text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '>Añadir más Productos  &nbsp; <FaShoppingBasket/>
                                        </button>

                                    </Link>
                                    <Link className='m-1' to='/cart'>
                                        <button

                                            className='block m-auto w-full flex items-center   text-xs justify-between py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 '>Ir al Carrito  &nbsp; <FaShoppingBag/>
                                        </button>
                                    </Link>
                                </div>
                                :
                                <ItemCount stock={item.stock} initial='1' idProduct={item.id} onAdd={onAdd} />

                            }


                        </div>
                    </div>
                    <div className="...">


                    </div>

                </div>
            </div>

        </div>
    )
}

export default ItemDetail;
