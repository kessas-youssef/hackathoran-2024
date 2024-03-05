import React from 'react'

function Program() {
    const className = { li: 'flex flex-col justify-center items-start gap-2', h3: 'font-bold', p: 'text-left before:content-["a"] before:invisible' };
    return (
        <section className='space-y-10 text-white'>
            <h1 className='text-[#04ffff] font-Press_Start_2P sm:text-3xl '>Our <span className='text-[#00b8fd]'>Hackathon</span> Stages</h1>

            <ul className='space-y-7 sm:text-xl'>
                
                <li className={className.li}>
                    <h3 className={className.h3}>Checking-In (8h30):</h3>
                    <p className={className.p}>Participants arrive and Scan their E-Ticket to check-in and join a team.</p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>Opening ceremony (9h30):</h3>
                    <p className={className.p}>Welcoming participants and introducing HACKATHORAN 2024.</p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>Guest Speakers (9h45):</h3>
                    <p className={className.p}>Valuable words from our PhDs and Engineers guests.</p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>1st coding stage: (10h15):</h3>
                    <p className={className.p}>Teams get assigned randomly a coding challenge to work on for 45 minutes.</p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>1st Assessment (11h00):</h3>
                    <p className={className.p}>Each team submit their progression and receive mentorship and tips for the second session.</p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>Coffee break (11h30):</h3>
                    <p className={className.p}>A Well earned break to chat and make new acquaintances.</p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>2nd coding stage (12h00):</h3>
                    <p className={className.p}>Teams resume their project and try to end it in 30 minutes. </p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>Final Assessment (12h30):</h3>
                    <p className={className.p}>Projects are submitted to be assessed and pick our HACKATHON 2024 winners.</p>
                </li>
                <li className={className.li}>
                    <h3 className={className.h3}>Closing ceremony (13h00):</h3>
                    <p className={className.p}>Final Word of the organizers and Ciao!</p>
                </li>
            </ul>
        </section>
    )
}

export default Program