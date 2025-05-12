import React from 'react';

import { HiOutlineChevronDown } from 'react-icons/hi';
function Ancre() {
  return (
    <div className='background-transparent w-full pt-40'>
      <a href="#next">
        <HiOutlineChevronDown size={60} style={{ fontSize: '36px', strokeWidth: '1.1px' }} />
      </a>  
    </div>
  );
}

export default Ancre;
