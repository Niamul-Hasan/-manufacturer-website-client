import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import Loading from '../SharedPages/Loading';

const CheckoutForm = ({ myorder }) => {
    const { _id, customer, email, duePrice, product } = myorder;

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [payment, setPayment] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch('https://manufacturer-website-server-vercel01.vercel.app/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ duePrice })
        }).then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [duePrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || "");
        setPayment('');
        setProcessing(true);

        if (processing) {
            return <Loading></Loading>
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customer,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setPayment('Congrates! Your payment is completed.');
            setTransactionId(paymentIntent.id);

            const url = `https://manufacturer-website-server-vercel01.vercel.app/myorder/${_id}`;
            const paymentInfo = {
                payment_ID: _id,
                transactionId: paymentIntent.id,
                OrderFor: product,
                payment_Amount: duePrice,
                BillPayer: customer
            }
            fetch(url, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)
            }).then(res => res.json()).then(data => {
                console.log(data);
                setProcessing(false);
            });

            console.log(paymentIntent);
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-4' type="submit"
                    disabled={!stripe || !clientSecret || payment}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                payment && <div className='text-green-600'>
                    <p>{payment}</p>
                    <p><small>Transaction ID: <span className='text-purple-600 font-bold'> {transactionId}</span></small></p>
                </div>

            }
        </>
    );
};

export default CheckoutForm;