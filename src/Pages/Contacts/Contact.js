import React from 'react';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io';

import './Contacts.css'
import Header from '../../Components/Header';
const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non error ratione architecto aliquam culpa sapiente!
            </Header>
            <section className='contact'>
                <div className="container contact__wrapper">
                    <div className="contact__wrapper">
                        <a href="mailto:aamintalla@gmail.com" target='_blank' rel='noreferrer noopener'> <MdEmail /></a>
                        <a href="http://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'> <BsMessenger /></a>
                        <a href="https://wa.me/+19547077751" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;