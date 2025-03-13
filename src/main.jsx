import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CafeteriaMenu from './pages/Cafeteria/CafeteriaMenu.jsx'
import CanteenMenu from './pages/Canteen/CanteenMenu.jsx'
import Creators from './pages/Creators/Creators.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/cafeteria' element={<CafeteriaMenu />} />
            <Route path='/canteen' element={<CanteenMenu />} />
            <Route path='/creators' element={<Creators />} />
        </Routes>
    </BrowserRouter>
)
