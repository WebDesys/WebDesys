import React, { useEffect } from 'react'
import Navbar from './../../../components/Navbar/Navbar';
import HomeSection10 from '../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../../components/Footer/Footer';
import MoveTopBtn from '../../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const InternetMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title> Internet Marketing Services | Webdesys - Boost Your Online Presence</title>
                <meta name="description" content="Webdesys offers comprehensive Internet Marketing Services to help businesses increase their online visibility and drive targeted traffic to their websites. Our expert team implements strategies for search engine optimization, social media marketing, content marketing, and more." />
                <meta name="keywords" content=" internet marketing services, online marketing solutions, search engine optimization, social media marketing, content marketing, PPC advertising, web analytics, digital marketing agency" />
                <meta name="author" content="WebDesys" />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Navbar />
            <MoveTopBtn />

            <div className="border-b-2 border-gray-400 mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">

                <div className="flex flex-col justify-center items-center lg:flex-row" >

                    <div className="mb-6  lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="fade-right" data-aos-duration="2000">

                        <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-white lg:w-20 lg:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707678417/WebDesys-Main%20Website/zkbmbi55gbfobgmzexuj.webp" alt="" />
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
                            <span className='text-gray-900'>Internet Marketing Services</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Harness the Power of the Web with Cutting-Edge Internet Marketing Solutions.
                            <br className="hidden md:block" />
                            Unleash Your Online Potential with Results-Driven Internet Marketing Campaigns.
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707566750/WebDesys-Main%20Website/Latest_tech.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-3" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                Internet marketing services encompass a wide range of strategies and techniques designed to promote businesses, products, and services online. In today's digital age, having a strong online presence is crucial for companies looking to reach their target audience and stay ahead of the competition. Internet marketing services offer effective solutions to drive website traffic, increase brand visibility, and generate leads.

                                Search engine optimization (SEO) is a fundamental aspect of internet marketing services. It involves optimizing a website's content and structure to rank higher in search engine results pages. By targeting relevant keywords and enhancing the website's user experience, SEO helps businesses improve their organic visibility and attract more qualified traffic.
                            </p>
                            <p className="text-base text-gray-700 md:text-lg">
                                Pay-per-click (PPC) advertising is another essential internet marketing service. It allows businesses to display targeted ads on search engine results pages and other relevant websites. With PPC, advertisers pay only when a user clicks on their ad, making it a cost-effective way to reach potential customers. PPC campaigns can be highly targeted, enabling businesses to tailor their messaging to specific demographics and geographic locations.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                Social media marketing is a powerful internet marketing service that leverages popular social media platforms to connect with audiences. By creating engaging content, running targeted ads, and fostering community engagement, businesses can increase brand awareness, drive website traffic, and generate leads. Social media marketing also offers valuable insights into audience behavior and preferences, enabling businesses to refine their marketing strategies.

                                Email marketing remains a tried-and-true internet marketing service that allows businesses to communicate directly with their target audience. Through personalized email campaigns, businesses can nurture leads, promote new products or services, and build customer loyalty. Email marketing automation tools further enhance efficiency by delivering targeted messages at specific stages of the customer journey.
                            </p>
                            <p className="mt-2 text-base text-gray-700 md:text-lg">
                                Internet marketing services are continually evolving to keep up with changing consumer behavior and technological advancements. They provide businesses with the tools and strategies needed to thrive in the digital landscape, reach their target audience, and achieve their marketing goals. With the right combination of internet marketing services, businesses can create a strong online presence, build brand loyalty, and drive long-term success.
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
                        <h6 className="mb-2 font-semibold leading-5">Search Engine Optimization (SEO)</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Enhance your online visibility and organic search rankings with our comprehensive SEO strategies. We optimize your website, conduct keyword research, and implement on-page and off-page SEO techniques to drive targeted traffic and increase conversions.
                        </p>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Pay-Per-Click (PPC) Advertising</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Maximize your ROI with strategic PPC campaigns tailored to your business goals. We create compelling ads, perform keyword research, and optimize bids to ensure your brand reaches the right audience, generating quality leads and boosting revenue.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Social Media Marketing (SMM)</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Harness the power of social media platforms to build brand awareness, engage your audience, and drive conversions. We develop customized social media strategies, create compelling content, manage campaigns, and monitor performance to achieve optimal results.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Content Marketing</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Deliver valuable and engaging content that resonates with your target audience. Our content marketing services include content creation, optimization, and distribution across various channels. We focus on creating informative, shareable content that establishes your brand as an industry authority and drives customer loyalty.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Email Marketing</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Leverage the potential of email marketing to nurture leads and strengthen customer relationships. We develop targeted email campaigns, create compelling newsletters, and implement automation techniques to deliver personalized messages that drive engagement and conversions.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Conversion Rate Optimization (CRO)</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Optimize your website's performance and increase conversion rates with our CRO strategies. We analyze user behavior, conduct A/B testing, and optimize landing pages, forms, and call-to-action buttons to maximize your website's potential and ensure a seamless user experience that drives conversions.
                        </p>

                    </div>

                </div>
            </div>

            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default InternetMarketing
