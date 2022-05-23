import React from 'react';
import Cart from './Cart';
import customer from '../../../Asset/customer.svg';
import support from '../../../Asset/customer-service.svg';
import profit from '../../../Asset/profit.svg';

const CartInfo = () => {
    return (
        <>

            <div className='lg:w-4/5 mx-auto mt-4 sm:w-full'>
                <h2 className='text-3xl font-bold text-secondary text-center'>Business Summery</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-6 text-white '>
                    <Cart backGround='bg-gradient-to-r from-secondary to-primary' cartTitle='4000+ Customer' about='We have 4981 respectable customer all around the world' img={customer}></Cart>
                    <Cart backGround='bg-gradient-to-r from-secondary to-primary' cartTitle='Increasing Revenue' about='Per week we are celebrating our increasing revenue with our supported customer ' img={profit}></Cart>
                    <Cart backGround='bg-gradient-to-r from-secondary to-primary' cartTitle='24/7 Customer Support' about='We try to connect to our customer regarding weekend' img={support}></Cart>

                </div>
            </div>
        </>
    );
};

export default CartInfo;