import React from 'react';

const Sidebar = () => {
    return (
        <div className="flex flex-col min-h-screen py-4 px-8 justify-between text-white w-4/12">
            <div>
                <img src='src/Assets/Profile.png' alt='Profile'/>
                <p className='text-white font-bold text-3xl pt-4'>Samantha</p>
                <p>samantha@email.com</p>
            </div>
            <div>Navbar
            </div>
        </div>
    );
};

export default Sidebar;