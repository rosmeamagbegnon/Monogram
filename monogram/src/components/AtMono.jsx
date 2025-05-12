import React from 'react'

function AtMono() {
  return (
    <div className='flex flex-wrap justify-between space-y-2 space-x-12'>
        <a href="#">
            <div className='background-image5 '>
                <h1    style={{ fontSize: '26px'}} className='transparent2 text-[#f0efed] font-bold text-3xl text-center mx-auto  px-12 md:px-8'>INTRODUCING MONOGRAM KEYBOARD</h1>
            </div>
        </a>
        <div className='flex flex-col space-y-3 text-[#1a2456]'>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]'>Celebrating a Decade of Software</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>1 min read</h1>
                    <h1>Celebrating a Decade of Software</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]  '>Celebrating a Decade of Monogram</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>1 min read</h1>
                    <h1>A look into Monogram’s journey over the years</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]  '>How to set up and share creator profiles for your console</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>1 min read</h1>
                    <h1 className='w-auto md:w-[550px] '>Learn what a creator profile is, what it does, and how you can exchange profiles with other creatives in the Monogram community!</h1>
                </div>
            </div>
            <div className='flex space-x-1 items-center hover:underline hover:text-[#080b1b]'>
                <h1 style={{ fontSize: '20px'}} className='uppercase font-bold text-xl'>See all</h1>
                <img className='h-5' src="/src/assets/img51.svg" alt="La suite" />
            </div>
        </div>
    </div>
  )
}

export default AtMono