import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const name = user?.displayName;

    const navigate = useNavigate();

    const handleSubmit = e => {
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
        fetch(`https://manufacturer-website-server-vercel01.vercel.app/profile`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile),
        }).then(res => res.json()).then(data => console.log(data));
        toast.success('Your profile is saved to data base')
        e.target.reset();
    }

    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="card-title">Hi! {user?.displayName}</h2>
                    <p className='text-lg font-bold'>Email: {user?.email}</p>
                    <p className='text-lg'>You can Save Your profile To mongodb</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='adress' placeholder="Type Address" class="input input-bordered w-full max-w-xs mb-2" />
                        <input type="text" name='degree' placeholder="Type Last Degree you obtained" class="input input-bordered w-full max-w-xs mb-2" />
                        <input type="text" name='uni' placeholder="Type College or University" class="input input-bordered w-full max-w-xs mb-2" />
                        <input type="text" name='link' placeholder="Give Linkedin/fb link" class="input input-bordered w-full max-w-xs mb-2" />
                        <input type="number" name='phone' placeholder="Type mobile number" class="input input-bordered w-full max-w-xs mb-2" />
                        <input type="submit" value="Add to mongodb" class="btn btn-success w-full max-w-xs mb-2" />
                    </form>
                    <input type="button"
                        onClick={() => navigate(`/dash/updateProfile/${email}`)}
                        value="update" class="btn btn-warning w-full max-w-xs mb-2" />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;