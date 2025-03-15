import CartContext from "../contexts/cart/CartContext";
import { useContext } from 'react'
import { cafeFoods } from "../pages/Cafeteria/cafeFoodInfo";

function useCart() {
    const { cart, setCart } = useContext(CartContext);

    const foodDetail = (id) => {
        const itemId = id;
        cafeFoods.map((food) => {
            if (food.id === itemId) {
                console.log('item adding', food);

                setCart((prevCart) => [...prevCart, food]);
            }
        })
    };
    return { cart, foodDetail };
}

export default useCart;