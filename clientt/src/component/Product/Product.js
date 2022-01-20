import React from 'react';
import { BiCart, BiHeart, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './product.css';

const Product = ({ item }) => (
    <div className="single_product">
        <div className="img_sec">
            <img src={item.image} alt="img" />
        </div>

        <div className="product_icons">
            <div className="product_icon">
                <Link to="/productlist">
                    <BiSearch className="icons" />
                </Link>
                <BiCart className="icons middle" />
                <BiHeart className="icons" />
            </div>
        </div>
    </div>
);

export default Product;
