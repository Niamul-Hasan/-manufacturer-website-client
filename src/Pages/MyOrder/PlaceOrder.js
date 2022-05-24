import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const PlaceOrder = ({ tools }) => {
    const { _id, name, available, minimum, price, img, about } = tools;
    const init = parseInt(minimum);
    const [count, setCount] = useState(init);

    const [user] = useAuthState(auth);
    const unitPrice = parseInt(price);
    const quantityRef = useRef();

    const handlePlaceOrder = (orderId) => {
        const quantity = quantityRef.current.value;
        const myOrder = {
            productId: orderId,
            img: img,
            product: name,
            customer: user?.displayName,
            email: user?.email,
            unitPrice: price,
            quantity: quantity,
            duePrice: unitPrice * quantity
        }

        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myOrder)
        }).then(res => res.json()).then(data => {
            console.log(data)
        });
        toast.success('Your Order is placed')
    }


    return (
        <div>
            <h2 className='text-4xl text-teal-500 text-center'>Your Product ID : <span
                className='text-purple-500'
            >{_id}</span></h2>
            <div class="hero min-h-screen bg-base-200 w-3/4 mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{name}</h1>
                        <p class="pt-6">{about}</p>
                        <p class="text-orange-500 pt-3 text-xl font-bold">Unit Price: ${price}</p>
                        <p class="text-teal-500">Available Stock: {available}</p>
                        <p class="text-teal-800">Minimum Order: {minimum}</p>
                        <br />
                        <label className="label">
                            <span className="label-text text-xl font-bold text-orange-500">Your Quantity</span>
                        </label>
                        <button
                            onClick={() => {
                                if (count > minimum) {
                                    setCount(count - 1);
                                }
                                return
                            }}
                            class="btn btn-sm btn-secondary text-lg mr-2"><FaMinusCircle /></button>
                        <input type="number" value={count} ref={quantityRef}
                            class="input input-bordered input-primary text-center text-xl w-24" />
                        <button
                            onClick={() => {
                                if (count < available) {
                                    setCount(count + 1);
                                }
                                return
                            }}
                            class="btn btn-sm btn-secondary text-lg ml-2"><FaPlusCircle /></button>
                        <br />

                        <button
                            onClick={() => handlePlaceOrder(_id)}
                            className='btn btn-secondary mt-4 mx-4'>Place Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;