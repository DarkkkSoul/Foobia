import React, { useEffect, useState } from 'react'
import useCart from '../../CustomHooks/useCart';

function Total() {

    const [total, setTotal] = useState(0);
    const { cart } = useCart();

    useEffect(() => {
        let sum = 0;
        cart.forEach((item) => {    // Here I can use .reduce()!
            sum += Number(item.price);
        })
        setTotal(sum);
    }, [cart]);

    if (total === 0) {
        return (
            <div className=' bg-white mx-13  text-lg px-6 py-6 rounded-xl'>
                <div className='text-fuchsia-900 text-center text-xl font-semibold'>Add an item to cart...</div>
            </div>
        )
    } else {
        return (
            <div className='flex items-center justify-center flex-col gap-y-5'>
                <hr className='text-white w-65  border-2' />

                <div className='flex justify-between bg-white mx-13 text-lg px-6 py-4 rounded-xl'>
                    <div className='text-fuchsia-900'>Total</div>
                    <div className='font-semibold'>
                        {total} Rs</div>
                </div>
            </div>
        )
    }
}

export default Total