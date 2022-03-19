import React from 'react';
import Item from "../item/iten";


const ItemList = ({prods}) => {


    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-4">

            {
                prods.map((prod) =>
                    <div key={prod.id}>
                        <Item products={prod}/>
                    </div>
                )
            }
        </div>
    );
}


export default ItemList;
