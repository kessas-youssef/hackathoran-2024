import React from 'react'
import Guest from './Guest'
import guerid from './assets/guests/guerid.jpg'

function Guests() {
    const guestsList = [
        { id: 0, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },
        { id: 1, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },
        { id: 2, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },
        { id: 3, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },

    ]
    return (
        <section className='space-y-7'>
            <h1 className='text-[#04ffff] font-Press_Start_2P sm:text-3xl'>Our <span className='text-[#00b8fd]'>Guest</span> Speakers</h1>

            {guestsList.map(guest => <Guest {...guest} />)}
        </section>
    )
}

export default Guests