import React, { useState } from 'react'

function Admin() {

    const [foodName, setFoodName] = useState('');
    const [price, setPrice] = useState('');

    const handleCafeteriaSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-pink-300 via-fuchsia-500 to-purple-800 p-6">

            <div className="flex flex-col gap-y-10 items-center justify-center bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-400 min-h-screen p-6">

                {/* First Form */}
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-xl font-semibold text-purple-800 mb-6 text-center">Cafeteria</h2>
                    <form className="flex flex-col gap-4" onClick={handleCafeteriaSubmit}>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">Item Name</label>
                            <input
                                type="text"
                                placeholder="Enter Food Name"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                value={foodName}
                                onChange={(e) => setFoodName(e.target.value)}
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

                {/* Second Form */}
                <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                    <h2 className="text-xl font-semibold text-purple-800 mb-6 text-center">Canteen</h2>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">Item Name</label>
                            <input
                                type="text"
                                placeholder="Enter Food Name"
                                className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700">Price</label>
                            <input
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