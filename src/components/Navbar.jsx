import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='max-w-7xl mx-auto bg-gray-200'>
            <div className='flex items-center justify-between h-5 p-6'>
                <h1 className='text-3xl font-medium'>A<span className='text-red-600 font-bold text-4xl'>s</span>hirwad</h1>
                <div className='flex items-center'>
                    <ul className='flex gap-12 font-semibold '>
                        <li className='hover:text-red-600'><Link to={'/'}>Home</Link></li>
                        <li className='hover:text-red-600'><Link to={'/about'}>About</Link></li>
                        <li className='hover:text-red-600'><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar