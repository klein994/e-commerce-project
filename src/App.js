import './App.css';
import NavBar from "./components/NavBar/NavBar";



const ItemListContainer = ({Greeting}) => {
    return (
        <div>
            <h3>{Greeting}</h3>
        </div>
    );
};




function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer Greeting={'Hola este es un ItemListContainer'}/>

        </div>
    );
}

export default App;
