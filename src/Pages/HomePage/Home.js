import React from 'react';
import Footer from '../SharedPages/Footer';
import NavBar from '../SharedPages/NavBar';
import CartInfo from './BusinessSummery/CartInfo';
import CaroselBanner from './CaroselBanner';
import Components from './Components';
import Gaming from './Extra/Gaming';
import PCBuild from './Extra/PCBuild';
import HomeReview from './Review/HomeReview';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CaroselBanner></CaroselBanner>
            <Components></Components>
            <CartInfo></CartInfo>
            <PCBuild></PCBuild>
            <HomeReview></HomeReview>
            <Gaming></Gaming>
            <Footer></Footer>


        </div>
    );
};

export default Home;