import React from 'react'
import Header from '../Header';
import FoodGrid from './FoodGrid';
import useCart from '../../CustomHooks/useCart';
import Total from './Total';
function CheckoutPage() {
    const { cart } = useCart();

    const submitCart = () => {

    }

    return (
        <div className='flex items-center justify-center h-screen w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 h-170 flex flex-col relative '>
                <Header />
                <div className='flex flex-col gap-y-5'>
                    <div className='flex flex-col gap-y-3'>
                        {
                            cart.map((item) => (
                                <FoodGrid foodName={item.foodName} price={item.price} id={item._id} key={item._id} />
                            ))
                        }
                    </div>
                    <Total />
                </div>
                <button className='bg-white absolute bottom-5 right-5 hover:opacity-80 text-fuchsia-900 font-semibold rounded-xl px-6 py-2' onClick={() => console.log(cart)}>Checkout</button>
            </div>
        </div >
    )
}

export default CheckoutPage