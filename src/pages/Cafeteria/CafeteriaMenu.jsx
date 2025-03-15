import React from 'react'
import CafeFoodGrid from './CafeFoodGrid'
import { NavLink } from 'react-router'
import { cafeFoods } from './cafeFoodInfo'

function Cafeteria() {
    return (
        <div className='flex items-center justify-center w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 min-h-170 flex flex-col '>
                <div className='text-center text-white pt-6 text-xl font-bold'>What's your option?</div>
                <div className='grid grid-cols-2 gap-y-3 justify-items-center my-5'>

                    {
                        cafeFoods.map((food) => (
                            <CafeFoodGrid food={food.foodName} price={food.price} id={food.id} />
                        ))
                    }

                </div>
                <NavLink to='/' className="text-white text-center hover:text-fuchsia-200">Go to Home</NavLink>
            </div>

        </div >
    )
}

export default Cafeteria