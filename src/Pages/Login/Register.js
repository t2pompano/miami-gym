import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import headerImage from '../../images/header_bg_6.jpg';
import './Login.css';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';
import SocialLogin from './SocialLogin';
import Loader from '../../Components/Loader';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loader />
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/about');

    }





    return (
        <>
            <Header title="Please Register" image={headerImage}>
                The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, regardless of age, sex or physical ability.
            </Header>
            <div className="login__container">
                <div className="wrapper">
                    <div className="form__wrapper signin">
                        <form onSubmit={handleRegister} action="">
                            <h2>Register</h2>
                            <div className="input__group">
                                <input type="text" name='name' required />
                                <label htmlFor="">Username</label>
                            </div>
                            <div className="input__group">
                                <input type="email" name='email' required />
                                <label htmlFor="">Email adress</label>
                            </div>
                            <div className="input__group">
                                <input type="password" name='password' required />
                                <label htmlFor="">Password</label>
                            </div>
                            <div className="terms">
                                <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' />
                                <label className={` ps-2 ${agree ? '' : "ps-1"}`} htmlFor="terms">Accept Miami-Gym Terms and Condition</label>
                            </div>
                            <button
                                disabled={!agree}
                                type='submit'>Register</button>
                            <div className="signup-link">
                                <p>Already have an account ? <span className='signupBtn__link' onClick={navigateLogin}>LogIn</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <SocialLogin />

        </>
    );
};

export default Register;