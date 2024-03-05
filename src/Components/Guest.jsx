import React from 'react'

function Guest({ id, name, picture, details }) {
    const isEven = id % 2 ? true : false;
    const className = { img: 'w-1/6 sm:w-1/4 rounded-full', div: 'text-white', h2: 'text-xl sm:text-3xl', p:'text-xs sm:text-base' }
    return (
        <div className='flex justify-center items-center gap-7'>
            {!isEven
                &&
                <>
                    <img src={picture} alt={`Guest ${name} Picture`} className={className.img} />
                    <div className={className.div}>
                        <h2 className={className.h2}>{name}</h2>
                        <p className={className.p}>{details}</p>
                    </div>
                </>
            }
            {isEven
                &&
                <>
                    <div className={className.div}>
                        <h2 className={className.h2}>{name}</h2>
                        <p className={className.p}>{details}</p>
                    </div>
                    <img src={picture} alt={`Guest ${name} Picture`} className={className.img} />
                </>
            }
        </div>
    )
}

export default Guest