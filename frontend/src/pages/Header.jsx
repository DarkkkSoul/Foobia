import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import useCart from '../CustomHooks/useCart';

function Header() {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const { cart } = useCart();

    useEffect(() => {
        let quantity = 0;
        cart.forEach((item) => {
            quantity += item.quantity;
        })
        setTotalQuantity(quantity);
    }, [cart]);

    // console.log(cart)
    return (
        <div className='bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 fixed top-0 left-0 right-0 z-10 flex text-2xl px-9 py-4 shadow-xl items-center justify-between'>

            <div className='font-semibold text-white/90 hover:opacity-75'>
                <NavLink to='/cafeteria'>
                    DBIT eats
                </NavLink>
            </div>

            <div className='flex items-center justify-center gap-x-3'>
                <div>
                    <NavLink to='/history'>
                        <img src="/history.png" className='w-6 hover:opacity-75' />
                    </NavLink>
                </div>
                <div className='relative'>

                    <div className='absolute -top-0.5 -right-0.5 bg-white rounded-full text-xs w-5 p-0.5 text-center font-extrabold text-fuchsia-700'>{totalQuantity}</div>

                    <NavLink to='/checkout'>
                        <img src="/cart.png" className='w-8 hover:opacity-75' />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header