import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='border-t'>
            <div className='container mx-auto text-center flex flex-col gap-2 lg:flex-row lg:justify-between'>
                <p>© All Rights reserved 2026 </p>
                <div className=' flex justify-center p-4  items-center gap-4 text-2xl'>
                    <a href='#' className='hover:text-primary-100'>
                        <FaFacebook />
                    </a>
                    <a href='#' className='hover:text-primary-100'>
                        <FaInstagramSquare />
                    </a>
                    <a href='#' className='hover:text-primary-100'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
