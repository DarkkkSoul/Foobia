import React from 'react'
import CafeFoodGrid from './CafeFoodGrid'
import { NavLink } from 'react-router'
import { cafeFoods } from './cafeFoodInfo'
import Header from '../Header'

function Cafeteria() {
    return (
        <div className='flex items-center justify-center w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 min-h-170 flex flex-col  relative pb-6'>
                <Header />
                <div className='grid grid-cols-2 gap-y-3 justify-items-center'>
                    {
                        cafeFoods.map((food) => (
                            <CafeFoodGrid food={food.foodName} price={food.price} id={food.id} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Cafeteria