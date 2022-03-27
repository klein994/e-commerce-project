import React from 'react';
import {IoStar} from "react-icons/io5";
import ItemCount from "../itemCount/itemCount";
import {NavLink} from "react-router-dom";

const Item = ({products}) => {
    const formatNumber = (number) => new Intl.NumberFormat('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2}).format(number)

    return (
        <div >
            <div className=" max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
                <NavLink to={`detail/${products.id}`}  >
                    <img className="p-8 rounded-t-lg h-56 m-auto"  src={products.picture} alt="product image"/>
                </NavLink>
                <div className="px-5 pb-5">
                    <NavLink to={`detail/${products.id}`} >
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{products.tittle}</h5>
                    </NavLink>
                    <div className="flex items-center mt-2.5 mb-5">
                        <IoStar/>
                        <IoStar/>
                        <IoStar/>
                        <IoStar/>
                        <IoStar/>
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <NavLink to={`detail/${products.id}`}  >
                    <div className="flex justify-between items-center">
                        <div className="flex text-left flex-col mb-0">
                            <span className="text-md font-bold text-gray-400  dark:text-white">{products.category}</span>
                        </div>
                        <span className="text-2xl  font-bold text-gray-900 dark:text-white"><span className="text-sm font-bold text-gray-900  dark:text-white">{products.currency}$</span>  {formatNumber(products.price)}</span>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Item;