import React from 'react'
import InputWrap from './InputWrap';

function Form() {

    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form action="POST" onSubmit={formSubmitHandler} className='bg-white flex flex-col justify-center items-center space-y-8 p-10 rounded-md'>
            <h2 className='font-bold text-xl mb-5'>Get your free E-Ticket NOW!</h2>
            <InputWrap>
        <label htmlFor="fname">Full Name</label>
                <input id='fname' type="text" required placeholder='Ex: Youcef Kessas' />
            </InputWrap>

            <InputWrap>
        <label htmlFor="age">Age</label>
                <input id='age' type="number" required min={10} max={40} />
            </InputWrap>

            <InputWrap>
        <label htmlFor="email">E-mail</label>
                <input id='email' type="email" required placeholder='Ex: hack@code.win' />
            </InputWrap>

            <InputWrap>
        <label htmlFor="phone" className='text-left '>Phone Number</label>
                <input id='phone' type="phone" required placeholder='Ex: 07xxxxxxxx' />
            </InputWrap>
            
            <InputWrap>
        <label htmlFor="level" className='text-left'>Programming skills</label>
                <select id='level'>
                    <option value="beginner">Beginner</option>
                    <option value="amateur">Amateur</option>
                    <option value="skilled">Skilled</option>
                </select>
            </InputWrap>

            <InputWrap>
                <input id='condition' type="checkbox" required className='appearance-none border-none w-4 h-4 checked:bg-[#2c6b9e] outline-2 outline outline-offset-2  outline-purple-700'/>
                <label htmlFor="condition" className='hover:cursor-pointer'>I agree to bring my personal laptop*</label>
            </InputWrap>



            <button type="submit" className='submitBtn invalid:border-red-700 vali'>Let's HACK !</button>
        </form>
    )
}

export default Form