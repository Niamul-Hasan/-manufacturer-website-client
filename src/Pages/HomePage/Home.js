import React from 'react';
import NavBar from '../SharedPages/NavBar';
import CaroselBanner from './CaroselBanner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CaroselBanner></CaroselBanner>
            <Tools></Tools>


        </div>
    );
};

export default Home;