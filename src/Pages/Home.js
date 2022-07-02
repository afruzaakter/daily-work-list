import React from 'react';
import Footer from '../Share/Footer';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div className='mt-28'>
            <ToDo/>
            <Footer></Footer>
        </div>
    );
};

export default Home;