import Loading from "../../components/loading/loading";
import {useEffect, useState} from "react";
import {collection, getDocs, getFirestore,where,query} from 'firebase/firestore'
import ItemList from "../../components/itemList/itemList";
import {useParams} from "react-router";


const ItemListContainer = ({Greeting}) => {

    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        if(id){
            const queryFilter = query(queryCollection,
              where('category','==',id)
            )
            getDocs(queryFilter)
                .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))

        }else {
            getDocs(queryCollection)
                .then(resp => setProds(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id])


    return (

        <div className="md:container md:mx-auto mt-28">

            <h3 className="text-2xl m-10">{Greeting ? Greeting: `Categoría ${id}` }</h3>
            {loading ? <Loading/> :
                <ItemList prods={prods}/>
            }

        </div>


    );
};

export default ItemListContainer;
