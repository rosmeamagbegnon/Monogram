import React from 'react'
import { FaApple, FaWindows } from 'react-icons/fa';
function CreatorBeta() {
  return (
    <div className="bg-[#efc2b3] text-[#1a2456] py-16 justify-center flex flex-col items-center ">
        <h1 className='font-bold text-center text-3xl'>CREATOR BETA</h1>
        <div className='text-center w-[200px] md:w-[500px] mx-auto py-5 space-y-5'>
          <p className=''>Get access to an exclusive technical preview of Monogram Creator. Help shape our next generation of software by sharing feedback, bug reports, and feature requests.</p>
          <p>Creator Beta can be installed alongside the standard Monogram Creator, but we do recommend peridodically saving your profiles just in case.</p>
          <p>Thank you for joining us in creating something wonderful for creatives around the world.</p>
        </div>
        <div className='justify-center flex flex-wrap gap-x-16 gap-y-8 pb-12'>
          <div className='space-y-4 justify-center flex  flex-col items-center'>
            <FaApple size={80} color="#1a2456" />
            <h1>macOS 12+</h1>
            <button className='px-6 py-3 rounded-3xl bg-[#1a2456] text-[#f8f9fa] font-medium'  >MAC DOWNLOAD</button>
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

export default CreatorBeta