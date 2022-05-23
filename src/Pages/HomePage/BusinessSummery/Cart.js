import React from 'react';

const Cart = ({ backGround, img, cartTitle, about }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${backGround}`}>
            <figure className='pl-6'>
                <img src={img} alt="Album" />

            </figure>
            <div className="card-body">
                <h2 className="card-title">{cartTitle}</h2>
                <p>{about}.</p>
            </div>
        </div>
    );
};

export default Cart;