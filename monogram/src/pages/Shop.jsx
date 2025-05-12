import React from 'react'
import Ancre from '../components/Ancre.jsx';
import { Tooltip } from 'react-tooltip';
const listes = [
  {
    img: "/src/assets/img27.png",
    hov: "/src/assets/img12.jpeg",
    t1: "PRE-ORDER",
    t2: "MONOGRAM KEYBOARD",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img26.png",
    hov: "/src/assets/img29.jpeg",
    t1: "PRE-ORDER",
    t2: "MONOGRAM MULTIPAD",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img25.jpeg",
    hov: "/src/assets/img5.jpeg",
    t1: "PRE-ORDER",
    t2: "MONOGRAM CORE",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img21.jpeg",
    hov: "/src/assets/img42.jpeg",
    t1: "PRE-ORDER",
    t2: "MONOGRAM SLIDER",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img22.jpeg",
    hov: "/src/assets/img9.jpeg",
    t1: "PRE-ORDER",
    t2: "ORBITER MODULE",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img24.jpeg",
    hov: "/src/assets/img7.jpeg",
    t1: "PRE-ORDER",
    t2: "ESSENTIAL KEYS MODULE",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img43.jpeg",
    hov: "/src/assets/img6.jpeg",
    t1: "PRE-ORDER",
    t2: "DIAL MODULE",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img3.jpeg",
    hov: "/src/assets/img2.jpeg",
    t1: "PRE-ORDER",
    t2: "MONOGRAM CARYING ",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img41.jpeg",
    hov: "",
    t1: "PRE-ORDER",
    t2: "CONSOLE PACK:VIDEO",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img40.jpeg",
    hov: "",
    t1: "PRE-ORDER",
    t2: "CONSOLE PACK:PHOTO",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img39.jpeg",
    hov: "",
    t1: "PRE-ORDER",
    t2: "CONSOLE PACK:AUDIO",
    t3: 'Sold Out'
  },
  {
    img: "/src/assets/img4.jpeg",
    hov: "/src/assets/img44.jpeg",
    t1: "PRE-ORDER",
    t2: "MONOGRAM CARE",
    t3: 'Sold Out'
  }
];
function Shop() {
  return (
    <section className='bg-[#f0efed] '>
        <div className=" justify-center flex flex-col background-image1  ">
            <div className="justify-center flex flex-col text-center background-transparent pt-24  ">
                <h1 className="pt-44 w-80 md:w-[400px] mx-auto text-5xl font-bold text-[#efc2b3]" style={{fontSize : '40px'}}>A CONSOLE FOR EVERY WORKFLOW</h1>
                <h1 className="pt-5 text-[#efc2b3] font-normal text-xl" >Discover the perfect console for yours</h1>
                
            </div>
            <Ancre className=""/>
        </div>
        <div id="next" class="pt-20 md:pt-24 text-[#1a2456]">
          <div class=" max-w-screen-xl mx-auto px-4 lg:px-16 xl:px-24 justify-center ">
            <div class="grid grid-cols-1 sm:grid-cols-2  gap-4 items-center">
              <div className='figure relative   mb-4  px-[calc(1rem*productIdx)]' data-tooltip-id="my-tooltip" data-tooltip-content="Mini Console">
                <Tooltip id="my-tooltip" />
                <img  className=' ' src="/src/assets/img14.jpeg" alt="miniconsole" />
                <img  className=' Sirv image-hover' src="/src/assets/img15.jpeg" alt="miniconsole" />
                <h1 className='absolute top-5 right-0 bg-[#ff8d6b] px-4 py-1 font-bold text-[#080b1b] ' style={{ fontSize: '12px'}}>PRE-ORDER</h1>
                <div className='pt-1'>
                  <div className='flex justify-between'>
                    <h1 className='font-bold text-xl'>MINI CONSOLE</h1>
                    <h1 className='text-[#6c757d] '>Sold Out</h1>
                  </div>
                  <h1 >Ideal for everyday shortcuts. Adaptable to any workflow.</h1>
                </div>
              </div>
              <div className='figure relative   mb-4  px-[calc(1rem*productIdx)]' data-tooltip-id="my-tooltip" data-tooltip-content="Audio Console">
                <Tooltip id="my-tooltip" />
                <img className=' '  src="/src/assets/img19.jpeg" alt="audioconsole" />
                <img  className=' Sirv image-hover' src="/src/assets/img11.jpeg" alt="audioconsole" />
                <h1 className='absolute top-5 right-0 bg-[#ff8d6b] px-4 py-1 font-bold text-[#080b1b] ' style={{ fontSize: '12px'}}>PRE-ORDER</h1>
                <div className='pt-1'>
                  <div className='flex justify-between'>
                    <h1 className='font-bold text-xl'>AUDIO CONSOLE</h1>
                    <h1 className='text-[#6c757d] '>Sold Out</h1>
                  </div>
                  <h1>Ideal for everyday shortcuts. Adaptable to any workflow.</h1>
                </div>
              </div>
              <div className='figure relative  mb-4  px-[calc(1rem*productIdx)]' data-tooltip-id="my-tooltip" data-tooltip-content="Photo Console">
                <Tooltip id="my-tooltip" />
                <img className=' '  src="/src/assets/img20.jpeg" alt="photoconsole" />
                <img  className=' Sirv image-hover' src="/src/assets/img10.jpeg" alt="photoconsole" />
                <h1 className='absolute top-5 right-0 bg-[#ff8d6b] px-4 py-1 font-bold text-[#080b1b] ' style={{ fontSize: '12px'}}>PRE-ORDER</h1>
                <div className='pt-1'>
                  <div className='flex justify-between'>
                    <h1 className='font-bold text-xl'>PHOTO CONSOLE</h1>
                    <h1 className='text-[#6c757d] '>Sold Out</h1>
                  </div>
                  <h1>Ideal for everyday shortcuts. Adaptable to any workflow.</h1>
                </div>
              </div>
              <div className='figure relative  mb-4  px-[calc(1rem*productIdx)]' data-tooltip-id="my-tooltip" data-tooltip-content="Video Console">
                <Tooltip id="my-tooltip" />
                <img className=' '  src="/src/assets/img23.jpeg" alt="videoconsole" />
                <img  className=' Sirv image-hover' src="/src/assets/img8.jpeg" alt="videoconsole" />
                <h1 className='absolute top-5 right-0 bg-[#ff8d6b] px-4 py-1 font-bold text-[#080b1b] ' style={{ fontSize: '12px'}}>PRE-ORDER</h1>
                <div className='pt-1'>
                  <div className='flex justify-between'>
                    <h1 className='font-bold text-xl'>VIDEO CONSOLE</h1>
                    <h1 className='text-[#6c757d] '>Sold Out</h1>
                  </div>
                  <h1>Ideal for everyday shortcuts. Adaptable to any workflow.</h1>
                </div>
              </div>
            </div> 
            <div className='figure relative    mb-4  px-[calc(1rem*productIdx)]' >
                <img className=' object-cover h-[300px]  md:h-[450px] w-full'  src="/src/assets/img22.png" alt="keyboard" />
                <img  className='Sirv image-hover object-cover h-[300px]  md:h-[450px] w-full' src="/src/assets/img30.jpeg" alt="videoconsole" />
                <h1 className='absolute top-5 right-0 bg-[#ff8d6b] px-4 py-1 font-bold text-[#080b1b] ' style={{ fontSize: '12px'}}>PRE-ORDER</h1>
                <div className='pt-1'>
                  <div className='flex justify-between'>
                    <h1 className='font-bold text-xl'>MONOGRAM KEYBOARD + MULTIPAD</h1>
                    <h1 className='text-[#6c757d] '>Sold Out</h1>
                  </div>
                  <h1>Ideal for everyday shortcuts. Adaptable to any workflow.</h1>
                </div>
            </div>
          </div>    
        </div>
        <div className='background-image2 bg-center bg-cover my-10  text-center pt-12'>
            <h1 className='text-4xl font-bold text-[#1a2456] pb-5'>CREATE YOUR OWN CONSOLE</h1>
            <h1 className='text-xl text-[#1a2456]'>Add-on to make it perfect.</h1>
        </div>
        <div class="pt-4 pb-8 lg:pb-20">
          <div className='max-w-screen-xl mx-auto px-4 lg:px-16 xl:px-24 justify-center '>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-8 gap-x-11 items-center ">
            {listes.map((liste, index) => (
            <div key={index} className='figure relative  mb-4  ' >
              <img className='uni object-cover'  src={liste.img} alt="keyboard" />
              <img  className='Sirv image-hover uni object-cover' src={liste.hov}  />
              <h1 className='absolute top-5 right-0 bg-[#ff8d6b] px-4 py-1 font-bold text-[#080b1b] '  style={{ fontSize: '12px'}} >{liste.t1}</h1>
              <div className='pt-1 flex justify-between'>
                <h1 className='text-[#1a2456] text-lg lg:text-xl font-bold '>{liste.t2}</h1>
                <h1 className='text-[#6c757d] '>{liste.t3}</h1>
              </div>
            </div>
            ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Shop