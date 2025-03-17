import React from 'react'
import Header from '../Header'
import useCart from '../../CustomHooks/useCart';
import FoodGrid from './FoodGrid';
import Total from './Total';
function CheckoutPage() {
    const { cart } = useCart();
    return (
        <div className='flex items-center justify-center h-screen w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 h-170 flex flex-col relative '>
                <Header />
                <div className='flex flex-col gap-y-5'>
                    <div className='flex flex-col gap-y-3'>
                        {
                            cart.map((item) => (
                                <FoodGrid food={item.foodName} price={item.price} id={item.id} />
                            ))
                        }
                    </div>

                    <Total />
                </div>
            </div>
        </div >
    )
}

export default CheckoutPage