import React from 'react';
import {IoChevronDownOutline} from "react-icons/io5";
import {NavLink} from "react-router-dom";

const CategoriesMenu = () => {
    return (
        <>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                    className="flex text-base pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Categorías
              <span className='text-2xl'><IoChevronDownOutline/></span>
            </button>

            <div id="dropdownNavbar"
                 className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <NavLink to='category/Accessories'
                           className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Accessories</NavLink>
                    </li>
                    <li>
                        <NavLink to="category/SmartWatch"
                           className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Smart Watch</NavLink>
                    </li>

                </ul>
                <div className="py-1">
                    <NavLink to="/"
                       className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Todas</NavLink>
                </div>
            </div>
        </>
    );
};

export default CategoriesMenu;
