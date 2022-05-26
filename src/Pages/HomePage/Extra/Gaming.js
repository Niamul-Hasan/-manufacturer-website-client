import React from 'react';
import { toast } from 'react-toastify';
import img from '../../../Asset/404-error.png'

const Gaming = () => {
    return (
        <div className='mb-5'>
            <h2 className='text-secondary text-3xl font-semibold text-center uppercase'>Exciting Summer Gamming</h2>
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 w-4/5 mx-auto mt-5">
                <figure className=''><img src={img} alt="Album"
                    className='border-2 border-teal-500 rounded-lg' /></figure>
                <div >
                    <div className='w-full'>
                        <div className='w-4/5 mx-auto'>
                            <h2 class="text-rose-600 text-xl uppercase">Limited Registration package!</h2>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                toast("Congrates!!Welcome to Battle Field!");
                                e.target.reset();
                            }}>
                                <input type="text" placeholder="Your Name" class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="email" placeholder="Your Email" class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="text" placeholder="Which game do you prefer" class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="number" placeholder="Phone Number" required class="input input-bordered input-secondary w-full max-w-xs mt-2" />
                                <input type="submit" value="Register" class="btn btn-success w-full max-w-xs mt-2" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gaming;