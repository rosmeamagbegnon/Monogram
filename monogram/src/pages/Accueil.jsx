import React from 'react'

function Accueil() {
  
  return (
    <div>
        
      <div className="relative h-screen overflow-hidden">
        <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: 'url("/src/assets/dark.jpeg")',
          
        }}
        />
        <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: 'url("/src/assets/light.webp")',
        
        }}
        />
        <div className='justify-center flex flex-col space-y-4 lg:space-y-8 text-[#ff8d6b]'>
          <h1 className='uppercase text-xl lg:text-2xl'>monogram</h1>
          <h1 className='uppercase text-2xl lg:text-4xl font-bold'>creative console</h1>
          <h1></h1>
        </div>
      </div>
      <div className=' text-white top-20 fixed right-2'>
            <ul className='uppercase'>
                <li>What is creative console?</li>
                <li>why monogram?</li>
                <li>meet the modules</li>
                <li>worflows</li>
                <li>software integrations</li>
                <li>our guarantee</li>
                <li>reviews</li>
            </ul>
      </div>
    </div>
  )
}

export default Accueil