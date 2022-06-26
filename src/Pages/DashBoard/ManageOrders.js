import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import DeleteManageOrders from './DeleteManageOrders';

const ManageOrders = () => {

    const [deleteOrder, setDeleteOrder] = useState(null);

    const [status, setStatus] = useState(false);
    const handleStatus = id => {
        setStatus(true);
    }

    const { data: allOrders, isLoading, refetch } = useQuery('orders', () => fetch('https://young-crag-95618.herokuapp.com/orders', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

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
                                    {(order.duePrice && order.paid) && <div>
                                        <p><span className={`font-bold + ${status ? "text-success" : "text-warning"}`}>{status ? 'Shiped' : 'Pending'}</span></p>


                                    </div>}
                                </td>
                                <td>
                                    {order.paid ? <button disabled={status} onClick={() => handleStatus(index)} className='btn btn-xs btn-secondary'>Change status</button>
                                        : <label onClick={() => setDeleteOrder(order)} for="delete-manage" class="btn btn-xs btn-error">Cancel</label>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteManageOrders
                refetch={refetch}
                deleteOrder={deleteOrder}
                setDeleteOrder={setDeleteOrder}
            ></DeleteManageOrders>}
        </div>
    );
};

export default ManageOrders;