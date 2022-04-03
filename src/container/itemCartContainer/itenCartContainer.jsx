import React from 'react';
import Loading from "../../components/loading/loading";
import ItemDetail from "../../components/itemDetail/itemDetail";
import Cart from "../../components/cart/cart";

const ItenCartContainer = () => {
    return (
        <div>
            <div className="md:container md:m-auto  mt-28">
              <Cart/>
            </div>
        </div>
    );
};

export default ItenCartContainer;
