import React, {useEffect, useState} from 'react' // estos son hooks
import {FaMinusCircle, FaPlusCircle} from "react-icons/fa";


const Contador = () => {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(true);

    useEffect(() => {
        console.log('se llama cada vez q se renderize el componente ')
        return () => {
            console.log('efecto limpieza') // primero se ejecuta antes de desmontado sirve para limpiar algún evento
        }
    })
    useEffect(() => {
        console.log('disparo 2 una sola vez trae todo aqui va la llamada de la api')
    }, [])

    useEffect(() => {
        console.log('solo se dispara si camnia el bool')
    }, [bool])

    const CountClick = () => {
        setCount(count + 1);
    }
    const RemoveCountClick = () => {
        setCount(count - 1);
    };
    const confBool = () => {
        setBool(!bool);
    };
    console.log('disparo 2')
    return (
        <div>

            <div className='flex items-center justify-center'>
                <button
                    className='block   w-auto px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 '
                    onClick={RemoveCountClick}><FaMinusCircle/></button>
                <h1 className='p-5'>{count}</h1>
                <button
                    className='block   w-auto px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 '
                    onClick={CountClick}><FaPlusCircle/></button>

            </div>
        </div>
    );
};

export default Contador;
