import CartContext from "../contexts/cart/CartContext";
import { useContext } from 'react'
import { cafeFoods } from "../pages/Cafeteria/cafeFoodInfo";
import { canFoods } from "../pages/Canteen/canFoodInfo";

function useCart() {
    const { cart, setCart } = useContext(CartContext);

    const addItem = (id) => {
        const itemId = id;
        cafeFoods.map((food) => {
            if (food.id === itemId) {
                setCart((prevCart) => [...prevCart, food]);
            }
        });
    };

    const addItemCan = (id) => {
        const itemId = id;
        canFoods.map((food) => {
            if (food.id === itemId) {
                setCart((prevCart) => [...prevCart, food]);
            }
        });
    }

    const deleteItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }

    return { cart, addItem, deleteItem, addItemCan };
}

export default useCart;