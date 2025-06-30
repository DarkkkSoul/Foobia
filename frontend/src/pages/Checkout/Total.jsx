import React, { useEffect, useState } from 'react'
import useCart from '../../CustomHooks/useCart';

function Total() {

    const [total, setTotal] = useState(0);
    const { cart } = useCart();

    useEffect(() => {
        let sum = 0;
        cart.forEach((item) => {    // Here I can use .reduce()!
            sum += Number(item.price * item.quantity);
        })
        setTotal(sum);
    }, [cart]);

    const [message, setMessage] = useState('');
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('')
            }, 1000);
        }
    })

    const cleanCart = cart.map((item) => ({
        foodName: item.foodName,
        price: item.price,
        quantity: item.quantity
    }));

    const handleCheckout = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/cart/checkout`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({ cartDetails: cleanCart }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
            } else {
                setMessage(data.errorMessage);
            }
        } catch (error) {
            console.log('ERROR:', error);
        }
    }

    if (total === 0) {
        return (
            <div className=' bg-white mx-13  text-lg px-6 py-6 rounded-xl'>
                <div className='text-fuchsia-900 text-center text-xl font-semibold'>Add an item to cart...</div>
            </div>
        )
    } else {
        return (
            <div className='flex items-center justify-center flex-col gap-y-5 relative'>
                <hr className='text-white w-65  border-2' />

                <div className='flex justify-between bg-white mx-13 text-lg px-6 py-4 rounded-xl'>
                    <div className='text-fuchsia-900'>Total</div>
                    <div className='font-semibold'>
                        {total} Rs</div>
                </div>
                <button className='bg-white bottom-5 right-5 hover:opacity-80 text-fuchsia-900 font-semibold rounded-xl px-6 py-2' onClick={handleCheckout}>Checkout</button>
                {message && <div className='text-white text-center text-sm font-semibold'>{message}</div>}
            </div>
        )
    }
}

export default Total