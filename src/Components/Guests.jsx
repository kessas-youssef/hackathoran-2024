import React from 'react'
import Guest from './Guest'

function Guests() {
    const guestsList = [
        { id: 0, name: 'Hachem Guerrid', picture: '/src/assets/guests/guerid.jpg', details: "PhD, Cyber Security | University Professor" },
    ]
    return (
        <section className='space-y-10'>
            <h1 className='text-[#04ffff] font-Press_Start_2P sm:text-3xl'>Our <span className='text-[#00b8fd]'>Guest</span> Speaker{guestsList.length>1 && 's'}</h1>
            <ul className='flex gap-7 justify-center items-center flex-wrap'>
            {guestsList.map(guest => <Guest key={guest.id} {...guest} />)}
            </ul>
        </section>
    )
}

export default Guests