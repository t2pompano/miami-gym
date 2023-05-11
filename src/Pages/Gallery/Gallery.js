import React from 'react';
import HeaderImage from '../../images/header_bg_3.jpg';
import './Gallery.css';
import Header from '../../Components/Header';

const Gallery = () => {
    const galleryLength = 15;
    const images = []

    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }

    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos excepturi perspiciatis quasi animi nihil quam?
            </Header>
            <section className='gallery'>
                <div className="container gallery__container">
                    {
                        images.map((image, index) => {
                            return <article key={index}>
                                <img src={image} alt={`GalleryImage ${index + 1}`} />
                            </article>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Gallery;