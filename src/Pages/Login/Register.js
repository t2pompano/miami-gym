import React, { useRef } from 'react';
import headerImage from '../../images/header_bg_6.jpg';
import './Login.css';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <>
            <Header title="Please Register" image={headerImage}>
                The health benefits of regular exercise and physical activity are hard to ignore. Everyone benefits from exercise, regardless of age, sex or physical ability.
            </Header>
            <div className="login__container">
                <div className="wrapper">
                    <div className="form__wrapper signin">
                        <form onSubmit={handleSubmit} action="">
                            <h2>Register</h2>
                            <div className="input__group">
                                <input ref={emailRef} type="text" required />
                                <label htmlFor="">Username</label>
                            </div>
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
                            <button type='submit'>Register</button>
                            <div className="signup-link">
                                <p>Already have an account ? <span className='signupBtn__link' onClick={navigateLogin}>LogIn</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Register;