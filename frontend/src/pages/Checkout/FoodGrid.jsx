import React from 'react'
import useCart from '../../CustomHooks/useCart'

function FoodGrid(props) {
    const { deleteItem } = useCart();
    return (
        <>
            <div className='flex justify-between bg-white mx-13 text-lg px-6 py-4 rounded-xl relative' id={props.id}>
                <div className='text-fuchsia-900'>{props.foodName}</div>
                <div className='font-semibold'>{props.price} Rs</div>
                <button
                    onClick={() => deleteItem(props.id)}
                    className='absolute -top-3 -right-3 cursor-pointer hover:opacity-80'>
                    <img src="/foodImages/cancel.png" className='w-6' />
                </button>
            </div>
        </>
    )
}

export default FoodGrid