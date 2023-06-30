import React from 'react';
import Header from './Header';
import HeaderImage from '../../src/images/family.jpg';

const Myself = () => {
    const image = HeaderImage;
    return (
        <>
            <Header title="Me my son & my daughter" image={HeaderImage}>
                Whosoever follows a path to seek knowledge therein, God will make easy for him a path to paradise. Education is not only the right, but the duty of every Muslim, male or female. The best gift from a father to his child is education and upbringing. Knowledge cannot be acquired with sloth.
            </Header>
            <section>
                <div>
                    <h2>I will add my information later...........</h2>
                    <img src={image} alt="" />
                </div>
            </section>
        </>
    );
};

export default Myself;