import React from 'react'

function Aud() {
  return (
    <div className='flex flex-wrap justify-between space-y-2 space-x-12'>
        <a href="#">
            <div className='background-image8 '>
                <h1    style={{ fontSize: '26px'}} className='transparent2 text-[#f0efed] font-bold text-3xl text-center mx-auto uppercase px-12 md:px-8 '>the top 5 most common uses of slider</h1>
            </div>
        </a>
        <div className='flex flex-col space-y-3 text-[#1a2456]'>
        <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]'>Creator Interviews #6: Sanjay C</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>2 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>Sanjay is a skilled music producer with a YouTube channel dedicated to all things music production.</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]'>LV UP with Monogram: Logic Pro X</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>2 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>Use Transport Controls, Smart Controls, and Orbiter Module in Logic Pro X</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px] '>LV UP with Monogram: Spitfire Audio and MIDI Automation</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>1 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>How to use Monogram with Spitfire Audio and MIDI Automation</h1>
                </div>
            </div>
            <div className='flex space-x-1 items-center hover:underline hover:text-[#080b1b]'>
                <h1 style={{ fontSize: '20px'}} className='uppercase font-bold text-xl'>See all</h1>
                <img className='h-4' src="/src/assets/img51.svg" alt="La suite" />
            </div>
        </div>
    </div>
  )
}

export default Aud