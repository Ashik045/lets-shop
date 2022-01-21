import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './cart.css';

const Cart = ({ details }) => {
    const { image, name, id, size, color, price } = details;
    const [itemVal, setItemVal] = useState(1);
    const [totalItemVal, setTotalItemVal] = useState(price);

    const decrease = () => {
        setItemVal(itemVal - 1);
        setTotalItemVal(totalItemVal - price);
    };

    const increase = () => {
        setItemVal(itemVal + 1);
        setTotalItemVal(totalItemVal + price);
    };

    return (
        <div className="cart_single">
            <div className="single_cart">
                <div className="product">
                    <img src={image} alt="s" />
                    <h6>
                        <b>Product: </b>
                        {name}
                    </h6>
                    <h6>
                        <b>Id: </b>
                        {id}
                    </h6>
                    <h6>
                        <b>Size: </b>
                        {size}
                    </h6>
                    <h6>
                        <b>Color: </b>
                        {color}
                    </h6>
                </div>

                <div className="price">${price}</div>

                <div className="item">
                    <FaMinus onClick={decrease} className="plus_minus" />
                    <span onChange={(e) => setItemVal(e.target.value)}>{itemVal}</span>
                    <FaPlus onClick={increase} className="plus_minus" />
                </div>

                <div className="total">${totalItemVal}</div>
            </div>
            <hr />
        </div>
    );
};
export default Cart;
