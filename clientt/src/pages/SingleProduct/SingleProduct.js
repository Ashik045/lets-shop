/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import FooterDetail from '../../component/FooterDetail/FooterDetail';
import NewsLetter from '../../component/Newsletter/Newsletter';
import item2 from '../../image/item2-removebg-preview.png';
import './singleproduct.css';

const SingleProduct = () => {
    const [selectColorVal, setSelectColorVal] = useState('');
    const [selectSizeVal, setSelectSizeVal] = useState('');
    const [itemVal, setItemVal] = useState(1);

    useEffect(() => {
        const selectData = {
            selectColorVal,
            selectSizeVal,
        };
        console.log(selectData);
    }, [selectColorVal, selectSizeVal]);

    const decrease = () => {
        setItemVal(itemVal - 1);
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
                        <img src={item2} alt="a" />
                    </div>

                    <div className="right_side">
                        <h3 className="product_title">Lehenga</h3>
                        <div className="product_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                            doloribus commodi ipsum voluptate illum eum pariatur quam at. Quod
                            corrupti placeat modi reiciendis! Vitae quia veritatis sit dolorem
                            libero unde. Debitis dolor reiciendis quos et tenetur laboriosam alias
                            velit doloremque.
                        </div>
                        <h4 className="product_price">$25</h4>

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
                                    <option disabled>Color</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Red">Red</option>
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
                                    <option disabled>Size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
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
