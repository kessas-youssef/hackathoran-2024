import './App.css'
import Header from './Header'
import Form from './Form'
import { useState } from 'react'
import Banner from './Banner'
import Guests from './Guests'

function App() {
  const fakeset = [
    { name: 'Youcef Kessas', age: 21, email: 'cefyou2002@gmail.com', phone: 213783141085 },
    { name: 'Nadir Kessas', age: 21, email: 'cefyou2003@gmail.com', phone: 213783141085 },
    { name: 'Sidahmed Kessas', age: 21, email: 'cefyou2004@gmail.com', phone: 213783141085 }
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
      <Guests/>
      
      <Form />

    </>
  )
}

export default App
