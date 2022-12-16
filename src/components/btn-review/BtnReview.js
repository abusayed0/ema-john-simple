import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BtnReview.css'
const BtnReview = () => {
    const navigate= useNavigate();
    return (
            <button className="review-btn" onClick={()=>navigate("/orders")}>Review Order</button>
    );
};

export default BtnReview;