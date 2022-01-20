import React from 'react';
import quote from '../../image/quote1-removebg-preview.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const Services = () => (
    <div className="services_sec container" id="services">
        <h2>Services we provide</h2>

        <div className="main_service">
            <div className="left_side" data-aos="fade-right" data-aos-duration="1000">
                <p>
                    Shopify has been an absolute dream to work with - our platform is simple and
                    easy to use, it is risk-free, and our products are excellent quality. Shopify is
                    trusted by thousands of organizations, businesses and individuals. In addition,
                    our support team is always ready to prompt and help our customers.
                </p>
                <img src={quote} alt="s" className="img1" />
                <img src={quote} alt="s" className="img2" />
            </div>

            <div className="right_side" data-aos="fade-left" data-aos-duration="1000">
                <ServiceCard />
            </div>
        </div>
    </div>
);

export default Services;
