import React from 'react'
import Categories from '../components/Categories'
import Vid from '../components/Vid'
function Video() {
  return (
    <div className='mt-20 justify-center flex flex-col items-center'>
      <Categories/>
      <Vid/>
      <div className='space-y-3 text-[#1a2456] w-3/4'>
            <div className='space-y-1'>
                <div className='flex justify-between  items-start hover:underline'>
                    <h1 className='uppercase  font-bold text-3xl   '>Celebrating a Decade of Software</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>1 min read</h1>
                    <h1>Celebrating a Decade of Software</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex justify-between items-start hover:underline'>
                    <h1 className='uppercase  font-bold text-3xl   '>Celebrating a Decade of Monogram</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>1 min read</h1>
                    <h1>A look into Monogram’s journey over the years</h1>
                </div>
            </div>
            <div className='space-y-1'>
                <div className='flex justify-between  items-start hover:underline'>
                    <h1 className='uppercase  font-bold text-3xl  '>Monogram Selected Winner of Core77 Design Awards</h1>
                    <img src="/src/assets/img51.svg" alt="La suite" />
                </div>
                <div>
                    <h1 className='uppercase font-bold'>1 min read</h1>
                    <h1 >Learn what a creator profile is, what it does, and how you can exchange profiles with other creatives in the Monogram community!</h1>
                </div>
            </div>
            <div className='flex space-x-1 items-center hover:underline'>
                <h1 className='uppercase font-bold text-xl'>See all</h1>
                <img className='h-5' src="/src/assets/img51.svg" alt="La suite" />
            </div>
      </div>
    </div>
  )
}

export default Video