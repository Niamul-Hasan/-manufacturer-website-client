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


            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Customer Email</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">{order.product}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{order.email}</td>
                                <td>${order.duePrice}</td>
                                <td>
                                    {(order.duePrice && !order.paid) && <p><span className='text-red-500'> Not Paid</span></p>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-red-500 border-0 text-black'>Cancel</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;