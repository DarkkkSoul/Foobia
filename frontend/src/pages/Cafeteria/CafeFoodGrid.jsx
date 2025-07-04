import React from 'react'
import useCart from '../../CustomHooks/useCart'

function CafeFoodGrid(props) {
    const { addCafeItem } = useCart();
    return (
        <button
            id={props.id}
            onClick={() => addCafeItem(props.id)}
            className='
         bg-white/75 inline-flex flex-col flex-wrap items-center justify-center px-9 pb-3 rounded-2xl gap-y-2 w-36 sm:w-[180px] hover:scale-105 active:scale-95 transition-all cursor-pointer text-fuchsia-700 font-semibold
         relative pt-6'>

            <div className={`flex items-center absolute top-2 gap-x-1 px-2 py-0.5 rounded-full text-black ${props.soldOut ? 'bg-red-200' : 'bg-green-200'}`}>
                <div className={`${props.soldOut ? 'bg-red-600' : 'bg-green-600'} w-2 h-2 rounded-full`}></div>
                <div className='text-xs'>{props.soldOut ? 'SoldOut' : 'Avaliable'}</div>
            </div>

            <img src={`/foodImages/${props.foodName}.png`} className='w-25' />
            <div>{props.foodName}</div>
            <div>Price: {props.price} Rs</div>
        </button>
    )
}

export default CafeFoodGrid