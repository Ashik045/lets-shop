/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css';

const Products = ({ header, cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:4000/api/products?category=${cat}`
                        : 'http://localhost:4000/api/products'
                );
                setProducts(res.data.message);
            } catch {
                console.log('can not find product');
            }
        };

        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilterProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) => item[key].includes(value))
                )
            );
    }, [cat, filters, products]);

    useEffect(() => {
        // 33 min
        if (sort === 'recent') {
            setFilterProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (sort === 'high') {
            setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
        console.log(sort);
    }, [sort]); // 33 min

    return (
        <div className="container product_sec" id="products">
            <h2>{header}</h2>
            <div className="product_items">
                {cat
                    ? filterProducts.map((item) => <Product key={item._id} item={item} />)
                    : products.map((item) => <Product key={item._id} item={item} />)}
            </div>
        </div>
    );
};

export default Products;
