import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";


import Loading from "../../components/loading/loading";
import ItemDetail from "../../components/itemDetail/itemDetail";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState({})

    const {id} = useParams()


    useEffect(()=> {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', id)

        getDoc(queryDoc)
            .then(prod => setProds( {id: prod.id, ...prod.data()} ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

    },[id])


    return (
        <div className="md:container md:mx-auto mt-28">
            {loading ? <Loading/> :

                    <div key={prods.id}>
                        <ItemDetail item={prods}/>
                    </div>

            }
        </div>
    );
};

export default ItemDetailContainer;
