import React from 'react';
import { Outlet } from 'react-router-dom';
import ShoHeader from './ShoHeader';

const ShoLyout = () => {
    return (
        <div className='flex flex-col bg-white overflow-hidden'>
            {/*common header */}
            <ShoHeader/>
            <main className='flex flex-col w-full'>
            <Outlet/>
            </main>
        </div>
    );
};

export default ShoLyout;