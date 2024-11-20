import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/about',
        element:<About/>
    }
])

function App() {
  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default App