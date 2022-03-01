import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import HomeWidget from "../HomeWidget/HomeWidget";
import LogInWidget from "../LoginWidget/LogInWidget";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import MenuMobile from "../MenuMobile/MenuMobile";
import LogoShop from "../LogoShop/LogoShop";

const NavBar = () => {
    return (
        <div className="shadow-xl">
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-black opacity-50 ">
                <div className="container flex flex-wrap justify-between items-center p-3 mx-auto">
                    <MenuMobile/>
                  <LogoShop/>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
