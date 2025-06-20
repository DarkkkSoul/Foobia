import React, { useEffect, useState } from 'react'
import CafeFoodGrid from './CafeFoodGrid'
import Header from '../Header'

function CafeteriaMenu() {

    const [cafeMenu, setCafeMenu] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const displayCafeFood = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/cafeteria/menu`, {
                    method: 'GET',
                    credentials: 'include'
                });

                const data = await response.json();

                if (response.ok) {
                    setCafeMenu(data.menu.cafeMenu);
                } else {
                    setErrorMessage(data.errorMessage);
                }

            } catch (error) {
                console.log('ERROR:', error);
            }
        }
        displayCafeFood();
    }, []);

    return (
        <div className='flex items-center justify-center w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-110 min-h-170 flex flex-col  relative pb-6 px-2'>
                <Header />
                <div className='grid grid-cols-2 gap-y-3 justify-items-center'>
                    {
                        cafeMenu.map((food) => (
                            <CafeFoodGrid food={food.foodName} price={food.price} key={food._id} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default CafeteriaMenu