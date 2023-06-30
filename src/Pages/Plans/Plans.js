import React from 'react';
import './Plans.css';
import HeaderImage from '../../images/header_bg_4.jpg';
import { plans } from '../../data';
import Header from '../../Components/Header';
import Card from '../../UI/Card';
import { Link } from 'react-router-dom';


const Plans = () => {
    return (
        <>
            <Header title="Membership Plans" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt illo? Neque omnis accusamus sequi!s
            </Header>
            <section className="plans">
                <div className="container plans__container">
                    {
                        plans.map(({ id, name, desc, price, features }) => {
                            return <Card key={id} className='plan'>
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`$${price}`}</h1><h2>/mo</h2>
                                <h4>Features</h4>
                                {
                                    features.map(({ feature, available }, index) => {
                                        return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                                    })
                                }
                                <Link to={'/checkout'}>
                                    <button className='btn lg'>Choose Plan</button>
                                </Link>

                            </Card>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Plans;