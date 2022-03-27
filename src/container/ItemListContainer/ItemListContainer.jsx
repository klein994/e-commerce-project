import Loading from "../../components/loading/loading";
import {useEffect, useState} from "react";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'
import ItemList from "../../components/itemList/itemList";
import { useCartContext } from "../../context/CartContext"

const ItemListContainer = ({Greeting}) => {
    const [bool, setBool] = useState(true)
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState([])
    const [prod, setProd ] = useState({})

    useEffect(() => {
        const db = getFirestore()
            const queryCollection =  collection(db, 'productos' )
                getDocs(queryCollection)
                .then(resp => setProds( resp.docs.map(prod =>( {id: prod.id, ...prod.data()}) ) ) )
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))

    }, [])


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
