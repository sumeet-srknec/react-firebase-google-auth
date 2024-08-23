import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({children}) {
  return (
    <div>
        <nav className='flex items-center gap-x-4'>
            <Link to="/" className='text-blue-500 hover:text-blue-700'>Home</Link>
            <Link to="/create-user" className='text-blue-500 hover:text-blue-700'>Register</Link>
            <Link to= "/login" className='text-blue-500 hover:text-blue-700'>Login</Link>
        </nav>
        {children}
    </div>
  )
}
