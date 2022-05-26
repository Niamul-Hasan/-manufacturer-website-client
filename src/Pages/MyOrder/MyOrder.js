import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedPages/Loading';
import NavBar from '../SharedPages/NavBar';
import PlaceOrder from './PlaceOrder';


const MyOrder = () => {
    const { id } = useParams();
    //using react-query
    const { data: tools, isLoading } = useQuery(['tools', id], () => fetch(`https://young-crag-95618.herokuapp.com/tools/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }





    return (
        <div>
            <NavBar></NavBar>
            <PlaceOrder
                key={tools._id}
                tools={tools}
            ></PlaceOrder>

        </div>
    );
};

export default MyOrder;