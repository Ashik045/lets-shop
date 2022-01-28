import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ details }) => (
    <div className="cardd">
        <img src={details.image} alt="s" />

        <h3>{details.title}</h3>
        <Link to={`/products/${details.cat}`}>
            <button type="button" className="shop_btn">
                Shop now
            </button>
        </Link>
    </div>
);

export default Card;
