import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ItemDetail from "../itemDetail/itemDetail";
import {getFetch} from "../../helpers/getFetch";
import Loading from "../loading/loading";

const ItemDetailContainer = () => {
    const {id} = useParams()


    const [loading, setLoading] = useState(true);
    const [prods, setprods] = useState([]);

    useEffect(() => {
        if (id) {
            getFetch
                .then(resp => setprods(resp.filter(prods => prods.id === parseInt(id))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id])

    return (
        <div className="md:container md:mx-auto mt-20">
            {loading ? <Loading/> :
                prods.map((prods) =>
                    <div key={prods.id}>
                        <ItemDetail item={prods}/>
                    </div>
                )

            }
        </div>
    );
};

export default ItemDetailContainer;
