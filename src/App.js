import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Contador from "./components/contador/contador";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer Greeting='Contador con limite de stock y un cosole.log para mostrar cuantos productos paso al carrito'/>

        </div>
    );
}

export default App;
