import React from 'react';
import { useParams } from 'react-router-dom';

const HomeUpdate = () => {
    const { id } = useParams();

    return (
        <div>
            <span>You have clicked: {id}</span>
        </div>
    );
};

export default HomeUpdate;