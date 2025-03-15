import React from 'react'
import { cafeFoods } from '../Cafeteria/cafeFoodInfo';

// const { cart, setCart } = React.useState([]);

export const foodDetail = (id) => {
    const itemId = id;
    cafeFoods.map((food) => {
        if (food.id === itemId) {
            // setCart(food);
            // console.log(cart);
            console.log(food);

        }
    })
};

