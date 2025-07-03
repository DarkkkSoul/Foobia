import React, { useEffect, useState } from 'react'
import useCart from '../../CustomHooks/useCart'

function FoodGrid(props) {
    const { deleteItem } = useCart();

    return (
        <>
            <div className='w-full h-full items-center justify-center'>
                <div className='flex justify-between items-center bg-white w-70 sm:w-sm text-lg px-6 py-4 rounded-xl relative' id={props.id}>
                    <div className='text-fuchsia-900'>{props.foodName}</div>
                    <div className='font-semibold'>{props.quantity} x {props.price} Rs</div>
                    <button
                        onClick={() => deleteItem(props.id)}
                        className='absolute -top-3 -right-3 cursor-pointer hover:opacity-80'>
                        <img src="/foodImages/cancel.png" className='w-6' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default FoodGrid