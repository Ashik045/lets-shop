import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FooterDetail from '../../component/FooterDetail/FooterDetail';
import item2 from '../../image/item2-removebg-preview.png';
import item4 from '../../image/item5-removebg-preview.png';
import Cart from '../Cart/Cart';
import './carts.css';

const cartDetails = [
    {
        id: 13986533,
        image: item2,
        name: 'LEHENGA FOR WOMAN',
        size: 'XL',
        price: 30,
        color: 'White',
    },
    {
        id: 10086513,
        image: item4,
        name: 'SHOES',
        size: '37',
        price: 40,
        color: 'black & yellow',
    },
    {
        id: 108886513,
        image: item4,
        name: 'SHOES',
        size: '37',
        price: 40,
        color: 'black & yellow',
    },
];

const Carts = () => (
    <div className="carts_page">
        <div className="main_page container">
            <h2>your cart</h2>

            <div className="carts_header">
                <div className="header_left">
                    <Link to="/">
                        <button type="button" className="carts_btn">
                            <FaArrowLeft className="left_arrow" /> CONTINUE SHOPPING
                        </button>
                    </Link>
                </div>

                <h6 className="header_middle">Shopping Bag(2)</h6>

                <div className="header_right">
                    <button type="button" className="carts_btn">
                        CHECKOUT NOW <FaArrowRight className="right_arrow" />
                    </button>
                </div>
            </div>

            <div className="carts">
                <div className="single_cart_header">
                    <h6>PRODUCT</h6>
                    <h6>PRICE</h6>
                    <h6>ITEM</h6>
                    <h6>TOTAL</h6>
                </div>
                {cartDetails.map((details) => (
                    <Cart key={details.id} details={details} />
                ))}
            </div>
        </div>
        <FooterDetail />
    </div>
);

export default Carts;
