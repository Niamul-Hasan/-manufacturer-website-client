import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hooks/UseToken';
import Loading from '../SharedPages/Loading';

const GoogleLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [token] = useToken(user);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, token, from])

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-warning w-full max-w-xs hover:text-white hover:bg-teal-500 hover:border-0"
            >Login With Google</button>
        </div>
    );
};

export default GoogleLogin;