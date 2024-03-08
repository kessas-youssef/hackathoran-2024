import React, { useReducer, useState } from 'react'
import InputWrap from '../Components/InputWrap';
import FormReducer from '../Components/FormReducer';
import QrCode from '../Components/QrCode';

function Form() {


    const [user, dispatch] = useReducer(FormReducer, { name: '', age: '', phone: '', email: '', level: 'beginner', date: null })
    const [response, setResponse] = useState({ submit: false });
    const qrCodeText = response.content && `${response.content._doc.name} \n ${response.content._doc.email} \n Date: ${response.content._doc.date} \n ${response.content._doc.level} \n  Centre des Loisirs Scientifiques CLS
    USTO HLM Coop. Météo` 

    // Event Handlers
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const res = await fetch('https://hackathoran-2024-backend.onrender.com/api/addUser',
            // const res = await fetch('http://localhost:3030/api/addUser',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        )

        const data = await res.json()
        setResponse({ submit: true, ...data });
    }

    const nameHandler = (e) => dispatch({ type: 'name', nextVal: e.target.value })
    const ageHandler = (e) => dispatch({ type: 'age', nextVal: e.target.value })
    const phoneHandler = (e) => dispatch({ type: 'phone', nextVal: e.target.value })
    const emailHandler = (e) => dispatch({ type: 'email', nextVal: e.target.value })
    const levelHandler = (e) => dispatch({ type: 'level', nextVal: e.target.value })
    const dateHandler = () => dispatch({ type: 'date', nextVal: new Date() })

    return (
        !response.submit
        &&
        <form action="POST" onSubmit={formSubmitHandler} className={`bg-white flex flex-col justify-center items-center space-y-8 p-10 rounded-md`}>
            <h2 className='mb-5 text-xl font-bold'>Get your free E-Ticket NOW!</h2>
            <InputWrap>
                <label htmlFor="fname">Full Name</label>
                <input id='fname' type="text" required placeholder='Ex: Amar Benamar' onChange={nameHandler} />
            </InputWrap>

            <InputWrap>
                <label htmlFor="age">Age</label>
                <input id='age' type="number" required min={10} max={40} onChange={ageHandler} />
            </InputWrap>

            <InputWrap>
                <label htmlFor="email">E-mail</label>
                <input id='email' type="email" required placeholder='Ex: hack@code.win' onChange={emailHandler} />
            </InputWrap>

            <InputWrap>
                <label htmlFor="phone" className='text-left ' >Phone Number</label>
                <input id='phone' type="phone" required maxLength={10} minLength={10} placeholder='Ex: 07xxxxxxxx' onChange={phoneHandler} />
            </InputWrap>

            <InputWrap>
                <label htmlFor="level" className='text-left'  >Programming skills</label>
                <select id='level' defaultValue={'beginner'} onChange={levelHandler}>
                    <option value="beginner" >Beginner</option>
                    <option value="amateur">Amateur</option>
                    <option value="skilled">Skilled</option>
                </select>
            </InputWrap>

            <InputWrap>
                <input id='condition' type="checkbox" required className='appearance-none border-none w-4 h-4 checked:bg-[#2c6b9e] outline-2 outline outline-offset-2  outline-purple-700' />
                <label htmlFor="condition" className='hover:cursor-pointer'>I agree to bring my personal laptop*</label>
            </InputWrap>

            <button type="submit" className={`submitBtn ${response.submit ? 'invisible' : ''} invalid:border-red-700`} onClick={dateHandler}>Let's HACK !</button>
        </form>
        ||
        <div className='flex flex-col items-center justify-center p-10 space-y-8 bg-white rounded-md'>
            <h2 className={'font-extrabold' + ' ' + (response.isError === true ? 'text-red-400' : '')}>{response.message}</h2>

            {
                response.content
                &&
                <QrCode qrCodeText={qrCodeText} userEmail={response.content.email} isBtn={true} />
            }
            <button className='p-2 border-none submitBtn invalid:border-red-700' onClick={() => setResponse({ ...response, submit: false })}>Back to register</button>
        </div>
    )
}

export default Form
