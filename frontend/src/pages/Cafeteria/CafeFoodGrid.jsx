import React from 'react'
import useCart from '../../CustomHooks/useCart'

function CafeFoodGrid(props) {
    const { addCafeItem } = useCart();
    return (
        <button
            id={props.id}
            onClick={() => addCafeItem(props.id)}
            className='
         bg-white/75 inline-flex flex-col flex-wrap items-center justify-center px-9 py-3 rounded-2xl gap-y-2 w-36 sm:w-[180px] hover:scale-105 active:scale-95 transition-all cursor-pointer text-fuchsia-700 font-semibold
         '>
            <img src={`/foodImages/${props.foodName}.png`} className='
                w-25
            ' />
            <div>{props.foodName}</div>
            <div>Price: {props.price} Rs</div>
        </button>
    )
}

export default CafeFoodGrid