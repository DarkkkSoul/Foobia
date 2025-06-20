import React, { useEffect, useState } from 'react'

function Admin() {

    const [foodName, setFoodName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    const handleCafeteriaSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cafeteria/add`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ foodName, price })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                console.log(data.message);
                setTimeout(() => {
                    setFoodName('');
                    setPrice('');
                }, 1000);

            } else {
                setMessage(data.errorMessage);
                console.log(data.errorMessage);
            }


        } catch (error) {
            console.log("ERROR:", error);
        }
    }

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('');
            }, 1500)
        }
    }, [message]);

    return (
        <div className="min-h-screen flex gap-x-10 bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-6">

            <div className="flex flex-col gap-y-10 items-center justify-center bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-400 min-h-screen p-6">

                {/* First Form */}
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-xl font-semibold text-purple-800 mb-6 text-center">Cafeteria</h2>
                    <form className="flex flex-col gap-4" onSubmit={handleCafeteriaSubmit}>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">Item Name</label>
                            <input
                                type="text"
                                placeholder="Enter Food Name"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={foodName}
                                onChange={(e) => setFoodName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="text"
                                placeholder="Enter Price"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-300"
                        >
                            Create
                        </button>
                    </form>
                    {message && <p className="text-purple-700 mt-4 text-center text-xs">{message}</p>}
                </div>

                {/* Second Form */}
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-xl font-semibold text-purple-800 mb-6 text-center">Canteen</h2>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">Item Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Food Name"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div
                            className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">Price</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Price"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <button

                            type="submit"
                            className="mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition duration-300"
                        >
                            Create
                        </button>
                    </form>
                </div>

            </div>


            <div>view</div>

        </div>
    )
}

export default Admin