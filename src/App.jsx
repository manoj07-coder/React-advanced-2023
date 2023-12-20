import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom'
import Home from '../tutorial/11-react-router/Home'
import About from '../tutorial/11-react-router/About'
import Nav from '../tutorial/11-react-router/Nav'
import People from '../tutorial/11-react-router/People'
import Error from '../tutorial/11-react-router/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Nav />} >
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/people' element={<People />} />
    </Route>
  )

)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App