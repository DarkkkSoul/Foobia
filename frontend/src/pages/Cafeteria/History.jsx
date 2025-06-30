import React, { useEffect, useState } from 'react'
import CartHistoryComponent from './CartHistoryComponent';
import { Link } from 'react-router';


function History() {

    const [cartHistory, setCartHistory] = useState([]);

    useEffect(() => {
        const viewHistory = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/cart/cafeteria/history`, {
                    method: 'GET',
                    credentials: 'include'
                });

                const data = await response.json();

                setCartHistory(data.history);

                console.log(data);

                if (response.ok) {
                    console.log(data.message)
                } else {
                    console.log(data.errorMessage);
                }

            } catch (error) {
                console.log('ERROR:', error);
            }
        }
        viewHistory();
    }, []);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row gap-y-8 lg:gap-x-10 bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-4 sm:p-6">
            <div className="flex flex-col gap-y-8 min-h-screen bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-400 min-w-full lg:w-[30%] p-4 sm:p-6 rounded-md shadow-2xl">
                <div>
                    <Link to='/cafeteria'>
                        back
                    </Link>
                </div>
                <div>
                    {
                        cartHistory.map((cart) => (
                            <CartHistoryComponent orderStatus={cart.orderStatus} cartDetails={cart.cartDetails} createdAt={cart.createdAt} key={cart._id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default History
