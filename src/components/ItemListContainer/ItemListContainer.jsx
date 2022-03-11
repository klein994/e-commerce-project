import React from 'react';
import ItemCount from "../itemCount/itemCount";
import PromiseProducts from "../promise/promiseProducts";
import ItemList from "../itemList/itemList";

const ItemListContainer = ({Greeting}) => {
    return (

            <div className="md:container md:mx-auto mt-20">
                <div className="mt-20">.</div>
                <h3 >{Greeting}</h3>
                <ItemList />
            </div>


    );
};

export default ItemListContainer;
