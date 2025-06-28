import React from 'react'
import { Link } from 'react-router'
import ViewCartCompo from './ViewCartCompo.jsx'

function ViewCafeCart() {

    const cart = [];
    let completeCart;

    const viewCart = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/cart/cafeteria/admin`, {
                method: 'GET',
                credentials: 'include'
            });

            const data = await response.json();

            completeCart = data.completeCart;

            if (response.ok) {
                console.log(data.message)
                console.log(completeCart);
                completeCart.map((item) => console.log(item.cartDetail, item.orderBy));
            } else {
                console.log(data.errorMessage);
            }

        } catch (error) {
            console.log('ERROR:', error);
        }
    }

    viewCart();


    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-4 sm:p-6">
            <div className='bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-400 min-h-screen w-full rounded-r-4xl'>
                <div>

                </div>
            </div>
        </div >
    )
}

export default ViewCafeCart