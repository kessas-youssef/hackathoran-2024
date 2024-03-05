import './Style/App.css'
import Form from './Pages/Form'
import { useState } from 'react'
import Home from './Pages/Home'
import Program from './Pages/Program'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OutletMain from './Pages/OutletMain'
import Prizes from './Pages/Prizes'


function App() {

  const [scroll, setScroll] = useState(90)
  const [scrollPerc, setScrollPerc] = useState(25)

  const router = createBrowserRouter([
    {
      path: '/', element: <OutletMain/>,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'timeline', element: <Program /> },
        { path: 'register', element: <Form /> },
        { path: 'prize', element: <Prizes /> },
      ]
    }]
  )

  function update() {
    if (scrollPerc < 40) {
      setScroll(Math.random() * 10 + 3 + scroll)
      setScrollPerc(scrollPerc + 5)
      document.documentElement.style.setProperty('--degree', scroll + 'deg')
      document.documentElement.style.setProperty('--percent', scrollPerc + '%')
    }
    else {
      setScroll(Math.random() * 10 + 3 + scroll)
      setScrollPerc(scrollPerc - 5)
      document.documentElement.style.setProperty('--degree', scroll + 'deg')
      document.documentElement.style.setProperty('--percent', scrollPerc + '%')
    }

  }

  document.addEventListener('scroll', update)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
