import React from 'react';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VissionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './About.css';
import Header from '../../Components/Header';

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, totam. In dicta perspiciatis explicabo incidunt!
            </Header>

            <section className='about__story'>
                <div className="container about__story-container">
                    <div className="about__secton-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi minus omnis illum dolor quaerat quidem. Aspernatur in enim architecto!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, similique odit! Officiis a quas id?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora!</p>
                    </div>
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Our StoryImage" />
                    </div>
                </div>
            </section>
            <section className='about__vission'>
                <div className="container about__vission-container">
                    <div className="about__secton-content">
                        <h1>Our Vission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi minus omnis illum dolor quaerat quidem. Aspernatur in enim architecto!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, similique odit! Officiis a quas id?</p>
                    </div>
                    <div className="about__section-image">
                        <img src={VissionImage} alt="Our VissionImage" />
                    </div>
                </div>
            </section>
            <section className='mission__story'>
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our MissionImage" />
                    </div>
                    <div className="about__secton-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi minus omnis illum dolor quaerat quidem. Aspernatur in enim architecto!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, similique odit! Officiis a quas id?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora!</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;