import React from 'react'
import './homesection2.css'
import { Link } from 'react-router-dom';

const HomeSection2 = () => {
    return (
       <>
            <div className="px-4 pb-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-12">
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

                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">The all-in-one</span>
                        </span>{' '}
                        <span>solution for your business is 
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500" > Webdesys</span>
                        </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Webdesys delivers the full spectrum of mobile app and web development services, from product design to launch. We offer cutting-edge solutions for mobile and web that drive your business objectives forward.
                    </p>
                </div>
                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100  rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707585418/WebDesys-Main%20Website/lkzrgejyc5ovtk0husds.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Web Designing</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            To differentiate our clients from their competitors we administer customized development solutions to them according to their needs and requirements.
                        </p>
                        <Link to="/services/website_designing" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                            Read More...
                        </Link>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100  rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707585418/WebDesys-Main%20Website/tydtiu8fww9oah3dtxdp.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Web Development</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Our experienced developers will create, develop and deploy your website and endeavor to give you the best design and development experience to create your website.
                        </p>
                        <Link to="/services/mernstack_development" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                            Read More...
                        </Link>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100  rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707585417/WebDesys-Main%20Website/icnw8dgnixkrmrplk59a.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Digital Marketing</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Whether an app is a promotion, a solution, a game or a revenue-generator, you are only limited by your imagination. We develop apps for Enterprise and Consumer markets.
                        </p>
                        <Link to="/services/internet_marketing" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                            Read More...
                        </Link>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707585418/WebDesys-Main%20Website/uvzmzvq1snxyquzcnty1.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Wordpress Development</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            WordPress Web designing services by WebDesys is a comprehensive solution that offers businesses and individuals a range of services to design, develop, and manage their WordPress website.
                        </p>
                        <Link to="/services/wordpress_development" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                            Read More...
                        </Link>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100  rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707585418/WebDesys-Main%20Website/anhbyriack5h7h68blq8.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">SEO Services</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            At WebDesys, we leverage the power of Artificial Intelligence (AI) and Machine Learning (ML) to enhance our SEO services. Our AI-powered tools allow us to analyze and interpret vast amounts of data quickly.
                        </p>
                        <Link to="/services/seo_services" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                            Read More...
                        </Link>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100  rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 overflow-hidden">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707585418/WebDesys-Main%20Website/lrkdsxa8ixolrba1v1tz.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Logo Designing</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            WebDesys is a leading provider of professional logo designing services that are customized to meet the unique needs of businesses. 
                        </p>
                        <Link to="/services/logo_designing" className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                            Read More...
                        </Link>
                    </div>
                    
                </div>
            </div>
       </>
    )
}

export default HomeSection2
