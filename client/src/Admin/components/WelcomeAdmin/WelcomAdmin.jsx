import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const WelcomAdmin = () => {
    return (
        <Sidebar>
            <div className=' w-[100%] h-[100vh] flex justify-center items-center relative overflow-hidden'>
                <h2 className='text-2xl md:text-5xl font-[rubik] '>Welcome to Admin Panel</h2>
                <div className='hidden md:block w-[200px] h-[200px] bg-blue-500 rounded-full absolute -bottom-12 -right-14'></div>
            </div>
        </Sidebar>
    )
}

export default WelcomAdmin
