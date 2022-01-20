import React from 'react';
import { ProductDetails } from '../../Data';
import Product from '../Product/Product';
import './products.css';

const Products = ({ header }) => (
    <div className="container product_sec" id="products">
        <h2>{header}</h2>
        <div className="product_items">
            {ProductDetails.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default Products;
