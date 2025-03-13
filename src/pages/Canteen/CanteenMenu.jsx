import React from 'react'
import { NavLink } from 'react-router'
import CanFoodGrid from './CanFoodGrid'
import { canFoods } from './canFoodInfo'

function Canteen() {
    return (
        <div className='flex items-center justify-center h-screen w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 h-170 flex flex-col '>
                <div className='text-center text-white pt-6 text-xl font-bold'>What's your choice?</div>
                <div className='grid grid-cols-2 gap-y-3 justify-items-center my-5'>

                    {
                        canFoods.map((food) => (
                            <CanFoodGrid food={food.foodName} price={food.price} />
                        ))
                    }

                </div>
                <NavLink to='/' className="text-white text-center hover:text-fuchsia-200">Go to Home</NavLink>
            </div>

        </div >
    )
}

export default Canteen