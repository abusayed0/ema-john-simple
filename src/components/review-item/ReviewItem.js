import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product,handleRemoveItem }) => {
    const {id, img, name, price, quantity, shipping } = product;

    return (
        <div className="review-item">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="details-container">
                <div className="details">
                    <p>{name}</p>
                    <p>Price : ${price}</p>
                    <p>Shiping : ${shipping}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div className="delete-btn">
                    <button className="btn-delete" onClick={()=>handleRemoveItem(id)}>

                        <FontAwesomeIcon icon={faTrash} className="delete-icon"></FontAwesomeIcon>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ReviewItem;