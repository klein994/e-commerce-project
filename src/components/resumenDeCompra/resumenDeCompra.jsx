import React from 'react';
import {useCartContext} from "../../context/CartContext";

const ResumenDeCompra = () => {
    const { precioTotal, formatNumber} = useCartContext()

    return (
        <div>
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
        </div>
    );
};

export default ResumenDeCompra;
