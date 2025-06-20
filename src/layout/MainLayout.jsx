import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
    return(
        <section className='bg-gray-300 p-2 items-center pr-2'>
            <div className='flex flex-col w-full bg-black rounded-lg sm:flex-row py-4 px-2'> 
                <div className="text-red-500">Sidebar</div>
                <main><Outlet /></main>
            </div>
        </section>
    )
}

export default Layout;