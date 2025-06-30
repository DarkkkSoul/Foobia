import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router'
import ViewCartCompo from './ViewCartCompo.jsx'

function ViewCafeCart() {

    const [completeCart, setCompleteCart] = useState([]);

    useEffect(() => {
        const viewCart = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/cart/cafeteria/admin`, {
                    method: 'GET',
                    credentials: 'include'
                });

                const data = await response.json();

                setCompleteCart(data.completeCart);

                if (response.ok) {
                    console.log(data.message)
                } else {
                    console.log(data.errorMessage);
                }

            } catch (error) {
                console.log('ERROR:', error);
            }
        }
        viewCart();
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-4 sm:p-6">
            <div className='bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-400 min-h-screen w-full rounded-r-4xl'>
                <div>
                    <Link to='/admin/cafeteria'>Back</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-5">
                    {completeCart.map((cart) => (
                        <ViewCartCompo
                            key={cart._id}
                            id={cart._id}
                            orderBy={cart.orderBy}
                            cartDetails={cart.cartDetails}
                            orderStatus={cart.orderStatus}
                        />
                    ))}
                </div>

            </div>
        </div >
    )
}

export default ViewCafeCart