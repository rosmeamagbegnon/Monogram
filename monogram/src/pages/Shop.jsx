import React from 'react'
import Ancre from '../components/Ancre.jsx';
function Shop() {
  return (
    <section className='bg-[#f0efed] '>
        <div className="   background-image1">
            <div className="justify-center flex flex-col text-center background-transparent">
                <h1 className="w-80 md:w-96 mx-auto text-4xl font-bold text-[#ffc4b2]">A CONSOLE FOR EVERY WORKFLOW</h1>
                <h1 className="pt-5 text-[#ffc4b2]" >Discover the perfect console for yours</h1>
                <Ancre/>
            </div>
            
        </div>
        <div id="next" className='flex flex-col items-center space-y-6 justify-center pt-5 lg:pt-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center '>
           
              <img className='w-[300px] lg:w-[600px] hover-image ' src="/src/assets/img14.jpeg" alt="miniconsole" />
                                                                            
            
            <img className='w-[300px] lg:w-[600px] '  src="/src/assets/img19.jpeg" alt="creativeconsole1" />
            <img className='w-[300px] lg:w-[600px] '  src="/src/assets/img20.jpeg" alt="creativeconsole2" />
            <img className='w-[300px] lg:w-[600px] '  src="/src/assets/img23.jpeg" alt="creativeconsole3" />
          </div>
          <img className='h-auto w-auto   ' src="/src/assets/img22.png" alt="keyboard" />  
        </div>
        <div className='background-image2 my-10  text-center pt-14'>
            <h1 className='text-4xl font-bold text-[#1a2456] pb-5'>CREATE YOUR OWN CONSOLE</h1>
            <h1 className='text-lg text-[#1a2456]'>Add-on to make it perfect.</h1>
        </div>
    </section>
  )
}

export default Shop