import React from 'react';
import './Login.css';
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading || loading1) {
        return <Loader />
    }
    if (error || error1) {
        errorElement =
            <div>
                <h3 className='wrapper'>Error: {error?.message}{error1?.message}</h3>
            </div >
    }

    if (user || user1) {
        navigate('/');
    }


    return (
        <>
            <div className='social__container'>

                <div>
                    <div className='or__container'>
                        <div className='or'></div>
                        <h3 className='or__or'>OR</h3>
                        <div className='or'></div>
                    </div>
                    {errorElement}
                    <div className='wrapper'>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='social__btn'><FcGoogle /> Sign In with Google</button>
                        <button
                            onClick={() => signInWithGithub()}
                            className='social__btn'><AiFillGithub /> Sign In with Github</button>
                        <button className='social__btn'><BsFacebook /> Sign In with Facebook</button>

                    </div>
                </div>

            </div>


        </>
    );
};

export default SocialLogin;