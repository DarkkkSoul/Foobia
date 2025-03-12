import React from 'react'
import CafeteriaFood from './CafeteriaFood'
import { NavLink } from 'react-router'

function Cafeteria() {
    return (
        <div className='flex items-center justify-center h-screen w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 h-170 flex flex-col '>
                <div className='text-center text-white pt-6 text-xl font-bold'>What's your option?</div>
                <div className='grid grid-cols-2 gap-y-3 justify-items-center my-5'>
                    <CafeteriaFood food='Samosa' price='20' />
                    <CafeteriaFood food='Egg Puff' price='20' />
                    <CafeteriaFood food='Vada Pav' price='20' />
                    <CafeteriaFood food='Sandwich' price='40' />
                </div>
                <NavLink to='/' className="text-white text-center hover:text-fuchsia-200">Go to Home</NavLink>
            </div>

        </div >
    )
}

export default Cafeteria