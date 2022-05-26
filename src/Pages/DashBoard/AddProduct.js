import React from 'react';
import { toast } from 'react-toastify';
import img from '../../Asset/addProductSideBanner.png';

const AddProduct = () => {

    const handleAdd = event => {
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
        fetch(`https://young-crag-95618.herokuapp.com/tools`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        }).then(res => res.json()).then(data => {
            console.log(data)
        });
        toast.success('Successfully Add One Product')

    }
    return (
        <div className='mb-5'>
            <h2 className='text-indigo-500 text-2xl font-semibold text-center uppercase'>Add A New Product</h2>
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 w-4/5 mx-auto mt-5">
                <figure className=''><img src={img} alt="Album"
                    className='border-2 border-teal-500 rounded-lg' /></figure>
                <div >
                    <div className='w-full'>
                        <div className='w-4/5 mx-auto'>
                            <h2 class="text-cyan-600 text-xl uppercase">Give Reliable Information</h2>
                            <form onSubmit={handleAdd}>
                                <input type="text" placeholder="Product Name" name='name' class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="text" placeholder="company name" name="company" class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="text" placeholder="image url" name="url" class="input input-bordered input-secondary w-full max-w-xs mt-2" required />
                                <textarea class="textarea textarea-secondary  w-full max-w-xs mt-2" placeholder="Short Description" name="about"></textarea>
                                <input type="number" placeholder="Unit price" name="unit" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="number" placeholder="Available Stock" name="available" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="number" placeholder="Minimum Order" name="minimum" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="number" placeholder="Give ratings" name="ratings" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />

                                <input type="submit" value="Add New Product" class="btn btn-success w-full max-w-xs mt-2" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;