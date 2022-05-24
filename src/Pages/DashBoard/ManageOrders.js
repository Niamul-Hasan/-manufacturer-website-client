import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';

const ManageOrders = () => {
    const { data: allOrders, isLoading } = useQuery('orders', () => fetch('http://localhost:4000/orders')
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl text-center">Orders Length:{allOrders.length}</h2>

            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageOrders;