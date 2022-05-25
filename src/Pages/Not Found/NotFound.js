import React from 'react';
import img from '../../Asset/404-error.png';
import NavBar from '../SharedPages/NavBar';

const NotFound = () => {
    return (
        <div>
            <NavBar></NavBar>
            <img src={img} className="mx-auto mt-12" alt="" />
        </div>
    );
};

export default NotFound;