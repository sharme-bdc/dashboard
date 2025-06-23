import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className='list-none flex flex-col gap-8 pt-32'>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/expences">Expences</Link></li>
                <li><Link to="/wallets">Wallets</Link></li>
                <li><Link to="/summary">Summary</Link></li>
                <li><Link to="/accounts">Accounts</Link></li>
                <li><Link to="/Settings">Settings</Link></li>
            </nav>
        </div>
    );
};

export default Navbar;