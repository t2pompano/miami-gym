import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { links } from '../../data';

const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo'>
                    <img src={logo} alt="nav Logo" />
                </Link>
                <ul className='nav__links'>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;