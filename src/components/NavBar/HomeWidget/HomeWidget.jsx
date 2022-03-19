import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import {NavLink} from "react-router-dom";

const HomeWidget = () => {
    return (
        <>
            <NavLink to='/'
                     className=" block text-2xl py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <IoHomeOutline />
            </NavLink>
        </>
    );
};

export default HomeWidget;
