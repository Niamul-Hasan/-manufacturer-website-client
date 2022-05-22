import React from 'react';

const Component = ({ component }) => {
    const { img, name, price, about } = component;
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure
                    className='transition ease-in-out delay-100 hover:translate-x-4 hover:scale-110 hover:bg-gray-100 duration-300'
                ><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p><small>{about}</small></p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 hover:text-white duration-300"
                        >Get This</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component;