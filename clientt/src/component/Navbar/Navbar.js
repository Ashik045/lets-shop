/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import brand from '../../image/brand.png';
import noPhoto from '../../image/no-photo.png';
import './navbar.css';

const Navbar = () => {
    const [user, setUser] = useState(false);
    const [toggler, setToggler] = useState(true);

    return (
        <div className="navbar">
            <Link to="/">
                <div className="brand">
                    <img src={brand} alt="" />
                    {/* <h2>Shopify</h2> */}
                </div>
            </Link>

            <div className="nav_menu">
                <a className="nav_item" href="#products">
                    Product
                </a>
                <a className="nav_item" href="#services">
                    Services
                </a>
                <a className="nav_item" href="#category">
                    Category
                </a>
                <a className="nav_item" href="#contact">
                    Contact
                </a>
            </div>

            <div className="user_login">
                {user ? (
                    <>
                        <img src={noPhoto} alt="" />
                        <button type="button" className="logout regBtn">
                            Log Out
                        </button>
                    </>
                ) : (
                    <Link to="/login">
                        <button type="button" className="logoin regBtn ms-3">
                            Log in
                        </button>
                    </Link>
                )}

                <Link to="/cart">
                    <button type="button" className="position-relative batch_btn ms-sm-4">
                        <FaCartPlus size={22} className="cart_shop" />

                        <span className="position-absolute mt-1 top-0 start-110 translate-middle badge rounded-pill bg-info batch_pill">
                            3
                        </span>
                    </button>
                </Link>
            </div>

            <div className="res_navbar">
                {toggler ? (
                    <BiMenu onClick={() => setToggler(false)} size={29} />
                ) : (
                    <BiX onClick={() => setToggler(true)} size={29} />
                )}
                {!toggler && (
                    <div className="res_nav_menu">
                        <a onClick={() => setToggler(true)} className="nav_item" href="#products">
                            Product
                        </a>
                        <a onClick={() => setToggler(true)} className="nav_item" href="#services">
                            Services
                        </a>
                        <a onClick={() => setToggler(true)} className="nav_item" href="#category">
                            Category
                        </a>
                        <a onClick={() => setToggler(true)} className="nav_item" href="#contact">
                            Contact
                        </a>

                        <div className="res_user_login">
                            {user ? (
                                <>
                                    <button type="button" className="logout regBtn">
                                        Log Out
                                    </button>
                                </>
                            ) : (
                                <Link to="/login">
                                    <button type="button" className="logoin regBtn ">
                                        Log in
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
