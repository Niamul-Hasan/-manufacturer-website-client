import React from 'react';
import NavBar from '../SharedPages/NavBar';
import CaroselBanner from './CaroselBanner';
import Components from './Components';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CaroselBanner></CaroselBanner>
            <Components></Components>


        </div>
    );
};

export default Home;