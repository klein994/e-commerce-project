import './App.css';
import NavBar from "./components/NavBar/NavBar";



const ItemListContainer = () => {
    return (
        <div>
            <h3>Las ofertas de la semana</h3>
        </div>
    );
};




function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer/>

        </div>
    );
}

export default App;
