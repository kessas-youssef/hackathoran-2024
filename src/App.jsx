import './App.css'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'
import Guest from './Guest'

// Guests Pictures
import guerid from './assets/guests/guerid.jpg'
import Banner from './Banner'

function App() {
  const fakeset = [
    { name: 'Youcef Kessas', age: 21, email: 'cefyou2002@gmail.com', phone: 213783141085 },
    { name: 'Nadir Kessas', age: 21, email: 'cefyou2003@gmail.com', phone: 213783141085 },
    { name: 'Sidahmed Kessas', age: 21, email: 'cefyou2004@gmail.com', phone: 213783141085 }
  ]

  const guestsList = [
    { id: 0, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },
    { id: 1, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },
    { id: 2, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },
    { id: 3, name: 'Hachem Guerrid', picture: guerid, details: "PhD, Cyber Security | University Professor" },

  ]
  const [scroll, setScroll] = useState(90)
  const [scrollPerc, setScrollPerc] = useState(25)
  function update() {
    if (scrollPerc < 40) {
      setScroll( Math.random() * 10 + 3 + scroll)
      setScrollPerc(scrollPerc + 5)
      document.documentElement.style.setProperty('--degree', scroll + 'deg')
      document.documentElement.style.setProperty('--percent', scrollPerc + '%')
    }
    else {
      setScroll( Math.random() * 10 + 3 + scroll)
      setScrollPerc(scrollPerc - 5)
      document.documentElement.style.setProperty('--degree', scroll + 'deg')
      document.documentElement.style.setProperty('--percent', scrollPerc + '%')
    }

  }

  document.addEventListener('scroll', update)

  return (
    <>
      <Header />
      <Banner />

      <h1 className='text-[#04ffff] font-Press_Start_2P'>Our <span className='text-[#00b8fd] '>Guest</span> Speakers</h1>
      {guestsList.map(guest => <Guest {...guest} />)}
      <Form />

    </>
  )
}

export default App
