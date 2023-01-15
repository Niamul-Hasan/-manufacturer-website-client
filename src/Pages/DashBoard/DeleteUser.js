import React from 'react';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const DeleteUser = ({ setConfirmDelete, confirmDelete, refetch }) => {
    const { email } = confirmDelete;

    const handleDelete = () => {
        fetch(`https://manufacturer-website-server-vercel01.vercel.app/user/${email}`, {
            method: 'DELETE',
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    setConfirmDelete(null);
                    toast.success('User is deleted');
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-user" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h1 className='text-4xl text-error'><RiAlarmWarningLine /></h1>
                    <h3 class="font-bold text-lg text-red-500">Are you SURE to DELETE {email}!</h3>
                    <p class="py-4 text-yellow-500 text-xl">Once a user is deleted can never be restored!!!</p>
                    <div class="modal-action">
                        <button
                            onClick={handleDelete}
                            class="btn btn-xs border-0 bg-red-500 text-black">Remove User</button>
                        <label for="delete-user" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteUser;