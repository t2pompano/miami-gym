import React, { useRef } from 'react';
import headerImage from '../../images/header_bg_7.jpg';
import './Login.css';
import Header from '../../Components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import SocialLogin from './SocialLogin';
import Loader from '../../Components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loader />
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement =
            <h3 className='wrapper' style={{ color: 'red' }}>Error: {error?.message}</h3>

    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else {
            toast("please Enter Your E-mail Address");
        }
    }

    return (
        <>
            <Header title="Please LogIn" image={headerImage}>
                The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, regardless of age, sex or physical ability.
            </Header>

            <section>
                <div className="login__container">
                    <div className="wrapper">
                        <div className="form__wrapper signin">
                            <form onSubmit={handleSubmit} action="">
                                <h2>Login</h2>
                                <div className="input__group">
                                    <input ref={emailRef} type="email" required />
                                    <label htmlFor="">Email adress</label>
                                </div>
                                <div className="input__group">
                                    <input ref={passwordRef} type="password" required />
                                    <label htmlFor="">Password</label>
                                </div>
                                <div className="remember">
                                    <label htmlFor=""><input type="checkbox" />Remember me</label>
                                </div>
                                <button type='submit'>Login</button>
                                <div className="signup-link">
                                    <p>Don't have an account ? <span className='signupBtn__link' onClick={navigateRegister}>Register</span></p>
                                    <p>Forget Password ? <span className='signupBtn__link' onClick={resetPassword}>Reset Password</span></p>
                                </div>
                                {errorElement}
                            </form>

                        </div>
                    </div>
                </div>
                <SocialLogin />
                <ToastContainer />

            </section>


        </>
    );
};

export default Login;