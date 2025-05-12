import React from 'react'

function Photod() {
  return (
    <div className='flex flex-wrap justify-between space-y-2 space-x-12'>
        <a href="#">
            <div className='background-image6 '>
                <h1 className='transparent2 text-[#f0efed] font-bold text-3xl text-center mx-auto uppercase px-12 md:px-8 '    style={{ fontSize: '26px'}}>lv up with monogram: photoshop uxp</h1>
            </div>
        </a>

        <div className='flex flex-col space-y-3 text-[#1a2456]'>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]  '>LV UP with Monogram: Lightroom Classic</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>2 min read</h1>
                    <h1>Use Lightroom Classic Color Grading and Masking</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px] '>Creator Interview #5: Taylor Jackson</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>2 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>With years of experience, Taylor Jackson is the person to follow for all things wedding photography.</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl w-[300px] md:w-[450px] '>Creator Interview #4: Uri Segura</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>2 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>Uri Segura is a Barcelona based freelance photographer and visual storyteller sharing his journey into the creative space.</h1>
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

export default Photod