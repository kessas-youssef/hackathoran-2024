import React from 'react'
import oneFinger from './assets/one-finger.svg'
import twoFinger from './assets/two-finger.svg'
import threeFinger from './assets/three-finger.svg'

function Banner() {
  return (
    // <section className='w-full h-80 rounded-full border-4 border-black flex flex-col justify-center items-center'>
        <div className=' text-white [text-shadow:_1px_1px_10px_#00b8fd] [text-shadow:_0_0px_5px_#eeff00] -mt-20 w-full h-[30vw] rounded-2xl flex flex-col justify-center items-center gap-10 '>
            <p className='font-Rock_Salt text-5xl'>Wahran hacks!</p>
            
            <p className='text-5xl leading-loose font-Ubuntu'>Welcoming and Inclusive space for Coders <img src={oneFinger} alt="one Finger" className='w-10 inline' />
            <br /> 
            Marginalized identities in technology<img src={twoFinger} alt="two Finger" className='w-10 inline' />
            <br />
            Help grow <span className='font-Press_Start_2P text-2xl text-[#eeff00]'>&#60;Algeria&#47;&#62;</span> of tomorrow <img src={threeFinger} alt="three Finger" className='w-10 inline' /></p>
        </div>
    // </section>
  )
}

export default Banner