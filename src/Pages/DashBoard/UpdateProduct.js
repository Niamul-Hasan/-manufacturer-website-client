import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../SharedPages/Loading';

const UpdateProduct = () => {
    const { productId } = useParams();
    const { data: product, isLoading } = useQuery(['tools', productId], () => fetch(`https://young-crag-95618.herokuapp.com/tools/${productId}`, {
        method: 'GET'
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(product);
    const { name, price, img, company, about, available, minimum, ratings } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const unit = event.target.unit.value;
        const url = event.target.url.value;
        const company = event.target.company.value;
        const about = event.target.about.value;
        const available = event.target.available.value;
        const minimum = event.target.minimum.value;
        const ratings = event.target.ratings.value;
        const addProduct = { name, price: unit, img: url, company, about, available, minimum, ratings }
        console.log(addProduct)
        fetch(`https://young-crag-95618.herokuapp.com/tools/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        }).then(res => res.json()).then(data => {
            console.log(data)
        });
        toast.success('Successfully Updated One Product')
    }

    return (
        <div className='mb-5'>
            <h2 className='text-indigo-500 text-2xl font-semibold text-center uppercase'>Update Your Product</h2>
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 w-4/5 mx-auto mt-5">
                <figure className=''><img src={img} alt="Album"
                    className='border-2 border-indigo-300 rounded-lg' /></figure>
                <div >
                    <div className='w-full'>
                        <div className='w-4/5 mx-auto'>
                            <h2 class="text-lime-600 text-xl uppercase">Make Relevat Changes</h2>
                            <form onSubmit={handleUpdateProduct}>
                                <input type="text" defaultValue={name} name='name' class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="text" defaultValue={company} name="company" class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="text" defaultValue={img} name="url" class="input input-bordered input-secondary w-full max-w-xs mt-2" required />
                                <textarea class="textarea textarea-secondary  w-full max-w-xs mt-2" defaultValue={about} name="about"></textarea>
                                <input type="number" defaultValue={price} name="unit" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="number" defaultValue={available} name="available" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="number" defaultValue={minimum} name="minimum" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="number" defaultValue={ratings} name="ratings" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />

                                <input type="submit" value="Update Product" class="btn btn-warning w-full max-w-xs mt-2" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;