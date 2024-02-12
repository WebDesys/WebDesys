import React, { useEffect } from 'react'
import Navbar from './../../../components/Navbar/Navbar';
import HomeSection10 from '../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../../components/Footer/Footer';
import MoveTopBtn from '../../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const BigCommDeve = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>BigCommerce Development | SEO-Friendly & Plagiarism-Free Websites | WebDesys</title>
                <meta name="description" content="WebDesys specializes in BigCommerce development, offering SEO-friendly and plagiarism-free website solutions. Contact us for professional BigCommerce development services to enhance your online presence today!" />

                <meta name="keywords" content="BigCommerce development, SEO-friendly websites, plagiarism-free websites, WebDesys" />
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
                            <span className='text-gray-900'>BigCommerce Development</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Unlock the Power of BigCommerce: Revolutionize Your Web Development.<br className="hidden md:block" />
                            BigCommerce Development: Where Innovation Meets Functionality
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707653622/WebDesys-Main%20Website/imn5tujzarg7bqkn2wgc.webp" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-3" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                At WebDesys, we specialize in BigCommerce development, providing businesses with robust and scalable e-commerce solutions. BigCommerce is a powerful platform that enables businesses to create and manage their online stores with ease. Our team of experienced developers has in-depth knowledge of BigCommerce's features and capabilities, allowing us to build customized e-commerce websites tailored to our clients' specific needs. Whether you're starting a new online store or looking to migrate your existing e-commerce site to BigCommerce, we can help you leverage the platform's advanced functionality to drive sales and enhance the user experience.

                                When it comes to BigCommerce development, we prioritize creating responsive and visually appealing online stores that are optimized for conversions. Our team works closely with clients to understand their brand, target audience, and business goals, ensuring that the design and functionality of the BigCommerce store align with their vision. From implementing intuitive navigation and seamless checkout processes to integrating payment gateways and third-party apps, we focus on creating a user-friendly shopping experience that encourages customers to make purchases.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                In addition to designing and developing BigCommerce stores, we also offer comprehensive support and maintenance services. We understand the importance of keeping your online store running smoothly and securely at all times. Our team provides regular updates, performs security audits, and resolves any technical issues that may arise, allowing you to focus on growing your business while we take care of the technical aspects of your BigCommerce store. With our expertise in BigCommerce development and ongoing support, you can have peace of mind knowing that your e-commerce site is in capable hands.

                                In summary, our BigCommerce development services combine technical expertise, creative design, and a focus on user experience to deliver high-quality e-commerce solutions. Whether you're a small business or a large enterprise, we have the skills and experience to leverage the power of BigCommerce and help you establish a strong online presence. From initial consultation to ongoing support, we are committed to delivering exceptional results that drive sales and contribute to the success of your e-commerce business. Contact us today to discuss your BigCommerce development needs and take your online store to the next level.
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
                        <h6 className="mb-2 font-semibold leading-5">Customized E-commerce Solutions</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            BigCommerce Development offers tailored e-commerce solutions to meet your unique business needs. From designing a visually appealing storefront to integrating payment gateways and inventory management systems, BigCommerce ensures a seamless and customized online shopping experience for your customers.
                        </p>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Scalability and Performance</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            With BigCommerce, you can scale your online store effortlessly as your business grows. It provides a robust and reliable infrastructure that can handle high traffic and sales volumes, ensuring optimal performance even during peak seasons, ultimately maximizing customer satisfaction and revenue generation.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Mobile-Optimized Shopping Experience</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            BigCommerce Development focuses on delivering a mobile-first approach, providing a responsive and user-friendly shopping experience across all devices. With mobile commerce on the rise, BigCommerce ensures your online store looks great and functions flawlessly on smartphones and tablets, capturing the growing mobile audience.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Seamless Third-Party Integrations</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            BigCommerce integrates seamlessly with popular third-party applications and tools, enabling you to enhance the functionality of your online store. Whether it's integrating with marketing automation platforms, CRM systems, or shipping and logistics providers, BigCommerce ensures a smooth and efficient workflow for your business.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Robust Security and Compliance</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Security is paramount in e-commerce, and BigCommerce prioritizes it by providing robust security measures, including SSL certificates, secure payment gateways, and regular security updates. It also complies with industry standards and regulations, such as PCI DSS compliance, ensuring your customers' sensitive data is protected.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Advanced Analytics and Reporting</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            BigCommerce offers powerful analytics and reporting features that provide valuable insights into your store's performance. You can track sales, monitor customer behavior, analyze conversion rates, and make data-driven decisions to optimize your marketing strategies and improve your online store's overall profitability.
                        </p>

                    </div>

                </div>
            </div>

            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default BigCommDeve