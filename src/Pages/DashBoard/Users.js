import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:4000/user', {
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
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;