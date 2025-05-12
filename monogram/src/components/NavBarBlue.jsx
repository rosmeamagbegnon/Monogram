import React, { useState } from 'react';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Currencies from './Currencies';
function NavBarBlue() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='shadow-xl z-10 left-2 md:left-4 right-2 md:right-4  fixed top-2 md:top-4 bg-[#1a2456] flex justify-between items-center p-2  text-[#efc2b3]'>
        <Link to="/accueil">
          <div className='flex items-center space-x-3 group hover:text-[#FF8D6BB2]'>
            <svg className='group-hover:fill-[#FF8D6BB2] transition-colors duration-300' fill="#efc2b3" viewBox="0 0 150 114" height="38" xmlns="http://www.w3.org/2000/svg">
              <path d="M150,36V0H0V114H150ZM144,6V36H78V6ZM6,6H72V72H6ZM72,108H6V78H72Zm72,0H78V78h0V42h66Z"></path>
              <rect height="44" width="6" y="17" x="35.5"></rect>
              <rect height="44" width="6" y="17" x="53"></rect>
              <rect height="44" width="6" y="17" x="18"></rect>
              <path d="M111.5,50a25,25,0,1,0,25,25A25,25,0,0,0,111.5,50Zm0,44a19,19,0,1,1,19-19A19,19,0,0,1,111.5,94Z"></path>
            </svg>
            <h1 className="font-semibold text-xl tracking-[2px] group-hover:text-[#FF8D6BB2] transition-colors duration-300" style={{fontSize : '13.5px'}}>MONOGRAM</h1>
          </div>
        </Link>
      
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl" aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`bg-[#1a2456] absolute lg:relative top-14 lg:top-0 flex-col lg:flex lg:flex-row lg:space-x-8 font-semibold text-sm items-center ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <li className='hover:text-[#FF8D6BB2]'><Link to="/how-it-works">HOW IT WORKS</Link></li>
        <li className='relative group'>
          <button className="flex items-center hover:text-[#bfc2d0] rounded" aria-haspopup="true" aria-expanded={isOpen}>
            WORKFLOWS
            <svg className="triangle-icon " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 50">
              <polygon className="triangle" points="50,35 70,15 30,15" fill="#efc2b3" />
            </svg>
          </button>

          <ul className="text-[#1a2456] absolute hidden group-hover:block bg-white shadow-lg py-2 w-40 border rounded">
            <li className="relative group justify-center flex flex-col space-y-2">
              <Link to="#" className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">AUDIO CONSOLE</Link>
              <Link to="#" className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">PHOTO CONSOLE</Link>
              <Link to="#" className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">VIDEO CONSOLE</Link>
              <Link to="#" className="hover:bg-gray-100 cursor-pointer p-2 font-serif text-base font-normal">MINI CONSOLE</Link>
            </li>
          </ul>
        </li>
        <li className='hover:text-[#FF8D6BB2]'><Link to="/download">DOWNLOAD</Link></li>
        <li className='hover:text-[#FF8D6BB2]'><Link to="/blog">BLOG</Link></li>
        <li className='hover:text-[#FF8D6BB2]'><Link to="/support">SUPPORT</Link></li>
        <li className='hover:text-[#FF8D6BB2]'><Link to="/">SHOP</Link></li>
        <li className="flex space-x-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" fill="#efc2b3" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
          <Currencies/>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarBlue;
