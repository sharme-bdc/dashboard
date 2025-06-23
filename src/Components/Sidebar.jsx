import React from 'react';
import Navbar from './Navbar';

const Sidebar = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden py-4 px-8 text-white lg:w-3/12 md:w-2/12 sm:w-full">
            <div>
                <img src='src/Assets/Profile.png' alt='Profile'/>
                <p className='text-white font-bold text-3xl pt-4'>Samantha</p>
                <p>samantha@email.com</p>
            </div>
            <div><Navbar /></div>
        </div>
    );
};

export default Sidebar;