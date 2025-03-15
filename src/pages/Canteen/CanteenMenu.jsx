import React from 'react'
import { NavLink } from 'react-router'
import CanFoodGrid from './CanFoodGrid'
import { canFoods } from './canFoodInfo'
import Header from '../Header'

function Canteen() {
    return (
        <div className='flex items-center justify-center h-screen w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 h-170 flex flex-col relative '>
                <Header />
                <div className='grid grid-cols-2 gap-y-3 justify-items-center'>
                    {
                        canFoods.map((food) => (
                            <CanFoodGrid food={food.foodName} price={food.price} />
                        ))
                    }

                </div>
            </div>

        </div >
    )
}

export default Canteen