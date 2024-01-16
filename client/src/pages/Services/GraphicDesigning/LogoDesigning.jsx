import React, { useEffect } from 'react'
import Navbar from './../../../components/Navbar/Navbar';
import HomeSection10 from '../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../../components/Footer/Footer';
import MoveTopBtn from '../../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const LogoDesigning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Logo Designing | SEO-Friendly & Plagiarism-Free Websites | WebDesys</title>
                <meta name="description" content="WebDesys specializes in Logo Designing, offering SEO-friendly and plagiarism-free website solutions. Contact us for professional Logo Designing services to enhance your online presence today!" />

                <meta name="keywords" content="Logo Designing, SEO-friendly websites, plagiarism-free websites, WebDesys" />
                <meta name="author" content="WebDesys" />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Navbar />
            <MoveTopBtn />

            <div className="border-b-2 border-gray-400 mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">

                <div className="flex flex-col justify-center items-center lg:flex-row" >

                    <div className="mb-6  lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="fade-right" data-aos-duration="2000">

                        <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-white lg:w-20 lg:h-20">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685433704/webdesys/star-icon_yurvwj.png" alt="" />
                        </div>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-4 font-sans text-xl font-bold tracking-tight sm:text-2xl sm:leading-none" >
                            <Typewriter
                                options={{
                                    strings: ['GET STARTED NOW', 'GET IN TOUCH'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                            <span className='text-gray-900'>Logo Designing</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Building Beautiful Logos that Leave a Lasting Impression.<br className="hidden md:block" />
                            Where Design Meets Functionality for a Seamless Web Experience.
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1687434242/webdesys/terflutter_12_lo1jtq.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-3" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                Logo Designing is a crucial aspect of building a strong brand identity. A well-designed logo can communicate the essence of a business, convey professionalism, and leave a lasting impression on customers. At WebDesys, we understand the significance of a captivating logo, and we offer top-notch logo design services to help businesses stand out in a competitive market.

                                Our team of skilled designers combines creativity and strategic thinking to create logos that encapsulate the values and personality of your brand. We work closely with our clients to understand their vision, target audience, and industry landscape. By conducting in-depth research, we gather insights that enable us to design logos that resonate with your target market and differentiate you from competitors.

                                In addition to aesthetics, we prioritize versatility and scalability in logo design. Your logo needs to be adaptable across various mediums, from digital platforms to print materials. We ensure that your logo maintains its visual integrity and legibility, regardless of its size or placement.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                At WebDesys, we believe in a collaborative approach. We value your input throughout the logo design process, and our team is dedicated to providing multiple iterations and revisions until we achieve a design that exceeds your expectations. Our goal is to create a logo that not only reflects your brand's values but also resonates with your target audience, making a memorable and lasting impression.

                                If you're looking for professional logo design services that capture the essence of your brand and help you establish a strong visual identity, WebDesys is here to assist you. Contact us today to discuss your logo design requirements and take the first step towards creating a remarkable brand presence.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

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
                        Our team of skilled developers specializes in front-end and back-end technologies, crafting visually appealing designs and robust functionalities to deliver seamless online experiences for businesses across industries.
                    </p>
                </div>
                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Importance of Logo Design</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            A well-crafted logo is a vital component of brand identity. It visually represents a company or organization, conveying its values and personality. A strong logo creates instant recognition and builds trust among customers, making it essential for establishing a memorable brand presence.
                        </p>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Elements of Effective Logos</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            A successful logo design incorporates key elements such as simplicity, versatility, relevance, and memorability. Simple logos are easily recognizable, versatile designs adapt to different platforms, relevant logos align with the brand's message, and memorable logos leave a lasting impression on viewers.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Understanding Target Audience</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            To create a compelling logo, it's crucial to understand the target audience. Researching their preferences, demographics, and cultural nuances helps designers craft a logo that resonates with the intended audience, fostering a connection and enhancing brand affinity.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Strategic Use of Colors and Typography</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Colors evoke emotions and convey messages. Choosing the right color palette is essential in logo design. Similarly, typography plays a vital role in representing a brand's personality. The selection of fonts should align with the brand's tone and values, ensuring consistency and readability.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Versatility and Scalability</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            A well-designed logo should be versatile and scalable. It should look equally impressive across different mediums, including digital and print platforms. A scalable logo retains its visual impact when scaled up or down, ensuring legibility and clarity in various sizes and applications.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Timelessness and Longevity</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            A logo should stand the test of time. Avoiding trends and focusing on timeless design principles ensures that the logo remains relevant and effective for years to come. A timeless logo has longevity and avoids the need for frequent redesigns, maintaining brand consistency and recognition.
                        </p>

                    </div>

                </div>
            </div>

            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default LogoDesigning
