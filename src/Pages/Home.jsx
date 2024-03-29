import React from 'react'
import oneFinger from '../assets/one-finger.svg'
import twoFinger from '../assets/two-finger.svg'
import threeFinger from '../assets/three-finger.svg'
import fourFinger from '../assets/four-finger.svg'
import Guests from '../Components/Guests'
import Maps from '../Components/Maps'

function Banner() {
  const className = { li: 'flex justify-center items-center gap-5 text-left'}
  return (
    <>
      <section className=' flex flex-col justify-center items-center gap-5 text-white [text-shadow:_1px_1px_10px_#00b8fd] [text-shadow:_0_0px_5px_#eeff00] -mt-14 w-full sm:gap-20'>
        <p className='font-Rock_Salt sm:text-5xl'>Wahran hacks!</p>
        <ul className='flex flex-col items-start justify-center gap-3 text-xs sm:text-5xl font-Ubuntu'>
          <li className={className.li}>
            <img src={oneFinger} alt="one Finger" className='inline w-5 sm:w-10' />
            <p>
              Get your Coding Digital Certificat
            </p>
          </li>

          <li className={className.li}>
            <img src={twoFinger} alt="two Finger" className='inline w-5 sm:w-10' />
            <p>
              Meet Coders from different Backgrounds
            </p>
          </li>

          <li className={className.li}>
            <img src={threeFinger} alt="three Finger" className='inline w-5 sm:w-10' />
            <p>
              Solve our challenging Algorithms
            </p>
          </li>

          <li className={className.li}>
            <img src={fourFinger} alt=" four Finger" className='inline w-5 sm:w-10' />
            <p>
              Meet made in <span className='font-Press_Start_2P text-xs sm:text-2xl align-middle text-[#eeff00]'>&#60;Algeria&#47;&#62;</span> PhDs and Engineers
            </p>
          </li>
        </ul>
      </section>

      <Guests />

      <Maps/>
    </>

  )
}

export default Banner