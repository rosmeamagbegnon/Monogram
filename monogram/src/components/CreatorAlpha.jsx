import React from 'react'

function CreatorAlpha() {
  return (
    <div className="bg-[#efc2b3] text-[#1a2456] py-16 justify-center flex flex-col items-center ">
        <h1 className='font-bold text-center text-3xl'>CREATOR ALPHA</h1>
        <div className=' w-[200px] md:w-[500px] mx-auto py-5 space-y-5'>
          <p className=''>Join our Alpha Tester program to be on the bleeding edge and get access to an exclusive preview of Monogram Creator. Help shape our next generation of software by sharing feedback, bug reports, and feature requests.</p>
          <p>Each Alpha update may introduce big changes and, inevitably, a few bugs as well. Creator Alpha is intended as a technical preview and is not suitable for use in production. It is intended to be slightly "less stable" than Beta, if you will.</p>
          <p>If you are interested in joining us to create something wonderful for creatives around the world, please sign up below to receive Creator Beta:</p>
        </div>
        <form className='justify-center flex flex-wrap flex-col space-y-4 w-auto md:w-[500px] text-[#1a2456]'>
          <div>
            <h1 className='pb-4 '>Your Email Adress</h1>
            <input type="email" placeholder='Email adress' className='border-2 border-[#1a2456]'/>
          </div>
          <div className='flex flex-wrap justify-between'>
            <div>
              <h1 className='pb-4'>Given Name</h1>
              <input type="text" placeholder='Given Name' className='border-2 border-[#1a2456]'/>
            </div>
            <div>
              <h1 className='pb-4'>Surname</h1>
              <input type="text" placeholder='Surname ' className='border-2 border-[#1a2456]'/>
            </div>
          </div>
          <div>
            <h1 className='pb-4'>Country</h1>
            <input type="text" placeholder='Country' className='border-2 border-[#1a2456]'/>
          </div>
          <div className='flex flex-col space-y-2'>
            <p>Get notified when new Monogram software launches:</p>
            <label>
              <input type="checkbox" /> Creator Stable
            </label>
            <label>
              <input type="checkbox" />Creator Beta
            </label>
            <label>
              <input type="checkbox" />Creator Alpha
            </label>
          </div>
        </form>
        <a className='underline text-center pt-5' href="#">Release Notes</a>
    </div>
  )
}

export default CreatorAlpha