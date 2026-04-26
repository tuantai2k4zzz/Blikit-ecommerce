import React from 'react';
import logo from "../assets/logoDragonball.png"

const Header = () => {
    return (
        <header className='h-20 shadow-md sticky top-0'>
            <div>
              <img src={logo} alt="" />
            </div>
        </header>
    );
};

export default Header;
