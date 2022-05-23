import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const HomeUpdate = () => {
    const { id } = useParams();

    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const unit = event.target.unit.value;
        const url = event.target.url.value;
        const company = event.target.company.value;
        const about = event.target.about.value;
        const available = event.target.available.value;
        const minimum = event.target.minimum.value;
        const ratings = event.target.ratings.value;
        const upData = { name, price: unit, img: url, company, about, available, minimum, ratings }
        console.log(upData)
        fetch(`https://young-crag-95618.herokuapp.com/tools/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(upData)
        }).then(res => res.json()).then(data => console.log(data));

    }


    return (
        <div className='bg-red-500'>
            <span>You have clicked: {id}</span>
            <form onSubmit={handleUpdate} className="flex bg-green-500 w-1/2 mx-auto" style={{ flexDirection: 'column', rowGap: '10px' }}>
                <input type="text" placeholder="Type name" name="name" class="input input-bordered w-full max-w-xs" />
                <input name="unit" type="number" placeholder="Type unit price" class="input input-bordered w-full max-w-xs" />
                <input name="url" type="text" placeholder="Type url" class="input input-bordered w-full max-w-xs" />
                <input name="company" type="text" placeholder="Type company" class="input input-bordered w-full max-w-xs" />
                <input name="about" type="text" placeholder="Type about" class="input input-bordered w-full max-w-xs" />
                <input name="available" type="number" placeholder="Type available " class="input input-bordered w-full max-w-xs" />
                <input name="minimum" type="number" placeholder="Type minimum" class="input input-bordered w-full max-w-xs" />
                <input name="ratings" type="number" placeholder="Type ratings" class="input input-bordered w-full max-w-xs" />
                <input name="" type="submit" value="Update" class="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default HomeUpdate;