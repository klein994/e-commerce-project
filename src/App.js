import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/cart/cart";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";



function App() {
    return (
        <BrowserRouter >
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer Greeting='Ecommerce'/>}/>
                <Route path='/category/:id' element={<ItemListContainer />}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                <Route path='/*' element={<Navigate to='/' /> }/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>

        </div>
        </BrowserRouter>

);
}

export default App;
