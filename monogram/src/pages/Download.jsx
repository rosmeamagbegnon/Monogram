import React, { useState } from 'react';
import MonogramCreator from '../components/MonogramCreator.jsx';
import CreatorBeta from '../components/CreatorBeta.jsx'; // Vérifiez ce chemin
import CreatorAlpha from '../components/CreatorAlpha.jsx'; // Vérifiez ce chemin

function Download() {
    const sections = [
        { id: 'section1', content: <MonogramCreator /> },
        { id: 'section2', content: <CreatorBeta /> },
        { id: 'section3', content: <CreatorAlpha /> },
    ];
    
    const [visibleSection, setVisibleSection] = useState('section1');
    
    const showSection = (sectionId) => {
        setVisibleSection(sectionId);
    };

    return (
        <section className=''>
            <div className='background-image3 pt-48 pl-2 md:pl-36 lg:pl-48 '>
                <h1 className='text-6xl font-bold text-[#f0efed] pb-4 ' style={{fontSize : '44px'}}>MONOGRAM CREATOR</h1>
                <h1 className='text-3xl w-20 md:w-auto text-[#f0efed] font-thin'>SOFTWARE DOWNLOADS</h1>
            </div>
            <div className='flex justify-center items-center flex-col mb-12'>
                <div className='text-[#1a2456] my-6 py-4 justify-center flex gap-y-4 border-[#8796a4] border-b-2 border-t-2 w-11/12 md:w-3/4'> {/* Définissez la largeur ici */}
                    <button className=' border-[#8796a4] border-r-2 px-5 py-1 ' onClick={() => showSection('section1')}>MONOGRAM CREATOR</button>
                    <button className='px-5' onClick={() => showSection('section2')}>CREATOR BETA</button>
                    <button className=' border-[#8796a4] border-l-2 px-5 py-1 ' onClick={() => showSection('section3')}>CREATOR ALPHA</button>
                </div>
                <div className='w-11/12 md:w-3/4'>
                    {sections.find(section => section.id === visibleSection)?.content}
                </div>
            </div>
        </section>
    );
}

export default Download;
