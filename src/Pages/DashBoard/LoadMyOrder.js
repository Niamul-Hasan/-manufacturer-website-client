import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { MdOutlineCancel } from 'react-icons/md';

const LoadMyOrder = () => {
    const [myorders, setMyorders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/myorder?email=${user.email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {

                    setMyorders(data)
                });
        }
    }, [user, navigate])
    return (
        <div>
            <h2 className='text-xl text-purple-600'>My Orders: <span className='text-3xl text-orange-500'
            >{myorders.length}</span></h2>

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
                            myorders.map((order, index) => <tr key={order._id}>
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
                                    {(order.unitPrice && !order.paid) && <Link to={`/dash/payment/${order._id}`}><button class="btn btn-xs btn-success">Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                                <td>
                                    <button className='btn btn-xs bg-red-500 border-0 text-black'>Cancel < MdOutlineCancel /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoadMyOrder;