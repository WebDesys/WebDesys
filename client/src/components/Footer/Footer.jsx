import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'
import { FaTwitterSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { BsYoutube } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-50 to-sky-100 border-t-2 border-gray-400'>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">

                    <div className="md:max-w-md lg:col-span-2" data-aos="zoom-in" data-aos-duration="1000">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685439572/webdesys/webdesys_logo_v4bxps.webp" alt="logo" className="md:cursor-pointer h-24" />
                        </a>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-gray-900 font-semibold font-sans" data-aos="zoom-in" data-aos-duration="1000">
                                Transform your online presence with WebDesys - a Premier Web design, Web Development, App Development and digital marketing Company, providing top-notch SEO, SMM, Logo Design, and Graphic Design services globally.
                            </p>
                            <p className="mt-8 text-2xl text-gray-700 flex gap-8">
                                <a href="https://www.linkedin.com/company/webdesys" rel="noreferrer" target='_blank' data-aos="zoom-in" data-aos-duration="1000" ><BsLinkedin className='text-blue-700' /> </a>

                                <a href="https://instagram.com/webdesys" rel="noreferrer" target='_blank' data-aos="zoom-in" data-aos-duration="1000"><GrInstagram className='text-pink-700' /> </a>

                                <a href="https://www.facebook.com/webdesys" rel="noreferrer" target='_blank' data-aos="zoom-in" data-aos-duration="1000"><GrFacebook className='text-blue-700' /> </a>

                                <a href="https://www.youtube.com/@webdesys" rel="noreferrer" target='_blank' data-aos="zoom-in" data-aos-duration="1000"><BsYoutube className='text-red-500' /> </a>

                                <a href="https://twitter.com/WebDesys" rel="noreferrer" target='_blank' data-aos="zoom-in" data-aos-duration="1000"><FaTwitterSquare className='text-blue-700' /> </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-2 md:grid-cols-2" data-aos="zoom-in" data-aos-duration="1000" >
                        <div>
                            <p className="font-bold text-lg tracking-wide text-gray-900">
                                Menu
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        to="/"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/aboutus"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/our_projects"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Our Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blogs"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/career"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Career
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contactus"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/faqs"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        FAQS
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-bold text-lg tracking-wide text-gray-900">
                                Services
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        to="/services/mobile_app_development"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Mobile Application
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/mernstack_development"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Web Development (By Technologies)
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/ecom_development"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        E Commerce
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/graphics_designing"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Graphics Designing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/laravel_development"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Laravel Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/prestashop_development"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Prestashop Development
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* <div>
                            <p className="font-bold text-lg tracking-wide text-gray-900">
                                Quick Links
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link
                                        to="/faqs"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/privacy_policy"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/terms_services"
                                        className=" font-semibold text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        Terms & Services
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                    <div className="md:max-w-md lg:col-span-2" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="-mt-2 lg:max-w-sm">
                            <p className="p-2 font-bold text-xl text-gray-900 font-sans">
                                Address
                            </p>
                            <p className="p-2 text-sm text-gray-900 font-semibold font-sans items-start flex gap-2">
                                <ImLocation2 className='text-5xl text-blue-700' /> WebDesys, Plot C-2, WorkBox Spaces, 15th Floor, ESquare Building, Sector 96, Noida, Uttar Pradesh, India - 201301
                            </p>
                            <p className="p-2 text-sm text-gray-900 font-semibold font-sans items-center flex gap-2">
                                <BsFillTelephoneInboundFill className='text-md text-blue-700' /> +91-9554555557 (WhatsApp only)
                            </p>
                            <a href="mailto:info@webdesys.com" className="p-2 text-sm text-gray-900 font-semibold font-sans items-center flex gap-2">
                                <AiFillMail className='text-md text-blue-700' /> info@webdesys.com

                            </a>
                            <a href="mailto:admin@webdesys.com" className="p-2 text-sm text-gray-900 font-semibold font-sans items-center flex gap-2">
                                <AiFillMail className='text-md text-blue-700' /> admin@webdesys.com
                            </a>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                    <p className="text-sm text-gray-900 font-semibold font-sans">
                        © Copyright 2023 <span className='text-blue-700 font-bold text-xl'><a href="https://www.webdesys.com" target="_blank" rel="noreferrer" className='font-bold text-blue-700 text-xl'>www.webdesys.com</a></span> is Proudly Powered & Owned by <a href="https://www.webdesys.com" target="_blank" rel="noreferrer" className='font-bold text-blue-700 text-xl'>WebDesys</a>. All rights reserved.
                    </p>

                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <Link
                            to="/privacy_policy"
                            className="text-sm text-gray-900 font-semibold font-sans transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/t&c"
                            className="text-sm text-gray-900 font-semibold font-sans transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            to="/refund_policy"
                            className="text-sm text-gray-900 font-semibold font-sans transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            Refund Policy
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer