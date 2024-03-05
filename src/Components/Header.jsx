import React from 'react'
import owbLogo from '../assets/owb/logo-no-background.svg'
import owbGlobe from '../assets/owb/logo-globe-color.svg'
import assocLogo from '../assets/assoc_logo.jpg'
import NavBar from './NavBar'

function Header() {

    return (
        <header>
            <div className='w-full flex justify-between items-start sm:items-center'>
    
                <div className='w-1/3 flex justify-center sm:hidden'><img src={owbGlobe} loading="lazy" alt="Oran Web Brains Logo" className="w-1/2 flex justify-center" /></div>
    
                <div className='w-1/3 flex justify-center max-sm:hidden'><img src={owbLogo} loading="lazy" alt="Oran Web Brains Logo" className="w-1/2 " /></div>
    
                <div className='flex flex-col justify-center sm:text-3xl'>
                    <h1 className='text-[#04ffff] font-Press_Start_2P'>HACKATH<span className='text-[#00b8fd] '>ORAN</span></h1>
                    <h2 className='date text-center font-extrabold tracking-widest font-["Vibur"]'>March 9 مارس</h2>
                </div>
    
                <div className='w-1/3 flex justify-center'><img className='sm:w-1/5 w-1/2 rounded-full' src={assocLogo} alt="Logo Assoc. Khatawat Moustakbal" /></div>
    
            </div>
            <NavBar/>
        </header>
    )
}

export default Header