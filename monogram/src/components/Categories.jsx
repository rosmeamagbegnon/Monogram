import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(null); // État pour suivre quel bouton est actif

  const handleClick = (index) => {
    setActiveIndex(index); // Met à jour l'index du bouton actif
  };

  return (
    <div className='my-6 py-3 justify-center flex gap-y-4 border-[#8796a4] border-b-2 border-t-2 w-full max-w-[1100px] mx-auto'>
      <button 
        onClick={() => handleClick(0)} 
        className={`text-[#1a2456] bord px-5 py-1   ${activeIndex === 0 ? ' border-b-4 border-[#1a2456]' : 'border-b-0'}`}>
        <Link to="/atmonogram">AT MONOGRAM</Link>
      </button>
      <button 
        onClick={() => handleClick(1)} 
        className={`text-[#1a2456]  bord px-5 py-1  ${activeIndex === 1 ? 'border-b-4 border-[#1a2456]' : 'border-b-0'}`}>
        <Link to="/photo">PHOTO</Link>
      </button>
      <button 
        onClick={() => handleClick(2)} 
        className={`text-[#1a2456]  border-r-2 px-5 py-1 border-[#8796a4]  ${activeIndex === 2 ? 'border-b-4 border-[#1a2456]' : 'border-b-0'}`}>
        <Link to="/video">VIDEO</Link>
      </button>
      <button 
        onClick={() => handleClick(3)} 
        className={`text-[#1a2456] bord px-5 py-1   ${activeIndex === 3 ? 'border-b-4 border-[#1a2456]' : 'border-b-0'}`}>
        <Link to="/audio">AUDIO</Link>
      </button>
      <button 
        onClick={() => handleClick(4)} 
        className={`text-[#1a2456] px-5 ${activeIndex === 4 ? 'border-b-4 border-[#1a2456]' : 'border-b-0'}`}>
        <Link to="/product">PRODUCT</Link>
      </button>
    </div>
  );
}

export default Categories;
