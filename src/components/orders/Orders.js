import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Summary from '../order-summary/Summary';
import ReviewItem from '../review-item/ReviewItem';

const Orders = () => {
    const {initialCart}=useLoaderData();
    const [cart,setCart]=useState(initialCart)
    const handleRemoveItem=id=>{
        const remaining=cart.filter(product=>product.id !== id);
       setCart(remaining)
       removeFromDb(id)
    }
    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className="shop-container">
            <div className="orders-container">
                {
                    cart.map(product=><ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    >
                    </ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No item for review.Please <Link to={"/"}>shop</Link></h2>
                }
            </div>
            <div className="order-summary">
                
                <Summary 
                totalAdded={cart}
                clearCart={clearCart}
                 ></Summary>
            </div>
            
           
        </div>
    );
};

export default Orders;