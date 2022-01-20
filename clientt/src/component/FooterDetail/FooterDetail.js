/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BiMailSend, BiMap, BiPhoneCall } from 'react-icons/bi';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import brand from '../../image/brand.png';
import Footer from '../Footer/Footer';
import './footerdetail.css';

const FooterOne = [
    {
        id: 1,
        title: 'Sell shirts online',
    },
    {
        id: 2,
        title: 'Start a fundraiser',
    },

    {
        id: 3,
        title: 'Order custom shirts',
    },

    {
        id: 4,
        title: 'For creators',
    },
    {
        id: 5,
        title: 'YouTube creators',
    },
    {
        id: 6,
        title: 'Online stores',
    },
    {
        id: 7,
        title: 'Log In',
    },
    {
        id: 8,
        title: 'Track my order',
    },
];

const FooterTwo = [
    {
        id: 1,
        title: 'Help center',
    },
    {
        id: 22,
        title: 'Design templates',
    },

    {
        id: 23,
        title: 'Request custom design',
    },

    {
        id: 24,
        title: 'Product catalog',
    },
    {
        id: 25,
        title: 'Pricing calculator',
    },
    {
        id: 26,
        title: 'Blog',
    },
    {
        id: 27,
        title: 'Stories',
    },
];

const FooterThree = [
    {
        id: 1,
        title: 'About',
    },
    {
        id: 2,
        title: 'Careers',
    },

    {
        id: 3,
        title: 'Contact',
    },

    {
        id: 4,
        title: 'Privacy',
    },
    {
        id: 5,
        title: 'Terms',
    },
];

const rightDetail = [
    {
        id: 1,
        icon: <BiMap />,
        text: 'Rangpur, Bangladesh',
    },
    {
        id: 2,
        icon: <BiPhoneCall />,
        text: '01710502483',
    },
    {
        id: 3,
        icon: <BiMailSend />,
        text: 'ashikurislam045@gmail.com',
    },
];

const FooterDetail = () => (
    <div className="footerDetail">
        <div className="footer_det container">
            <div className="left_sec">
                <img src={brand} alt="" />
                <p style={{ padding: '0px 10px' }}>
                    Where the world goes for premium custom shirts
                </p>

                <div className="icon_sec">
                    <Link to="//twitter.com">
                        <FaTwitter className="s_icon" size={30} />
                    </Link>
                    <Link to="//facebook.com">
                        <FaFacebook className="s_icon" size={30} />
                    </Link>
                    <Link to="//instagram.com">
                        <FaInstagram className="s_icon" size={30} />
                    </Link>
                    <Link to="//google.com">
                        <FaGoogle className="s_icon" size={30} />
                    </Link>
                </div>
            </div>
            <div className="single_footer">
                <Footer footerItem={FooterOne} footerTitle="USING SHOPIFY" />
                <Footer footerItem={FooterTwo} footerTitle="RESOURCES" />
                <Footer footerItem={FooterThree} footerTitle="COMPANY" />
            </div>
            <div className="right_sec">
                <p className="r_head">Find us</p>

                {rightDetail.map((detail) => (
                    <div key={detail.id} className="contact">
                        <span className="icon">{detail.icon}</span>
                        <span>{detail.text}</span>
                    </div>
                ))}

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.03760587871!2d89.22702572289867!3d25.749834262194017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1642404301165!5m2!1sen!2sbd"
                    width="100%"
                    height="auto"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>
        </div>

        <p style={{ textAlign: 'center', paddingBottom: '10px', color: 'rgb(145, 141, 141)' }}>
            @copyright 2022
        </p>
    </div>
);

export default FooterDetail;
