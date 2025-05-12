import React from 'react'
import { FaApple, FaWindows } from 'react-icons/fa';
function MonogramCreator() {
  return (
    <div className="bg-[#efc2b3] text-[#1a2456] py-16 justify-center flex flex-col items-center ">
        <h1 className='font-bold text-center text-3xl'>MONOGRAM CREATOR</h1>
        <p className='text-center w-[200px] md:w-[500px] mx-auto py-5'>Want to try the latest features and help improve app performance? Sign up for the Monogram Creator Beta program <span className='underline'>here</span> .</p>
        <div className='justify-center flex flex-wrap gap-x-16 gap-y-8 pb-12'>
          <div className='space-y-4 justify-center flex flex-col items-center'>
            <FaApple size={80} color="#1a2456" />
            <h1>macOS 12+</h1>
            <button className='px-6 py-3 rounded-3xl bg-[#1a2456] text-[#f8f9fa] font-medium'>MAC DOWNLOAD</button>
          </div>
          <div className='space-y-4 justify-center flex flex-col items-center'>
            <FaWindows size={80} color="#1a2456" />
            <h1>Windows 10, 64 bit</h1>
            <button className='px-6 py-3 rounded-3xl bg-[#1a2456] text-[#f8f9fa] font-medium'>WINDOWS DOWNLOAD</button>
          </div>
        </div>
        <a className='underline text-center' href="#">Release Notes</a>
    </div>
  )
}

export default MonogramCreator