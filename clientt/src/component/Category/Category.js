import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import './category.css';

const Category = ({ details }) => (
    <div className="cate_card">
        <div className="singular">
            <h4>
                {details.title}
                <BiRightArrowAlt className="icon" />
            </h4>
            <p>{details.text}</p>

            <img src={details.image} alt="" />
        </div>
    </div>
);

export default Category;
