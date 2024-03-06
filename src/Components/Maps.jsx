import React from 'react'

function Maps() {
    const className = { li: 'flex flex-col justify-center items-center gap-2 text-center', h3: 'font-bold', p: 'text-left before:content-["a"] before:invisible' };
    return (
        <section className='space-y-10 text-white'>
            <h1 className='text-[#04ffff] font-Press_Start_2P sm:text-3xl '>Place  of <span className='text-[#00b8fd]'>HACKATHORAN</span></h1>

            <ul className='space-y-7 sm:text-xl'>
                
                <li className={className.li}>
                    <h3 className={className.h3}>Centre des Loisirs Scientifiques Oran</h3>
                    <p className={className.p}>Click <a target='blank' href='https://maps.app.goo.gl/ZEDgDpoyNdkrWfpf8' className='text-[#00b8fd] cursor-pointer hover:font-bold hover:text-white'>"HERE"</a> for our precise location.</p>
                </li>                
            </ul>
        </section>
    )
}

export default Maps