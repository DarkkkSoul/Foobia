import React from 'react'
import useCart from '../../CustomHooks/useCart'

function CafeFoodGrid(props) {
    const { addItem } = useCart();
    return (
        <button
            id={props.id}
            onClick={() => addItem(props.id)}
            className='
         bg-white inline-flex flex-col items-center justify-center px-9 py-3 rounded-2xl gap-y-2
            hover:scale-105 active:scale-95 transition-all cursor-pointer text-fuchsia-700 font-semibold
         '>
            <img src={`/foodImages/${props.food}.png`} className='
                w-25
            ' />
            <div>{props.food}</div>
            <div>Price: {props.price} Rs</div>
        </button>
    )
}

export default CafeFoodGrid