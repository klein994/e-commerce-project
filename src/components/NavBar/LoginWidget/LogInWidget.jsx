import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const LogInWidget = () => {
    return (
        <>
            <a href="#"
               data-modal-toggle="authentication-modal"
               className="block text-2xl py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                <IoPersonOutline />
            </a>
            <div id="authentication-modal" aria-hidden="true"
                 className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow ">
                        <div className="flex justify-end p-2">
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                                    data-modal-toggle="authentication-modal">
                                <IoClose />
                            </button>
                        </div>
                        <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                            <h3 className="text-xl font-medium text-gray-900 ">Sign in to our
                                platform</h3>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 ">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                       placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 ">Your
                                    password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                       required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
                                               required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember"
                                               className="font-medium text-gray-900 ">Remember
                                            me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm text-blue-700 hover:underline ">Lost
                                    Password?</a>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login
                                to your account
                            </button>
                            <div className="text-sm font-medium text-gray-500 ">
                                Not registered? <a href="#"
                                                   className="text-blue-700 hover:underline ">Create
                                account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogInWidget;
