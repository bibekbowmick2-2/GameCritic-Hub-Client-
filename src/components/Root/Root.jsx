import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Foooter from '../Footer/Footer';

const Root = () => {
    return (
        <div className='relative font-lato bg-[#04020e]'>
            <Header/>
            <Outlet   />
            <Foooter/>
        </div>
    );
};

export default Root;