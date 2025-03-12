import React from 'react'
import { NavLink } from 'react-router'
import CanteenFood from './CanteenFood'

function Canteen() {
    return (
        <div className='flex items-center justify-center h-screen w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 h-170 flex flex-col '>
                <div className='text-center text-white pt-6 text-xl font-bold'>What's your choice?</div>
                <div className='grid grid-cols-2 gap-y-3 justify-items-center my-5'>
                    <CanteenFood food='Meals' price='60' />
                    <CanteenFood food='Chappati' price='40' />
                    <CanteenFood food='Curd Rice' price='40' />
                </div>
                <NavLink to='/' className="text-white text-center hover:text-fuchsia-200">Go to Home</NavLink>
            </div>

        </div >
    )
}

export default Canteen