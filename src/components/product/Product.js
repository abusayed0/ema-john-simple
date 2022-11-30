import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{addInCart,product}=props;
    const { category, img, price, name, seller, ratings, ratingsCount, stock } = product;
    return (
        <div className="card">
            <div className="card-item">
                <img src={img} alt="" className="card-img"/>
                <h3>{name}</h3>
                <h4>Price : ${price}</h4>
            </div>
            <div>
                <p className="card-item">Category : {category}</p>
                <p className="card-item">Brand : {seller}</p>
                <p className="card-item">Ratings : {ratings} star</p>
                <button onClick={()=>addInCart(product)} className="add-to-cart">Add To Cart <FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
        </div>
    );
};

export default Product;