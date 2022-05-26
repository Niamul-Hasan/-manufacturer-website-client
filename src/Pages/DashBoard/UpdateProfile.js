import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { email } = useParams();
    const [myprofile, setMyprofile] = useState({});

    useEffect(() => {
        fetch(`https://young-crag-95618.herokuapp.com/profile/${email}`)
            .then(res => res.json()).then(data => {
                setMyprofile(data);
            })
    }, [email]);
    const { address, name, degree, uni, link, phone } = myprofile;

    const handleUpdate = (e) => {
        e.preventDefault();
        const profile = {
            address: e.target.adress.value,
            name: name,
            email: email,
            degree: e.target.degree.value,
            uni: e.target.uni.value,
            link: e.target.link.value,
            phone: e.target.phone.value

        }
        console.log(profile);
        fetch(`https://young-crag-95618.herokuapp.com/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile),
        }).then(res => res.json()).then(data => console.log(data));
        toast.success('Your profile is up to date')
    }


    return (

        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 className='text-xl mt-3 uppercase text-teal-500 font-bold'> welcome to update profile</h2>
                    <div>
                        <form onSubmit={handleUpdate}>
                            <input type="text" name='name' defaultValue={name} class="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='email' defaultValue={email} class="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='adress' defaultValue={address} class="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='degree' defaultValue={degree} class="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='uni' defaultValue={uni} class="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='link' defaultValue={link} class="input input-bordered w-full max-w-xs mb-2" />
                            <input type="number" name='phone' defaultValue={phone} class="input input-bordered w-full max-w-xs mb-2" />
                            <input type="submit" defaultValue="Update Now" class="btn btn-success w-full max-w-xs mb-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateProfile;