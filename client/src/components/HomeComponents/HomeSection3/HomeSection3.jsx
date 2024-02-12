import React from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const HomeSection3 = () => {
    return (
        <>
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686176281/webdesys/hye_517_320px_3_itqnsv.png" alt="" />
                        </div>
                        <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-xl font-bold tracking-tight sm:text-2xl sm:leading-none" >
                                <Typewriter
                                    options={{
                                        strings: ['About Us..','About Us..'],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true,
                                    }}
                                />
                            </h2>
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                                WebDesys:
                                <br className="hidden md:block" />
                                <span> Leading</span> <span className='text-gray-900'> provider of</span>{' '}
                                <span className="pb-2 inline-block text-deep-purple-accent-400">
                                    <span className='text-gray-900'> global </span>web services
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                WebDesys: Best web design, development, and marketing company for startups. Our experts deliver visually appealing websites and effective strategies to convert leads. With years of experience, we're a trusted partner worldwide.
                            </p>
                            <p className="mt-2 text-base text-gray-700 md:text-lg">
                                Our experts create visually appealing websites and effective marketing strategies to drive traffic and convert leads.
                            </p>
                        </div>
                        <div>
                            <Link to="/contactus" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                                Know More..
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707652027/WebDesys-Main%20Website/b8batovlxbqioxdg7j20.webp"
                                alt=""
                                data-aos="zoom-in" data-aos-duration="1000"
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707652027/WebDesys-Main%20Website/wqjpueqm265nu1ykgxmy.webp"
                                alt=""
                                data-aos="zoom-in" data-aos-duration="1000"
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707652027/WebDesys-Main%20Website/z0tgevalj7dz7nfivcxb.webp"
                                alt=""
                                data-aos="zoom-in" data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection3
