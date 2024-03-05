import React from 'react'

function Prizes() {
    const className = { li: 'flex flex-col justify-center items-center gap-2', h3: 'font-bold', p: 'text-center' };
    return (
        <section className='space-y-10 text-white'>
            <h1 className='text-[#04ffff] font-Press_Start_2P sm:text-3xl '>Winners <span className='text-[#00b8fd]'>Prize</span> </h1>

            <ul className='space-y-7 sm:text-xl'>
                <li className={className.li}>
                    <h3 className={className.h3}>One team of 5 coders wins </h3>
                    <p className={className.p}>Winners become <span className='text-[#04ffff]'>MEMBERS</span> of <span className='text-[#00b8fd]'>Oran Web Brains</span> team !
                    They get the chance to learn and gain experience and have a top notch training in App Development and participate in real project for real clients.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Prizes