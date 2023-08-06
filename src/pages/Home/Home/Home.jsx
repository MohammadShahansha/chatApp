import React, { useEffect, useState } from 'react';
import Splash from '../Splash/Splash';
import MainContent from '../MainContent/MainContent';
import { Link } from 'react-router-dom';

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className=''>
            {
                loading ? <Splash></Splash> : <MainContent></MainContent>
            }
        </div>
    );
};

export default Home;