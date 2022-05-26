import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductRow = ({ product }) => {

    const { _id, name, price, img, company, about, available, minimum, ratings } = product;
    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/dash/updateProduct/${id}`);
    }
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <img class="mask mask-square h-32 w-32 mx-auto" src={img} alt='' />
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{about}</p>
                    <p>Unit Price: ${price}</p>
                    <p>Stock Available:{available}</p>
                    <p>Ratings:{ratings} stars</p>
                    <div class="card-actions justify-end">
                        <button
                            onClick={() => handleUpdate(_id)}
                            className='btn btn-xs btn-warning'>Update</button>

                        <button className='btn btn-xs border-0 bg-red-500 text-black hover:text-white'
                        >delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductRow;