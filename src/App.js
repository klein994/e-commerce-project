import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Navigate, Route, Routes,} from 'react-router-dom'

import Cart from "./components/cart/cart";
import ItemDetailContainer from "./container/itemDetailContainer/itemDetailContainer";

import React from "react";
import CartContextProvider from './context/CartContext'
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App dark:bg-gray-700 h-screen">
             <CartContextProvider>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer Greeting='Ecommerce'/>}/>
                        <Route path='/category/:id' element={<ItemListContainer/>}/>
                        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                        <Route path='/*' element={<Navigate to='/'/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
            </CartContextProvider>
            </div>
        </BrowserRouter>

);
}

export default App;
