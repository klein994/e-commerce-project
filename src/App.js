import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer Greeting={'Hola este es un ItemListContainer-'}/>

        </div>
    );
}

export default App;
