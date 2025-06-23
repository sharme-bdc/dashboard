import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router';

const Layout = () => {
    return(
        <section className='bg-gray-300 p-2 items-center pr-2'>
            <div className='flex flex-col w-full bg-black rounded-lg sm:flex-row py-4 px-2'> 
                <Sidebar /> 
                <main className="flex flex-col min-h-screen overflow-hidden mr-8 p-8 bg-white lg:w-9/12 md:w-10/12 sm:w-full rounded-lg"><Outlet /></main>
            </div>
        </section>
    )
}

export default Layout;