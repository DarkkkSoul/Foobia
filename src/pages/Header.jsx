import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    return (
        <div className='bg-white my-6 sticky top-6 z-10 flex text-xl px-2 py-4 shadow-2xl rounded-xl justify-around mx-8 border-fuchsia-800 border-2 items-center'>
            <NavLink to='/'>
                <img src="/foodImages/home.png" className='w-9' />
            </NavLink>
            <div className='font-semibold text-fuchsia-800'>
                DBIT eats
            </div>
            <NavLink to='/checkout'>
                <img src="/foodImages/cartt.png" className='w-9' />
            </NavLink>
        </div>
    )
}

export default Header