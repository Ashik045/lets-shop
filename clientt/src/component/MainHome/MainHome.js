import React from 'react';
import CardDetail from '../CardDetail/CardDetail';
import Categorys from '../Categorys/Categorys';
import FooterDetail from '../FooterDetail/FooterDetail';
import Header from '../Header/Header';
import Newsletter from '../Newsletter/Newsletter';
import Products from '../Products/Products';
import Services from '../Services/Services';

const MainHome = () => (
    <div>
        <Header />
        <CardDetail />
        <Products header="Some of our product are hare" />
        <Services />
        <Categorys />
        <Newsletter />
        <FooterDetail />
    </div>
);

export default MainHome;
