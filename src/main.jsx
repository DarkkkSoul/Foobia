import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Cafeteria from './pages/Cafeteria/Cafeteria.jsx'
import Canteen from './pages/Canteen/Canteen.jsx'
import Creators from './pages/Creators/Creators.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/cafeteria' element={<Cafeteria />} />
            <Route path='/canteen' element={<Canteen />} />
            <Route path='/creators' element={<Creators />} />
        </Routes>
    </BrowserRouter>
)
