import React from 'react'
import oneFinger from './assets/one-finger.svg'
import twoFinger from './assets/two-finger.svg'
import threeFinger from './assets/three-finger.svg'
import fourFinger from './assets/four-finger.svg'

function Banner() {
  return (

    <section className=' text-white [text-shadow:_1px_1px_10px_#00b8fd] [text-shadow:_0_0px_5px_#eeff00] -mt-14 w-full flex flex-col justify-center items-center gap-5 sm:gap-20'>
      <p className='font-Rock_Salt sm:text-5xl'>Wahran hacks!</p>

      <div className='flex gap-5 justify-center items-start'>
        <div className='flex gap-3 sm:gap-5 flex-col justify-center items-center'>
          <img src={oneFinger} alt="one Finger" className='w-5 sm:w-10 inline' />
          <img src={twoFinger} alt="two Finger" className='w-5 sm:w-10 inline' />
          <img src={threeFinger} alt="three Finger" className='w-5 sm:w-10 inline' />
          <img src={fourFinger} alt=" four Finger" className='w-5 sm:w-10 inline' />
        </div>
        <ul className='flex flex-col justify-center items-start text-xs sm:text-5xl gap-3 font-Ubuntu'>
          <li>Get your Digital Certificat </li>

          <li>Meet Coders from different Backgrounds</li>

          <li>Solve our challenging Algorithms</li>

          <li>Meet made in <span className='font-Press_Start_2P text-xs sm:text-2xl align-middle text-[#eeff00]'>&#60;Algeria&#47;&#62;</span> PhDs and Engineers</li>
        </ul>

      </div>
    </section>

  )
}

export default Banner