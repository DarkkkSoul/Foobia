import React from 'react'
import CanFoodGrid from './CanFoodGrid'
import { canFoods } from './canFoodInfo'
import Header from '../Header'

function CanteenMenu() {
    return (
        <div className='flex items-center justify-center w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 min-h-170 flex flex-col relative pb-6'>
                <Header />
                <div className='grid grid-cols-2 gap-y-3 justify-items-center'>
                    {
                        canFoods.map((food) => (
                            <CanFoodGrid food={food.foodName} price={food.price} id={food.id} />
                        ))
                    }

                </div>
            </div>

        </div >
    )
}

export default CanteenMenu