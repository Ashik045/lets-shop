/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FooterDetail from '../../component/FooterDetail/FooterDetail';
import Newsletter from '../../component/Newsletter/Newsletter';
import Products from '../../component/Products/Products';
import './ProductList.css';

const ProductList = () => {
    const [filterVal, setFilterVal] = useState({});
    const [sortVal, setSortVal] = useState('recent');
    const location = useLocation();
    const category = location.pathname.split('/')[2];

    const handleFilter = (e) => {
        setFilterVal({
            ...filterVal,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="main_productlist">
            <h5 className="list_header">Super offer! Free shoping on orders over $550</h5>
            <div className="topgap">
                <Newsletter />
            </div>
            <div className="productlist_sec container">
                <h2>Choose your product</h2>
                <div className="product_list">
                    <form className="form_sec">
                        <div className="list_left">
                            <label htmlFor="sort" className="label">
                                Sort Products:
                            </label>

                            <select onChange={(e) => setSortVal(e.target.value)} className="select">
                                <option value="recent">Recent</option>
                                <option value="lower">Price(lower)</option>
                                <option value="high">Price(high)</option>
                            </select>
                        </div>

                        <div className="list_right">
                            <label htmlFor="filter" className="label">
                                Filter Products:
                            </label>
                            <select name="color" onChange={handleFilter} className="select">
                                <option disabled>Color</option>
                                <option>black</option>
                                <option>white</option>
                                <option>blue</option>
                                <option>yellow</option>
                                <option>red</option>
                            </select>

                            <select name="size" onChange={handleFilter} className="select">
                                <option disabled>Size</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <Products header="Your Products" cat={category} filters={filterVal} sort={sortVal} />
            <FooterDetail />
        </div>
    );
};

export default ProductList;
