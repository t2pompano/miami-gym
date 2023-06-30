import React from 'react';
import Header from '../../src/Components/Header';
import HeaderImage from '../../src/images/family.jpg';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import { blogs } from '../data';


const Blogs = () => {
    return (
        <>
            <Header title="Me my son & my daughter" image={HeaderImage}>
                Whosoever follows a path to seek knowledge therein, God will make easy for him a path to paradise. Education is not only the right, but the duty of every Muslim, male or female. The best gift from a father to his child is education and upbringing. Knowledge cannot be acquired with sloth.
            </Header>
            <section>
                <div className="container plans__container">
                    {
                        blogs.map(({ id, title, desc }) => {
                            return <Card key={id} className='plan'>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                                <Link to={'/myself'}>
                                    <button className='btn lg'>About Myself</button>
                                </Link>

                            </Card>
                        })
                    }
                </div>
            </section>

        </>
    );
};

export default Blogs;