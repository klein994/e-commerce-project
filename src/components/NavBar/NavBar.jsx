import React from 'react';
import LOGO from '../../logo.svg'
import CartWidget from "./CartWidget/CartWidget";
import HomeWidget from "./HomeWidget/HomeWidget";
import LogInWidget from "./LoginWidget/LogInWidget";
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import {IoMenu} from "react-icons/io5";

const NavBar = () => {
    return (
        <div className="shadow-xl">
            <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800 ">
                <div className="container flex  flex-wrap md:flex-nowrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <img src={LOGO} className="mr-3 h-auto max-w-xs sm:h-10" alt="Logo"/>

                    </a>
                    <div className="flex md:order-2">

                        <button data-collapse-toggle="mobile-menu-4" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-4" aria-expanded="false">
                            <span className='text-2xl'> <IoMenu/></span>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex p-3 md:order-1"
                         id="mobile-menu">
                        <input type="text" id="email-adress-icon"
                               className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search..."/>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-3"
                         id="mobile-menu-4">
                        <ul className="flex m-0 flex-col  mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <CategoriesMenu/>
                            </li>
                            <li>
                                <HomeWidget/>
                            </li>
                            <li>
                                <LogInWidget/>
                            </li>
                            <li>
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
