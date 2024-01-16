import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom'

const ProjectCard = ({ _id, name, image, desc, deleteProject, link }) => {
    return (
        <div className="max-w-[20rem] shadow-2xl  rounded-2xl mb-16 py-2 relative group 
                            before:absolute before:h-[6px] before:bottom-0 before:bg-gradient-to-t from-blue-700 to-purple-500  before:left-0 before:w-full
                            before:transition-all before:duration-500 hover:before:h-full before:-z-10 before:rounded-2xl
                            " data-aos="zoom-in" data-aos-duration="2000">
            <div className='flex justify-center items-center'>
                <img className="object-cover h-[15rem] w-[90%] rounded-2xl" src={image} alt="" />
            </div>
            <div className="p-5">
                <h5 className="text-black group-hover:text-white duration-150 font-[600] font-[Questrial] text-lg tracking-wider mb-3  text-center ">{name}</h5>

                <h5 className="text-gray-800 group-hover:text-white duration-150 font-[600] font-[Nunito] tracking-wider mb-3 text-sm">{desc.slice(0, 350) + '...'}</h5>

                <div className='flex w-full justify-center items-center'>
                    <Link to={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 group-hover:bg-white group-hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Project Link
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>

                <button onClick={() => deleteProject(_id)} className="mt-4 font-normal w-full flex justify-center items-center font-[Poppins] text-red-500 cursor-pointer group-hover:text-white duration-150 tracking-wide mb-1  text-2xl "><AiFillDelete /></button>
            </div>
        </div>
    )
}

export default ProjectCard
