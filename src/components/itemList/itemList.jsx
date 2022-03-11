
import React, {useEffect, useState} from 'react';

import {getFetch} from "../../helpers/getFetch";
import Item from "../item/iten";
import Loading from "../loading/loading";


const ItemList = () => {
    const [prods, setprods] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        getFetch
            .then((response) => {
                setprods(response)
            })
            .catch((error) => console.log(error))
            .finally(() =>  setLoading(false))
    },[])
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-4">

            { loading ? <Loading/> :
                prods.map((prod)=>
                    <div key={prod.id} >
                        <Item products={prod}/>
                        {/*{console.log(prod.picture)}*/}
                    </div>

                )}
        </div>
    );
};

export default ItemList;
