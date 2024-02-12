import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div className=''>
            <div className="border-b-2 border-gray-400 mb-2 px-4 pt-2 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-4 sm:text-center sm:mb-0 md:mb-6">
                        <div className="mb-2 sm:mx-auto" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white">
                                <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707731196/WebDesys-Main%20Website/up7i2jddbeviumhcdye2.jpg" alt="" className='max-w-[90px]'/>
                            </div>
                        </div>
                        <div className="max-w-xl mb-6 md:mx-auto sm:text-center flex justify-center items-center flex-col lg:max-w-2xl md:mb-6" data-aos="zoom-in" data-aos-duration="2000">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-3 font-sans text-3xl pb-3 font-bold tracking-tight sm:text-4xl sm:leading-none">
                                Mobile App <span className='text-gray-900'>Development</span>
                            </h2>
                            <span className="text-base text-gray-700 md:text-lg">
                                Transform Your Business with Custom Apps:
                                <Typewriter
                                    options={{
                                        strings: [' Empowering Entrepreneurs to Innovate!', ' Empowering Entrepreneurs to Innovate!'],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <Link to="/contactus" className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Get Started</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header