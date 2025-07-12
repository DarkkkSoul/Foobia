import React, { useEffect, useState } from 'react'
import Header from '../Header';
import FoodGrid from './FoodGrid';
import useCart from '../../CustomHooks/useCart';
import Total from './Total';
import Footer from '../../Footer';
function CheckoutPage() {
    const { cart } = useCart();

    return (
        <>
            <div className="min-h-screen flex lg:flex-col lg:gap-x-10 bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-4 sm:p-6">
                <div className="flex flex-col  gap-y-6 min-h-[40vh] lg:min-h-screen bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-400 w-full lg:w-[100%] p-4 sm:p-6 rounded-md shadow-2xl mt-17">
                    <Header />
                    <div className='flex flex-col items-center gap-y-5'>
                        <div className='flex flex-col gap-y-3'>
                            {
                                cart.map((item) => (
                                    <FoodGrid foodName={item.foodName} price={item.price} id={item._id} quantity={item.quantity} key={item._id} />
                                ))
                            }
                        </div>
                        <Total />
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default CheckoutPage