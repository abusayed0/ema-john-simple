import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import BtnReview from '../btn-review/BtnReview';
import Summary from '../order-summary/Summary';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const {products,initialCart} = useLoaderData();
    const [totalAdded, setTotalAdded] = useState(initialCart);


    const clearCart=()=>{
        setTotalAdded([]);
        deleteShoppingCart();
    }
    // load added data from local storage 
    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     let savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProductInCart = products.find(product => product.id === id);
    //         if (addedProductInCart) {
    //             const quantity = storedCart[id];
    //             addedProductInCart.quantity = quantity;
    //             savedCart.push(addedProductInCart);
    //         }
    //     }
    //     setTotalAdded(savedCart)
    // }, [products])

    // handler for add product in cart 
    const addInCart = addedProduct => {
        const check = totalAdded.find(everyProduct => everyProduct.id === addedProduct.id);
        if (check) {
            const restProduct = totalAdded.filter(pro => pro.id !== addedProduct.id);
            check.quantity += 1;
            setTotalAdded([...restProduct, check])
        }
        else {
            addedProduct.quantity = 1;
            setTotalAdded([...totalAdded, addedProduct])
        }
        addToDb(addedProduct.id);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product}
                        key={product.id}
                        addInCart={addInCart}
                    ></Product>)
                }
            </div>
            <div className="order-summary">
                <Summary
                    totalAdded={totalAdded}
                    clearCart={clearCart}
                >
                    <BtnReview></BtnReview>
                </Summary>
            </div>
        </div>
    );
};

export default Shop;



// const addedOne={...addedProduct};
        // addedOne.quantity=1;
        // const newProducts = [...totalAdded, addedOne]
        // setTotalAdded(newProducts);