// import { useEffect, useState } from "react";

// const [cafeMenu, setCafeMenu] = useState([]);
// const [errorMessage, setErrorMessage] = useState('');

// useEffect(() => {
//     const displayCafeFood = async () => {
//         try {
//             const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/cafeteria/menu`, {
//                 method: 'GET',
//                 credentials: 'include'
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setCafeMenu(data.menu.cafeMenu);
//             } else {
//                 setErrorMessage(data.errorMessage);
//             }

//         } catch (error) {
//             console.log('ERROR:', error);
//         }
//     }
//     displayCafeFood();
// }, []);

// export default cafeMenu;