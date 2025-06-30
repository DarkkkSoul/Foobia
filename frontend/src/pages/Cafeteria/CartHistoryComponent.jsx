import React from 'react'

function CartHistoryComponent({ orderStatus, cartDetails, createdAt }) {
    const formattedDate = new Date(createdAt).toLocaleString();

    return (
        <div className="p-4 sm:p-6 max-w-xs my-4 rounded-2xl shadow-xl bg-gradient-to-tl from-fuchsia-300 to-fuchsia-500 text-black flex flex-col justify-evenly gap-y-2 border border-white/80">

            <div className="text-xs sm:text-sm font-semibold">
                Ordered on: {formattedDate}
            </div>

            <div>
                {
                    cartDetails.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm sm:text-base">
                            <span>{item.foodName}</span>
                            <span className="font-semibold text-gray-100">x{item.quantity}</span>
                        </div>
                    ))
                }
            </div>

            <div className="text-sm sm:text-base font-semibold">
                Order Status:{" "}
                <span className={orderStatus ? "text-emerald-600 drop-shadow-lg" : "text-red-900"}>
                    {orderStatus ? "Ready" : "Pending"}
                </span>
            </div>
        </div>
    );
}

export default CartHistoryComponent