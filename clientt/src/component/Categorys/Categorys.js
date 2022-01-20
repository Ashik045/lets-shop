import React from 'react';
import { CategoryDetails } from '../../Data';
import Category from '../Category/Category';
import './categorys.css';

const Categorys = () => (
    <div className="categorys container" id="category">
        <div className="category_item">
            {CategoryDetails.map((details) => (
                <Category key={details.id} details={details} />
            ))}
        </div>
    </div>
);

export default Categorys;
