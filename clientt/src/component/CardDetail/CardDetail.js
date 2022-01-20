import React from 'react';
import style1 from '../../image/style1.jpg';
import style2 from '../../image/style2.jpg';
import style3 from '../../image/style3.jpg';
import Card from '../Card/Card';
import './CardDetail.css';

const Cdetails = [
    {
        id: 1,
        title: 'SHIRT STYLE',
        image: style1,
    },
    {
        id: 2,
        title: 'DRESS STYLE',
        image: style2,
    },
    {
        id: 3,
        title: 'SHIRT STYLE',
        image: style3,
    },
];

const CardDetail = () => (
    <div className="container card_detail">
        <div className="cards">
            {Cdetails.map((details) => (
                <Card key={details.id} details={details} />
            ))}
        </div>
    </div>
);

export default CardDetail;
