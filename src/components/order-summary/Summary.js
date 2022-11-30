import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './Summary.css'
const Summary = (props) => {
    const { totalAdded,setTotalAdded} = props;
    // console.log(totalAdded)
    let totalPrice=0
    let totalShipping=0;
    let selected=0;
    for (const product of totalAdded) {
        
            selected+=product.quantity;
            totalPrice+=product.quantity*product.price;
            totalShipping+=product.shipping * product.quantity;
       
    }
    let totalTax=totalPrice*0.1;
    totalTax=totalTax.toFixed(2);
    const grandTotal=totalPrice + totalShipping + parseFloat(totalTax);
    const clearCart=()=>{
        setTotalAdded([]);
        deleteShoppingCart();
    }
    return (
        <div className="cart-summary">
            <h3 className="cart-header">Order Summary</h3>
            <div>
                <p className="text">Selected items : {selected}</p>
                <p className="text">Total Price : ${totalPrice}</p>
                <p className="text">Total Shipping Charge : ${totalShipping}</p>
                <p className="text">Tax : ${totalTax}</p>
                <h4 className="text">Grand Total : ${grandTotal.toFixed(2)}</h4>
            </div>
            <div className="cart-btn-container">
                <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                <button className="review-btn">Review Order</button>
            </div>
        </div>
    );
};

export default Summary;