/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import FooterDetail from '../../component/FooterDetail/FooterDetail';
import NewsLetter from '../../component/Newsletter/Newsletter';
import './singleproduct.css';

const SingleProduct = () => {
    const [selectColorVal, setSelectColorVal] = useState('');
    const [selectSizeVal, setSelectSizeVal] = useState('');
    const [itemVal, setItemVal] = useState(1);
    const [product, setProduct] = useState({});
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`http://localhost:4000/api/products/find/${id}`);

            console.log(res.data.message);
            setProduct(res.data.message);
        };

        getProducts();
    }, [id]);

    useEffect(() => {
        const selectData = {
            selectColorVal,
            selectSizeVal,
        };
        console.log(selectData);
    }, [selectColorVal, selectSizeVal]);

    const decrease = () => {
        itemVal > 1 && setItemVal(itemVal - 1);
    };

    const increase = () => {
        setItemVal(itemVal + 1);
    };

    return (
        <div className="singleProduct">
            <h5 className="list_header">Super offer! Free shoping on orders over $50</h5>

            <div className="singleProduct_main container">
                <div className="singleProduct_main2">
                    <div className="left_side">
                        <img src={product.image} alt="a" />
                    </div>

                    <div className="right_side">
                        <h3 className="product_title">{product.title}</h3>
                        <div className="product_text">{product.desc}</div>
                        <h4 className="product_price">{product.price}</h4>

                        <form className="form_sec">
                            <div className="list_left">
                                <label htmlFor="color" className="label">
                                    Color :
                                </label>
                                <select
                                    value={selectColorVal}
                                    onChange={(e) => setSelectColorVal(e.target.value)}
                                    className="select ms-sm-3 ms-1"
                                >
                                    {product.color?.map((c) => (
                                        <option key={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="list_right">
                                <label htmlFor="color" className="label">
                                    Size :
                                </label>
                                <select
                                    value={selectSizeVal}
                                    onChange={(e) => setSelectSizeVal(e.target.value)}
                                    className="select ms-1 ms-sm-3"
                                >
                                    {product.size?.map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                        </form>

                        <div className="purses_sec">
                            <div className="lefft">
                                <FaMinus onClick={decrease} className="plus_minus" />
                                <span onChange={(e) => setItemVal(e.target.value)}>{itemVal}</span>
                                <FaPlus onClick={increase} className="plus_minus" />
                            </div>

                            <button type="button" className="addto_cart">
                                ADD TO CARD
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <NewsLetter />
            <FooterDetail />
        </div>
    );
};

export default SingleProduct;
