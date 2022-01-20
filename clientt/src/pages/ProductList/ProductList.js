/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import FooterDetail from '../../component/FooterDetail/FooterDetail';
import Newsletter from '../../component/Newsletter/Newsletter';
import Products from '../../component/Products/Products';
import './ProductList.css';

const ProductList = () => {
    const [selectColorVal, setSelectColorVal] = useState('');
    const [selectSizeVal, setSelectSizeVal] = useState('');
    const [selectPriceVal, setSelectPriceVal] = useState('');

    useEffect(() => {
        const selectData = {
            selectColorVal,
            selectSizeVal,
            selectPriceVal,
        };
        console.log(selectData);
    }, [selectColorVal, selectSizeVal, selectPriceVal]);

    return (
        <div className="main_productlist">
            <h5 className="list_header">Super offer! Free shoping on orders over $50</h5>
            <div className="topgap">
                <Newsletter />
            </div>
            <div className="productlist_sec container">
                <h2>Choose your product</h2>
                <div className="product_list">
                    <form className="form_sec">
                        <div className="list_left">
                            <label htmlFor="color" className="label">
                                Sort Products:
                            </label>

                            <select
                                value={selectPriceVal}
                                onChange={(e) => setSelectPriceVal(e.target.value)}
                                className="select"
                            >
                                <option value="Recent">Recent</option>
                                <option value="Price (low)">Price (low)</option>
                                <option value="Price (high)">Price (high)</option>
                            </select>
                        </div>

                        <div className="list_right">
                            <label htmlFor="color" className="label">
                                Filter Products:
                            </label>
                            <select
                                value={selectColorVal}
                                onChange={(e) => setSelectColorVal(e.target.value)}
                                className="select"
                            >
                                <option disabled>Color</option>
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Blue">Blue</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Red">Red</option>
                            </select>

                            <select
                                value={selectSizeVal}
                                onChange={(e) => setSelectSizeVal(e.target.value)}
                                className="select"
                            >
                                <option disabled>Size</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <Products header="Your products" />
            <FooterDetail />
        </div>
    );
};

export default ProductList;
