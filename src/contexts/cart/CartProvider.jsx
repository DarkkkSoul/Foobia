import React from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;