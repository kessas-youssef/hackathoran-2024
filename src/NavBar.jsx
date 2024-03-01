import React from 'react'
import { NavLink } from 'react-router-dom'
import waveArrowLeft from './assets/wave-arrow-left.svg'
import waveArrowRight from './assets/wave-arrow-right.svg'

function NavBar() {
    const styleBtn = 'text-white [text-shadow:_1px_1px_10px_#00b8fd] [text-shadow:_0_0px_5px_#eeff00] font-bold'
  return (
    <nav className='flex justify-center items-center gap-5 min-h-24'>
        <img src={waveArrowRight} alt="Wave arrow right" className='navArrow w-10 '/>
        <NavLink to={'home'} className={({isActive}) => isActive ? `${styleBtn}`:'text-white'}>Home</NavLink>
        <NavLink to={'timeline'} className={({isActive}) => isActive ? `${styleBtn}`:'text-white'}>Schedule</NavLink>
        <NavLink to={'register'} className={({isActive}) => isActive ? `${styleBtn}`:'text-white'}>Register</NavLink>
        <img src={waveArrowLeft} alt="Wave arrow left" className='navArrow w-10'/>
    </nav>
  )
}

export default NavBar