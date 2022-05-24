import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedPages/Loading';

const MyOrder = () => {
    const { id } = useParams();
    //using react-query
    const { data: tools, isLoading } = useQuery(['tools', id], () => fetch(`http://localhost:4000/tools/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(tools);

    return (
        <div>
            <h2 className='text-4xl text-teal-500 text-center'>Your Product ID : <span
                className='text-purple-500'
            >{id}</span></h2>

            <div class="hero min-h-screen bg-base-200 w-3/4 mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={tools.img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;