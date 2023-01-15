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
    const nameRef = useRef();
    const emailRef = useRef();
    const addresRef = useRef();
    const phoneRef = useRef();

    const handlePlaceOrder = (orderId) => {
        const quantity = quantityRef.current.value;
        const customer = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addresRef.current.value;
        const phone = phoneRef.current.value;
        const myOrder = {
            productId: orderId,
            img: img,
            product: name,
            customer: customer,
            email: email,
            address: address,
            phone: phone,
            unitPrice: price,
            quantity: quantity,
            duePrice: unitPrice * quantity
        }
        console.log(myOrder.phone);

        if (phone) {
            fetch('https://manufacturer-website-server-vercel01.vercel.app/orders', {
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
        else {
            return toast.error('Please give your phone number !')
        }
    }


    return (
        <div>
            <h2 className='text-4xl text-teal-500 text-center'>Your Product ID : <span
                className='text-purple-500'
            >{_id}</span></h2>
            <div class="hero min-h-screen bg-base-200 w-full mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='grid lg:grid-cols-2 sm:grid-flow-cols-1'>
                        <div>
                            <h1 class="text-5xl font-bold">{name}</h1>
                            <p class="pt-6">{about}</p>
                            <p class="text-orange-500 pt-3 text-xl font-bold">Unit Price: ${price}</p>
                            <p class="text-blue-500 text-bold">Available Stock: {available}</p>
                            <p class="text-teal-900">Minimum Order: {minimum}</p>
                        </div>
                        <div className='my-auto'>
                            <h2 className='uppercase text-lg font-bold'>Place Some information</h2>
                            <form className='py-4'>
                                <input type="text" value={user?.displayName} ref={nameRef} readOnly class="input input-bordered input-sm w-full max-w-xs mb-2" />
                                <input type="email" value={user?.email} ref={emailRef} readOnly class="input input-bordered input-sm w-full max-w-xs mb-2" />
                                <input type="text" placeholder="Address" ref={addresRef} class="input input-bordered input-sm w-full max-w-xs mb-2" />
                                <input type="number" placeholder="Phone Number" ref={phoneRef} required class="input input-bordered input-sm w-full max-w-xs mb-2" />
                            </form>
                            <label className="label">
                                <span className="label-text text-xl text-orange-500">Your Quantity</span>
                            </label>
                            <button
                                onClick={() => {
                                    if (count > minimum) {
                                        setCount(count - 1);
                                    }
                                    return
                                }}
                                class="btn btn-xs btn-secondary mr-2"><FaMinusCircle /></button>
                            <input type="number" value={count} ref={quantityRef} readOnly
                                class="input input-bordered input-sm w-1/4 text-center max-w-xs mb-2" />
                            <button
                                onClick={() => {
                                    if (count < available) {
                                        setCount(count + 1);
                                    }
                                    return
                                }}
                                class="btn btn-xs btn-secondary ml-2"><FaPlusCircle /></button>
                            <br />

                            <button
                                onClick={() => handlePlaceOrder(_id)}
                                className='btn btn-sm btn-secondary mt-4 mx-4'>Place Order</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;