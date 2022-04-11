import React from 'react';
import {IoCheckmarkDoneCircleOutline} from "react-icons/io5";
import {useCartContext} from "../../context/CartContext";

const Alert = ({mensaje}) => {
    const {vaciarCarrito} = useCartContext()

    const continuar = () => {
        vaciarCarrito()
    }

    return (
        <div>
            <div
                className="justify-center rounded-lg items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
            >
                <div className="relative  w-auto my-6 mx-auto max-w-3xl">
                    <div
                        id="alert-additional-content-3"
                        className="p-4 mb-4 bg-green-100 rounded-lg "
                        role="alert">
                        <div
                            className="flex items-center justify-center">
                            <div className='text-5xl text-green-700'><IoCheckmarkDoneCircleOutline/></div>

                            <h3 className="text-lg font-medium text-green-700 "> Tu orden fué generada con exito</h3>
                        </div>
                        <div className="mt-2 mb-4 text-3sm text-green-700 dark:text-green-800">
                            <br/> Tu orden id es: <h3 className="text-lg font-medium text-green-700 ">{mensaje}</h3>
                            <br/>
                        </div>
                        <div className="flex">
                            <button type="button"
                                    onClick={continuar}
                                    className="text-green-700 bg-transparent border w-96 m-auto border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md px-3 py-1.5 text-center"
                                    data-dismiss-target="#alert-additional-content-3" aria-label="Close">
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-10 bg-gray-700"></div>
        </div>
    )
}

export default Alert
