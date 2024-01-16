import React from 'react'
import Typewriter from 'typewriter-effect';

const HomeSection6 = () => {
    return (
        <div className=" px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="zoom-in" data-aos-duration="1500">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Technologies</span>
                    </span>{' '}
                    <span><Typewriter
                        options={{
                            strings: ['We Use..', 'We Use..'],
                            autoStart: true,
                            pauseFor: 1000,
                            loop: true,
                        }}
                    />
                    </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Our experts are determined to deliver high-quality services that can transform your business using state-of-the-art technology. It authorizes you to remain ahead of the competition in your industry.
                </p>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">



                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="text-center border-2 rounded shadow-sm py-4 bg-gradient-to-r from-slate-50 to-sky-100 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1697004669/webdesys/1_daenrr.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">MongoDB</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4 bg-gradient-to-r from-sky-100 to-slate-50 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1697004669/webdesys/2_o1nqzv.png" alt="" className='rounded-md' />
                        </div>
                        <p className="mb-2 font-bold text-md">Express</p>
                    </div>

                    <div className="text-center rounded shadow-sm py-4  bg-gradient-to-r from-sky-100 to-slate-50 border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685363743/webdesys/Untitled_design_18_dppftn.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">React</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4 bg-gradient-to-r from-sky-100 to-slate-50 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685364146/webdesys/ss_1_zzjpg4.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Node JS</p>
                    </div>

                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center border-2 rounded shadow-sm py-4 bg-gradient-to-r from-slate-50 to-sky-100 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685363838/webdesys/Untitled_design_19_csu9ga.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Kotlin</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4 hover:border-2  bg-gradient-to-r from-slate-50 to-sky-100 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685364336/webdesys/ss_2_owkwzf.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Python</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4 bg-gradient-to-r from-sky-100 to-slate-50 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685364405/webdesys/ss_3_hvvozz.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Swift</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4  bg-gradient-to-r from-slate-50 to-sky-100 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685364491/webdesys/ss_4_fjhjga.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Javascript</p>
                    </div>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center border-2 rounded shadow-sm py-4 bg-gradient-to-r from-sky-100 to-slate-50 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686116417/webdesys/1_wu4aij.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">WordPress</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4 hover:border-2  bg-gradient-to-r from-slate-50 to-sky-100 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686116416/webdesys/3_ifmmer.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">PHP</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4 bg-gradient-to-r from-sky-100 to-slate-50 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686116416/webdesys/4_e9ygbq.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Django</p>
                    </div>

                    <div className="text-center border-2 rounded shadow-sm py-4   bg-gradient-to-r from-slate-50 to-sky-100 hover:border-2 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img className='rounded-md' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686116416/webdesys/2_wmjhvy.png" alt="" />
                        </div>
                        <p className="mb-2 font-bold text-md">Laravel</p>
                    </div>
                </div>

                {/* <div className="mt-12 grid place-items-center" data-aos="zoom-in" data-aos-duration="1000">
                    <a href="/" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                        Many More..
                    </a>
                </div> */}
            </div>


        </div>
    )
}

export default HomeSection6