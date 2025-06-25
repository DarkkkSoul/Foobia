import { NavLink } from 'react-router'
import './App.css'
import Header from './pages/Header'

function App() {

    return (
        <>
            <div className='flex items-center justify-center h-screen w-full p-5'>
                <div className='bg-fuchsia-800 w-107 min-h-170 flex flex-col relative'>
                    <Header /> {/* Header stays at the top */}

                    {/* Significantly lifting the center content upward */}
                    <div className="flex flex-col flex-grow items-center justify-center gap-4 mt-[-120px]">
                        <div className='flex flex-row gap-4 items-center justify-center'>
                            <NavLink to='/cafeteria'
                                className='bg-white text-fuchsia-700 py-4 px-8 text-xl font-semibold rounded-md hover:scale-105 transition-all active:scale-95 cursor-pointer'>
                                Cafeteria
                            </NavLink>

                            <NavLink to='/canteen'
                                className='bg-white text-fuchsia-700 py-4 px-8 text-xl font-semibold rounded-md hover:scale-105 transition-all active:scale-95 cursor-pointer'>
                                Canteen
                            </NavLink>
                        </div>
                        <div className='text-center text-md text-white'>
                            <NavLink to='/creators' className='hover:text-fuchsia-200 hover:cursor-alias'>
                                Know creators &#128279;
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div >



        </>
    )
}

export default App
