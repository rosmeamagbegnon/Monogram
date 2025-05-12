import React from 'react'
import Categories from '../components/Categories'
import AtMono from '../components/AtMono'
import Photod from '../components/Photod'
import Vid from '../components/Vid'
import Aud from '../components/Aud'
import Prod from '../components/Prod'
function Blog() {
  return (
    <section className='bg-[#f0efed]'>
        <div className='background-image4 '>
            <div className=' transparent justify-center flex flex-col items-center text-center text-[#f0efed] '>
                <h1 className='text-4xl font-bold'>THE MONOGRAM PRESS</h1>
                <h1 className='pt-5'>Become a better creative. Product updates, in-depth articles about Monogram and the latest news.</h1>
            </div>
        </div>
        <div className='justify-center flex flex-col items-center pb-8 lg:pb-20'>
            
            <Categories className="max-w-screen-xl"/>
            <div className='flex flex-col justify-center space-y-28 mt-4'>
                <div className='max-w-screen-xl mx-auto '>
                    <h1 className='text-[#1a2456] font-bold text-3xl pb-2'>AT MONOGRAM</h1>
                    <AtMono/>
                </div>
                <div className='max-w-screen-xl mx-auto '>
                    <h1 className='uppercase text-[#1a2456] font-bold text-3xl pb-2'>photo</h1>
                    <Photod/>
                </div>
                <div className='max-w-screen-xl mx-auto '>
                    <h1 className='uppercase text-[#1a2456] font-bold text-3xl pb-2'>video</h1>
                    <Vid/>
                </div>
                <div className='max-w-screen-xl mx-auto '>
                    <h1 className='uppercase text-[#1a2456] font-bold text-3xl pb-2'>audio</h1>
                    <Aud/>
                </div>
                <div className='max-w-screen-xl mx-auto '>
                    <h1 className='uppercase text-[#1a2456] font-bold text-3xl pb-2'>product</h1>
                    <Prod/>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Blog