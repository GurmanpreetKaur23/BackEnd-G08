import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='border-b border-black sticky top-0'>
            <div className='size h-[70px] flex items-center justify-between'>
                <Link to="/"> 
                    <img 
                    src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" alt="Logo" />
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
