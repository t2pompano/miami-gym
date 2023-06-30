import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/miami.png';
import { links } from '../../data';
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={logo} alt="nav Logo" />
                </Link>


                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => {

                            return (
                                <li key={index}>

                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                                </li>

                            )
                        })

                    }
                    {
                        user ?
                            <button onClick={handleSignOut}>SignOut</button>
                            :

                            <li><NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} as={Link} to="login">LogIn</NavLink></li>
                    }

                </ul>
                <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    );
};

export default Navbar;