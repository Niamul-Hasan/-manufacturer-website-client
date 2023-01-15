import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import DeleteUser from './DeleteUser';
import UserRow from './UserRow';

const Users = () => {

    const [confirmDelete, setConfirmDelete] = useState(null);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://manufacturer-website-server-vercel01.vercel.app/user', {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-2xl">All Users: {users.length}</h1>
            <div class="overflow-x-auto mt-3">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Remove Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                setConfirmDelete={setConfirmDelete}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {confirmDelete && <DeleteUser
                confirmDelete={confirmDelete}
                setConfirmDelete={setConfirmDelete}
                refetch={refetch}
            ></DeleteUser>}
        </div>
    );
};

export default Users;