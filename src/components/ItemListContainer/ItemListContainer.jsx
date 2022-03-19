import React, {useEffect, useState} from 'react';


import ItemList from "../itemList/itemList";

import {useParams} from "react-router-dom";
import {getFetch} from "../../helpers/getFetch";
import Loading from "../loading/loading";

const ItemListContainer = ({Greeting}) => {
    const {id} = useParams()
    // console.log(id)

    const [prods, setprods] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        if (id) {
            getFetch
                .then(resp => setprods(resp.filter(prod => prod.category === id)))
                .catch(err => console.log(err))
                .finally(() =>
                    setLoading(false)

                )
        } else {
            getFetch
                .then(resp => setprods(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
         }
    }, [id])

    return (

            <div className="md:container md:mx-auto mt-20">

                <h3 >{Greeting}</h3>
                {loading ? <Loading/> :
                <ItemList prods={prods}  />
                }

            </div>


    );
};

export default ItemListContainer;
