import React, {useEffect } from 'react';


export default function ApiPokemon() {

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((res) => res.json())
            .then((res) => console.log(res.results))
            .catch((res) => console.log(res))


    }, []);
    return (
        <div>

        </div>
    );
}