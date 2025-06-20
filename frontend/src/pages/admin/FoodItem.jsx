import React from 'react'

function FoodItem(props) {
    return (
        <div className='bg-gradient-to-r from-fuchsia-500 to-pink-500 inline-flex flex-col gap-y-2 px-9 py-2 text-white font-semibold rounded-md'>
            <div>{props.foodName}</div>
            <div>{props.price} Rs</div>
        </div>
    )
}

export default FoodItem