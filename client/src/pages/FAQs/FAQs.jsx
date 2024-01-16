import React, { useEffect, useState } from 'react'
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import Navbar from '../../components/Navbar/Navbar'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../components/Footer/Footer';
import { Helmet } from "react-helmet";

const FAQs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>FAQs | WebDesys</title>
                <meta name="description" content="Get answers to frequently asked questions about WebDesys' web design, development, and marketing services. Find out more about our pricing, process, and portfolio. Contact us if you have any other questions." />
                <meta name="keywords" content="FAQs, WebDesys, web design, web development, marketing services" />
                <meta name="author" content="WebDesys" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <Navbar />
            <MoveTopBtn />

            {/* Header Component */}
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
                            <span className='text-gray-900'> Frequently Asked Questions: </span>
                            <br className="hidden md:block" />
                            Your Questions, Answered:
                            <br className="hidden md:block" />
                            <span> Unleashing Clarity</span> <span className='text-gray-900'> and</span>{' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                Knowledge!
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Knowledge Hub: Empowering You with Answers to Common Questions!
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686139369/webdesys/hye_517_320px_5_ggn5fq.png" alt="" />
                    </div>
                </div>
            </div>


            {/* frequently asked questions */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-6xl">
                    <div className="space-y-4">
                        <Item title="Q1. What services does WebDesys offer?">
                            A: WebDesys offers a range of services including web design, web development, digital marketing, search engine optimization (SEO), e-commerce solutions, website maintenance and support, and website hosting.
                        </Item>
                        <Item title="Q2. How much does it cost to work with WebDesys?">
                            A: The cost of working with WebDesys depends on the specific services you require. We offer customized pricing based on your unique needs and budget. Contact us for a quote.
                        </Item>
                        <Item title="Q3. Can WebDesys help improve my website's search engine ranking?">
                            A: Yes, WebDesys specializes in search engine optimization (SEO) and can help improve your website's search engine ranking through a variety of techniques including keyword research, on-page optimization, content creation, and link building.
                        </Item>
                        <Item title="Q4. How long does it take to design and develop a website with WebDesys?">
                            A: The timeline for designing and developing a website with WebDesys varies depending on the complexity of the project. We work with each client to establish a project timeline that meets their needs and ensures timely delivery.
                        </Item>
                        <Item title="Q5. Can WebDesys create a custom e-commerce solution for my business?">
                            A: Yes, WebDesys can create a custom e-commerce solution that meets the specific needs of your business. We have experience with a variety of e-commerce platforms and can help you choose the right one for your business.
                        </Item>
                        <Item title="Q6. Will my website be mobile-friendly?">
                            A: Yes, all websites designed and developed by WebDesys are mobile-friendly. We ensure that your website is optimized for mobile devices to provide the best user experience for all visitors.
                        </Item>
                        <Item title="Q7. Can WebDesys provide ongoing maintenance and support for my website?">
                            A: Yes, WebDesys provides ongoing maintenance and support for all websites we design and develop. We offer a range of maintenance and support plans to ensure your website stays up-to-date and functioning properly.
                        </Item>
                        <Item title=" Q8. Does WebDesys offer website hosting services?">
                            A: Yes, WebDesys offers website hosting services. We can host your website on our secure and reliable servers to ensure maximum uptime and fast load times.
                        </Item>
                        <Item title=" Q11.  How much does it cost to work with WebDesys?">
                            A: The cost of working with WebDesys depends on the specific services you require. We offer customized pricing based on your unique needs and budget. Contact us for a quote.

                        </Item>

                    </div>
                </div>
            </div>


            <HomeSection10 />
            <Footer />

        </div >
    )
}

export default FAQs

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className=" text-md font-semibold md:text-lg">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700  md:text-md">{children}</p>
                </div>
            )}
        </div>
    );
};
