import React from 'react'

function Guest({ id, name, picture, details }) {
    const isEven = id % 2 ? true : false;
    return (
        <div className='flex justify-center items-center gap-7'>
            {!isEven
                &&
                <><img src={picture} alt={`Guest ${name} Picture`} className='w-1/6 rounded-full' /><div className='text-white'>
                    <h2 className='text-2xl'>{name}</h2>
                    <p>{details}</p>
                </div>
                </>
            }
            {isEven
                &&
                <><div className='text-white'>
                    <h2 className='text-2xl'>{name}</h2>
                    <p>{details}</p>
                </div>
                    <img src={picture} alt={`Guest ${name} Picture`} className='w-1/6 rounded-full' />
                </>
            }
        </div>
    )
}

export default Guest