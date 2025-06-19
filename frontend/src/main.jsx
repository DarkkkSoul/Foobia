import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CafeteriaMenu from './pages/Cafeteria/CafeteriaMenu.jsx'
import CanteenMenu from './pages/Canteen/CanteenMenu.jsx'
import Creators from './pages/Creators/Creators.jsx'
import CartProvider from './contexts/cart/CartProvider.jsx'
import CheckoutPage from './pages/Checkout/CheckoutPage.jsx'
import Auth from './pages/admin/Auth.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path='/cafeteria' element={<CafeteriaMenu />} />
                <Route path='/canteen' element={<CanteenMenu />} />
                <Route path='/creators' element={<Creators />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </BrowserRouter>
    </CartProvider>
)
