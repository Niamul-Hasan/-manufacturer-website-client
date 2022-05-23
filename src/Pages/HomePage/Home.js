import React from 'react';
import NavBar from '../SharedPages/NavBar';
import CartInfo from './BusinessSummery/CartInfo';
import CaroselBanner from './CaroselBanner';
import Components from './Components';
import HomeReview from './Review/HomeReview';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CaroselBanner></CaroselBanner>
            <Components></Components>
            <CartInfo></CartInfo>
            <HomeReview></HomeReview>


        </div>
    );
};

export default Home;