import React from 'react'
import { NavLink } from 'react-router'
import CreatorInfo from './CreatorInfo'

function Creators() {
    return (
        <div className='flex items-center justify-center h-full w-full bg-white p-5 '>
            <div className='bg-fuchsia-800 w-107 flex flex-col px-9 py-10'>
                <div className='flex flex-col gap-y-4'>
                    <CreatorInfo name='Mahesh Kumar G' profile='mahesh.jpeg' linkedin='maheshhkumarg' github='MaheshKumarrG' x='Maheshhhkumar' />
                    <CreatorInfo name='Madhan K U' profile='madhan.jpeg' linkedin='' github='' x='' />
                </div>
                <NavLink to='/' className="text-white text-center hover:text-fuchsia-200">Go to Home</NavLink>
            </div>
        </div >
    )
}

export default Creators