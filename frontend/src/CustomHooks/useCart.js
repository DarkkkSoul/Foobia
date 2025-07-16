import CartContext from "../contexts/cart/CartContext";
import { useContext, useEffect, useState } from 'react'

function useCart() {

    // cafeteria menu 
    const [cafeMenu, setCafeMenu] = useState([]);
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
                    console.log(data.errorMessage);
                }

            } catch (error) {
                console.log('ERROR:', error);
            }
        }
        displayCafeFood();
    }, []);

    // canteen menu 
    // const [canteenMenu, setCanteenMenu] = useState([]);
    // useEffect(() => {
    //     const displayCanteenFood = async () => {
    //         try {
    //             const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/canteen/menu`, {
    //                 method: 'GET',
    //                 credentials: 'include'
    //             });

    //             const data = await response.json();

    //             if (response.ok) {
    //                 setCanteenMenu(data.menu.canteenMenu);
    //             } else {
    //                 console.log(data.errorMessage);
    //             }

    //         } catch (error) {
    //             console.log('ERROR:', error);
    //         }
    //     }
    //     displayCanteenFood();
    // }, []);

    const { cart, setCart } = useContext(CartContext);

    const clearCart = () => {
        setCart([]);
    }

    const addCafeItem = (_id) => {
        const existingItem = cart.find(item => item._id === _id);
        if (existingItem) {
            const updatedCart = cart.map(item => {
                if (item._id === _id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        }
        else {
            cafeMenu.map((item) => {
                if (item._id === _id) {
                    setCart((prevCart) => [...prevCart, item]);
                }
            });
        }
    };

    // const addCanteenItem = (_id) => {
    //     canteenMenu.map((item) => {
    //         if (item._id === _id) {
    //             setCart((prevCart) => [...prevCart, item]);
    //         }
    //     });
    // }

    const deleteItem = (_id) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== _id));
    }

    return { cart, addCafeItem, deleteItem, clearCart };
}

export default useCart;