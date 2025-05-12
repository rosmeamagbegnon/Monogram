import React from 'react'

function Vid() {
  return (
    <div className='flex flex-wrap justify-between space-y-2 space-x-5 md:space-x-12'>
        <a href="#">
            <div className='background-image7 '>
                <h1 style={{ fontSize: '26px'}} className='transparent2 text-[#f0efed] font-bold text-3xl text-center mx-auto uppercase px-8 md:px-5 '>lv up with monogram: adobe première pro </h1>
            </div>
        </a>
        <div className='flex flex-col space-y-3 text-[#1a2456]'>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]  ' style={{ fontSize: '26px'}}>LV UP with Monogram: Final Cut Pro</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>3 min read</h1>
                    <h1 className='w-auto md:w-[530px] '>Use Color Wheels, Color Boards, Navigation and Clip Motion in Final Cut Pro.</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-5 md:space-x-12'>
                    <h1 className='uppercase  font-bold text-3xl w-[300px] md:w-[450px]'style={{ fontSize: '26px'}}>Creator Interview #8: Landon Bytheway</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>3 min read</h1>
                    <h1  className='w-auto md:w-[530px] '>A talented creator with an innovative storytelling style that captivates his audience and brands with his creativity.</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex  items-start hover:underline hover:text-[#080b1b] space-x-12'>
                    <h1 className='uppercase  font-bold text-3xl  w-[300px] md:w-[450px]  'style={{ fontSize: '26px'}}>Creator Interview #7: Sven Pape</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>4 min read</h1>
                    <h1  className='w-auto md:w-[530px] '>Sven’s experience in the Film Editing industry has an impressive track record in big name movies and TV shows. You don’t want to miss what he has to say!</h1>
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

export default Vid