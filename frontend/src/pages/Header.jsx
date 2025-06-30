import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    return (
        <div className='bg-gradient-to-r from-fuchsia-500 to-fuchsia-900 fixed top-0 left-0 right-0 z-10 flex text-2xl px-9 py-4 shadow-xl items-center justify-between'>

            <div className='font-semibold text-white/90 hover:opacity-75'>
                <NavLink to='/cafeteria'>
                    DBIT eats
                </NavLink>
            </div>

            <div className='flex items-center justify-center gap-x-3'>
                <div>
                    <NavLink to='/history'>
                        <img src="/history.png" className='w-6 hover:opacity-75' />
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/checkout'>
                        <img src="/cart.png" className='w-8 hover:opacity-75' />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header