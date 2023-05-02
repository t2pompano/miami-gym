import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png';
import './../Pages/Home/Home.css';

const MainHeader = () => {
    return (
        <header className='main__header'>
            <div className='container main__header-container'>
                <div className="main__header-left">
                    <h4>#90DayOfWorkOut</h4>
                    <h1>Join The Legend of the Fitness World</h1>
                    <p>
                        Fitness World is a gym for everyone. Looking for convenient locations? State-of-the-art equipment? Personalized programs? Countless amenities? A fitness-focused community? Fitness World has it all. We’ve provided everything so you can simply focus on crushing your goals. Start making moves and join today!
                    </p>
                    <Link to="/plans" className='btn lg'>Get Started</Link>
                </div>

                <div className="main__header-right">
                    <div className="main__header-circle">

                    </div>
                    <div className="main__header-image">
                        <img src={Image} alt="Main Header iamge" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;