import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/UseAdmin';
import NavBar from '../SharedPages/NavBar';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <NavBar></NavBar>
            <div class="drawer drawer-mobile">
                <input id="dashBoard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <span className='text-blue-700 font-bold text-2xl'>WelCome To Your <span className='text-purple-500 font-bold text-4xl'>D</span>ashBoard</span>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="dashBoard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dash'>MyOrder </Link></li>
                        <li><Link to='review'>Add Reviews</Link></li>
                        <li><Link to='profile'>My Profile</Link></li>

                        <li><Link to='manage'>Manage Orders</Link></li>
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashBoard;