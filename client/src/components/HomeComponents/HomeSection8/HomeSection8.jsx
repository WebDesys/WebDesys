import React from 'react'
import './HomeSection8.css'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const HomeSection8 = () => {
    return (
        <div className="mt-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid place-items-center gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400" data-aos="zoom-in" data-aos-duration="1000">
                        {/* <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685433704/webdesys/star-icon_yurvwj.png" alt="" /> */}
                        <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707670317/WebDesys-Main%20Website/totdsirpqh4cyovhdigk.webp" alt="" />
                    </div>

                    <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-md font-bold tracking-tight sm:text-xl sm:leading-none" >
                            <Typewriter
                                options={{
                                    strings: ['MEET OUR FOUNDER & M.D.', 'MEET OUR FOUNDER & M.D.'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                        </h2>

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                            Ayush Srivastava
                        </h2>
                        
                        <p className="text-base text-gray-900 md:text-md font-semibold">
                            Ayush Srivastava's entrepreneurial leadership at WebDesys is aligned with the company's mission and vision. He strives for excellent results by leveraging cutting-edge technology and a skilled team, driving remarkable success and growth. Ayush fosters innovation and collaboration while prioritizing customer-centricity and refining services to stay ahead of the competition. Additionally, he champions corporate social responsibility to make a positive impact in communities where WebDesys operates. 
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            Ayush's dedication to the company's mission and vision inspires his team and positions WebDesys as an industry leader. He has extensive expertise in various industries, including Construction, Ed-Tech, and Research & Development. Ayush is focused on building multiple ventures, dedicated to innovation, and consistently achieving exceptional results.
                        </p>
                    </div>
                    <div>
                        <Link to="/view-our-team" className="relative px-5 py-2 font-medium text-white group">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative">View Our Team</span>
                        </Link>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <img
                        //   className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        className='ayush_img rounded shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
                        src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707587097/WebDesys-Main%20Website/mfhbaegcfjh3kk7zalbv.webp"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSection8
