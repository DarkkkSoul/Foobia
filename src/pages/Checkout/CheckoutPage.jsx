import React, { useContext } from 'react'
import Header from '../Header'

function CheckoutPage() {
    const { cart, setCart } = useContext(CartContext);

    return (
        <div className='flex items-center justify-center h-screen w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 h-170 flex flex-col relative '>
                <Header />

            </div>
        </div >
    )
}

export default CheckoutPage