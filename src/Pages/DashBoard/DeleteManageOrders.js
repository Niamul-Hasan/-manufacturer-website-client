import React from 'react';
import { toast } from 'react-toastify';

const DeleteManageOrders = ({ refetch, deleteOrder, setDeleteOrder }) => {
    const { _id, product } = deleteOrder;
    const handleDelete = () => {
        fetch(`https://young-crag-95618.herokuapp.com/order/${_id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                refetch();
                setDeleteOrder(null)
                toast.success('Order is Deleted');
            }
        })

    }
    return (
        <div>
            <input type="checkbox" id="delete-manage" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure to delete {product}!</h3>
                    <p class="py-4 text-xl text-yellow-500">Once you delete an order can never be restored!!</p>
                    <div class="modal-action">
                        <button onClick={handleDelete} className='btn btn-xs bg-red-500 border-0 text-black'>Remove</button>
                        <label for="delete-manage" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteManageOrders;