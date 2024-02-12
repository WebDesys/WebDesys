import React from 'react'
import Typewriter from 'typewriter-effect';

const HomeSection7 = () => {
    return (
        <>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="zoom-in" data-aos-duration="1000">

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-xl font-bold tracking-tight sm:text-2xl sm:leading-none" >
                        <Typewriter
                            options={{
                                strings: ['How It Works..', 'How It Works..'],
                                autoStart: true,
                                pauseFor: 1000,
                                loop: true,
                            }}
                        />
                    </h2>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Our Website</span>
                        </span>
                        <span> Development{' '}
                            <span><Typewriter
                                options={{
                                    strings: ['Process', 'Process'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                            </span>
                        </span>
                    </h2>
                </div>

                <div className="mt-16 grid gap-8 row-gap-0 lg:grid-cols-3">

                    <div className="relative text-center" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center overflow-hidden w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707658768/WebDesys-Main%20Website/qhugegcsz4k31lladhmj.webp" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Idea & Analysis</p>
                        <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                            <svg
                                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                />
                                <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="15,5 22,12 15,19 "
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="relative text-center" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center overflow-hidden w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707658768/WebDesys-Main%20Website/zsxs1nbhuwedczozbmz7.webp" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Designing</p>
                        <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                            <svg
                                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                />
                                <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="15,5 22,12 15,19 "
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="relative text-center" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center overflow-hidden w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707658768/WebDesys-Main%20Website/d8d4sgl39skgsvqn4szw.webp" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Development</p>
                    </div>

                </div>

                <div className="mt-16 grid gap-8 row-gap-0 lg:grid-cols-3">

                    <div className="relative text-center" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center overflow-hidden w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707658768/WebDesys-Main%20Website/d68j82q7lfxc2tfx4ho6.webp" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Testing & Launching</p>
                        <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                            <svg
                                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                />
                                <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="15,5 22,12 15,19 "
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="relative text-center" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center overflow-hidden w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707658768/WebDesys-Main%20Website/bdzwih7m3pmy37lbdi2l.webp" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Show Statistics & Hand-over</p>
                        <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                            <svg
                                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    fill="none"
                                    strokeMiterlimit="10"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                />
                                <polyline
                                    fill="none"
                                    strokeMiterlimit="10"
                                    points="15,5 22,12 15,19 "
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="relative text-center" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center overflow-hidden w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707658768/WebDesys-Main%20Website/vck92xnr4zvzaeme2pwh.webp" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Customer Support</p>
                    </div>

                </div>


            </div>
        </>
    )
}

export default HomeSection7