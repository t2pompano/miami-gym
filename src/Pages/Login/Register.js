import React from 'react';
import headerImage from '../../images/header_bg_6.jpg';
import './Login.css';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.email.value);

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