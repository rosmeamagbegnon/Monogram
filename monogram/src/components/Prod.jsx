import React from 'react'

function Prod() {
  return (
    <div className='flex flex-wrap justify-between space-y-2 space-x-12'>
        <a href="#">
            <div className='background-image9 '>
                <h1    style={{ fontSize: '26px'}} className='transparent2 text-[#f0efed] font-bold text-3xl text-center mx-auto  px-8 '>A LOOK BACK: PALETTE BEGINNINGS</h1>
            </div>
        </a>
        <div className='flex flex-col space-y-3 text-[#1a2456]'>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl  w-[300px] md:w-[450px]  '>Engineering Milestones and the Story Behind Action Keys</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>3 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>Designing Monogram Keyboard and Action Keys</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl  w-[300px] md:w-[450px]  '>The top 5 most common uses of Orbiter</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>2 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>A list of the top 5 most popular actions our users make with the Orbiter module in our integrated apps.</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 style={{ fontSize: '26px'}} className='uppercase  font-bold text-3xl  w-[300px] md:w-[450px]'>Monogram’s software development process - A look behind the curtain</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>2 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>Learn about what goes on behind the scenes and inner details of our software development process and sprints.</h1>
                </div>
            </div>
            <div className='flex space-x-1 items-center hover:underline hover:text-[#080b1b]'>
                <h1 className='uppercase font-bold text-xl' style={{ fontSize: '20px'}}>See all</h1>
                <img className='h-4' src="/src/assets/img51.svg" alt="La suite" />
            </div>
        </div>
    </div>
  )
}

export default Prod