import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CafeteriaMenu from './pages/Cafeteria/CafeteriaMenu.jsx'
import CanteenMenu from './pages/Canteen/CanteenMenu.jsx'
import Creators from './pages/Creators/Creators.jsx'
import CartProvider from './contexts/cart/CartProvider.jsx'
import CheckoutPage from './pages/Checkout/CheckoutPage.jsx'
import AdminCafe from './pages/admin/AdminCafe.jsx'
import AdminCanteen from './pages/admin/AdminCanteen.jsx'
import Auth from './pages/Authentication/Auth.jsx'
import ViewCafeCart from './pages/admin/ViewCafeCart.jsx'
import History from './pages/Cafeteria/History.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<Auth />} />
                <Route path='/home' element={<App />} />
                <Route path='/cafeteria' element={<CafeteriaMenu />} />
                <Route path='/history' element={<History />} />
                <Route path='/canteen' element={<CanteenMenu />} />
                <Route path='/creators' element={<Creators />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/admin/cafeteria' element={<AdminCafe />} />
                <Route path='/admin/canteen' element={<AdminCanteen />} />
                <Route path='/admin/cafeteria/cart' element={<ViewCafeCart />} />
            </Routes>
        </BrowserRouter>
    </CartProvider>
)
