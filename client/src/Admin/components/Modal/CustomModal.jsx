import React from 'react'

const CustomModal = ({ name, email, mobile, type, message }) => {
    return (
        <div className='flex flex-col justify-between gap-4'>
            <div className='flex flex-col gap-2 pb-4 border-b-2 border-gray-300' >
                <p className='pl-2 font-semibold font-[Mooli]'>Name</p>
                <p className="pointer-events-none cursor-pointer bg-gray-200 shadow-sm font-extrabold font-[Questrial] text-gray-900 sm:text-sm rounded-md block w-full p-2.5 group-hover:py-4 ">{name}</p>
            </div>

            <div className='flex flex-col gap-2 pb-4 border-b-2 border-gray-300' >
                <p className='pl-2 font-semibold font-[Mooli]'>Email</p>
                <p className="pointer-events-none cursor-pointer bg-gray-200 shadow-sm font-extrabold font-[Questrial] text-gray-900 sm:text-sm rounded-md block w-full p-2.5 group-hover:py-4">{email}</p>
            </div>

            <div className='flex flex-col gap-2 pb-4 border-b-2 border-gray-300' >
                <p className='pl-2 font-semibold font-[Mooli]'>Mobile</p>
                <p className="pointer-events-none cursor-pointer bg-gray-200 shadow-sm font-extrabold font-[Questrial] text-gray-900 sm:text-sm rounded-md block w-full p-2.5 group-hover:py-4">{mobile}</p>
            </div>

            <div className='flex flex-col gap-2 pb-4 border-b-2 border-gray-300' >
                <p className='pl-2 font-semibold font-[Mooli]'>Type</p>
                <p className="pointer-events-none cursor-pointer bg-gray-200 shadow-sm font-extrabold font-[Questrial] text-gray-900 sm:text-sm rounded-md block w-full p-2.5 group-hover:py-4 ">{type}</p>
            </div>

            <div className='flex flex-col gap-2 pb-4 border-b-2 border-gray-300' >
                <p className='pl-2 font-semibold font-[Mooli]'>Message</p>
                <p className="pointer-events-none cursor-pointer bg-gray-200 shadow-sm font-extrabold font-[Questrial] text-gray-900 sm:text-sm rounded-md block w-full p-2.5 group-hover:py-4 ">{message}</p>
            </div>
        </div>
    )
}

export default CustomModal
