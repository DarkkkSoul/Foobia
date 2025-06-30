import React from 'react'

function FoodItem(props) {
    return (
        <div className='bg-gradient-to-tl from-fuchsia-300 to-fuchsia-700 inline-flex flex-col gap-y-2 px-9 py-2 text-white tracking-wide font-semibold rounded-md border-1 border-white shadow-xl'>
            <div>{props.foodName}</div>
            <div>{props.price} Rs</div>
        </div>
    )
}

export default FoodItem