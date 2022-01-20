import Carousel from 'nuka-carousel';
import React from 'react';
import { ServiceDetails } from '../../Data';
import './servicecard.css';

// EffectCards
const ServiceCard = () => (
    <div className="detail_card">
        <Carousel cellSpacing={20} className="carousel_card">
            {ServiceDetails.map((details) => (
                <div key={details.id}>
                    <h3>{details.title}</h3>
                    <p>{details.text}</p>
                </div>
            ))}
        </Carousel>
    </div>
);

export default ServiceCard;
