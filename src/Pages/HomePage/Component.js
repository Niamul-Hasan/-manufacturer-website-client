import React from 'react';
import { useNavigate } from 'react-router-dom';

const Component = ({ component }) => {
    const { _id, img, name, price, about, company, available, minimum, ratings } = component;
    const navigate = useNavigate();


    const handleUpdate = id => {
        navigate(`/update/${id}`)
    }
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure
                    className='transition ease-in-out delay-100 hover:translate-x-4 hover:scale-110 hover:bg-gray-100 duration-300'
                ><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: ${price} per Unit</p>
                    <p><small>{about}</small></p>
                    <p>Brand: {company}</p>
                    <p>Available Stock:{available} </p>
                    <p>Minimum Order:{minimum}</p>
                    <p>Ratings: {ratings} Stars</p>

                    <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 hover:text-white duration-300"
                            onClick={() => {
                                navigate(`/myorder/${_id}`);
                            }}
                        >Get This</button>

                        {/* for update  */}
                        <button class="btn btn-primary btn-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 hover:text-white duration-300"
                            onClick={() => handleUpdate(_id)}
                        >Update This</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component;