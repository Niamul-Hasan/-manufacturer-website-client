import React from 'react';
import NavBar from '../SharedPages/NavBar';
import CartInfo from './BusinessSummery/CartInfo';
import CaroselBanner from './CaroselBanner';
import Components from './Components';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CaroselBanner></CaroselBanner>
            <Components></Components>
            <CartInfo></CartInfo>


        </div>
    );
};

export default Home;