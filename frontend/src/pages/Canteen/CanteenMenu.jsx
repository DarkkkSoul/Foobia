import React, { useEffect, useState } from 'react'
import Header from '../Header'
import CanFoodGrid from './CanFoodGrid';


function CanteenMenu() {

    const [canteenMenu, setCanteenMenu] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const displayCanteenFood = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/canteen/menu`, {
                    method: 'GET',
                    credentials: 'include'
                });

                const data = await response.json();

                if (response.ok) {
                    setCanteenMenu(data.menu.canteenMenu);
                } else {
                    setErrorMessage(data.errorMessage);
                }

            } catch (error) {
                console.log('ERROR:', error);
            }
        }
        displayCanteenFood();
    }, []);
    return (
        <div className='flex items-center justify-center w-full bg-white p-5'>
            <div className='bg-fuchsia-800 w-107 min-h-170 flex flex-col relative pb-6'>
                <Header />
                <div className='grid grid-cols-2 gap-y-3 justify-items-center'>
                    {
                        canteenMenu.map((food) => (
                            <CanFoodGrid food={food.foodName} price={food.price} key={food._id} />
                        ))
                    }

                </div>
            </div>

        </div >
    )
}

export default CanteenMenu