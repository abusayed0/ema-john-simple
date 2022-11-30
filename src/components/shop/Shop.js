import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Summary from '../order-summary/Summary';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [totalAdded, setTotalAdded] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => { setProducts(data) })
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart=[];
        for (const id in storedCart) {
            const addedProductInCart = products.find(product => product.id === id);
            if(addedProductInCart){
                const quantity=storedCart[id];
                addedProductInCart.quantity=quantity;
                savedCart.push(addedProductInCart);
            }
        }
        setTotalAdded(savedCart)
    }, [products])
    
    const addInCart = addedProduct => {
        const check = totalAdded.find(everyProduct=>everyProduct.id===addedProduct.id);
        if(check){
            const restProduct=totalAdded.filter(pro=>pro.id !==addedProduct.id);
            check.quantity+=1;
            setTotalAdded([...restProduct,check])
        }
        else{
            addedProduct.quantity=1;
            setTotalAdded([...totalAdded,addedProduct])
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
                    setTotalAdded={setTotalAdded}
                >
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