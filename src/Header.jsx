import React from 'react'
import owbLogo from './assets/logo-no-background.svg'
import assocLogo from './assets/assoc_logo.jpg'

function Header() {
    return (
        <header className='flex justify-evenly items-center h-[200px] '>
           <img  className='w-1/6' src={owbLogo} alt="Logo OWB" />
            <div >
                <h1 className='text-[#04ffff] font-Press_Start_2P'>HACKATH<span className='text-[#00b8fd] '>ORAN</span></h1>
                <h2 className='date text-center font-extrabold tracking-widest font-["Vibur"] text-xl'>March 9 مارس</h2>
            </div>
           <div className='w-1/6'><img className='w-1/2 rounded-full' src={assocLogo} alt="Logo Assoc. Khatawat Moustakbal" /></div>
            
        </header>
    )
}

export default Header