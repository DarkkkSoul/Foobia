import React from 'react'
import { foodDetail } from '../Checkout/Checkout'

function CafeFoodGrid(props) {
    return (
        <button
            id={props.id}
            onClick={() => foodDetail(props.id)}
            className='
         bg-white w-fit inline-flex flex-row px-9 py-4 gap-x-1 rounded-2xl
            hover:scale-105 active:scale-95 transition-all cursor-pointer
         '>
            {/* Can add Image */}
            <div className={`flex text-fuchsia-700 font-semibold flex-col items-center justify-center gap-y-1 text-md font-sans`}>
                <div>{props.food}</div>
                <div>Price: {props.price} Rs</div>
            </div>
        </button>
    )
}

export default CafeFoodGrid