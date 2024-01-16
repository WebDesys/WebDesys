import React, { useEffect } from 'react'
import Navbar from './../../../components/Navbar/Navbar';
import HomeSection10 from '../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../../components/Footer/Footer';
import MoveTopBtn from '../../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const PortfolioDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Portfolio Website Development Services WebDesys | Custom Website Solutions | WebDesys</title>
                <meta name="description" content="WebDesys offers Portfolio Website Development  services to help you create a website that meets your unique business needs. Our services include website design, development, WordPress development, Shopify development, maintenance, and more. Contact us to start your web development project today." />
                <meta name="keywords" content="Portfolio Website Development,Web development services, custom website solutions, website design, website development, WordPress development, Shopify development, website maintenance" />
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
                            <span className='text-gray-900'>Portfolio Website Development</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Building Digital Empires: Crafting Powerful Online Identities for Businesses.
                            <br className="hidden md:block" />
                            Elevate Your Business with Professional Portfolio Website Development.
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1687499194/webdesys/Untitled_design_5_anzba8.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-3" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                Portfolio website development plays a crucial role in showcasing an individual's or a company's work and skills to potential clients, employers, or collaborators. It serves as a digital platform where one can display their best projects, highlight their expertise, and create a compelling online presence. The development process involves various steps and considerations to ensure an effective and visually appealing portfolio website.

                                Firstly, the planning phase involves defining the goals and objectives of the portfolio website. This includes determining the target audience, identifying the key information to showcase, and selecting a suitable design and layout. Understanding the purpose and desired outcomes helps in creating a focused and cohesive website that aligns with the individual or company's branding and style.
                            </p>
                            <p className="text-base text-gray-700 md:text-lg">
                                Next, the design phase begins, where the visual elements and user interface of the portfolio website are developed. It involves selecting an appropriate color scheme, typography, and graphics that reflect the personality and professionalism of the creator. The design should be aesthetically pleasing, easy to navigate, and optimized for different devices and screen sizes, ensuring a seamless user experience.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                Testing and debugging are essential steps to ensure the portfolio website functions correctly across different browsers and devices. It involves checking for responsive design, verifying links and forms, and optimizing the website's loading speed. User feedback and usability testing can also be conducted to identify any areas that need improvement or adjustments before launching the website.

                                Once the development and testing phases are complete, the portfolio website is ready to be deployed and launched online. Web hosting services are utilized to make the website accessible on the internet. Regular updates and maintenance are necessary to keep the portfolio website up to date, adding new projects and achievements, and ensuring its functionality and security.
                            </p>
                            <p className="mt-2 text-base text-gray-700 md:text-lg">
                                In conclusion, portfolio website development is a dynamic process that involves careful planning, thoughtful design, and technical implementation. It serves as a powerful tool for individuals and companies to showcase their skills, attract potential clients or employers, and establish a strong online presence. By incorporating effective design, user-friendly interface, and search engine optimization techniques, a portfolio website can effectively represent the creator's talent and expertise in their chosen field.
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
                        <h6 className="mb-2 font-semibold leading-5">Responsive Design</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Create a visually stunning and user-friendly portfolio website with a responsive design that seamlessly adapts to different screen sizes. Ensure your website looks great on desktops, laptops, tablets, and smartphones, providing an optimal browsing experience for all visitors.
                        </p>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Showcase Your Work</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Highlight your portfolio with captivating visuals and organized content. Display your projects, case studies, or artwork in an attractive and easily navigable manner. Use high-quality images, videos, and descriptions to effectively showcase your skills, creativity, and expertise to potential clients or employers.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Clear and Concise Navigation</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Implement a clear and intuitive navigation system to help visitors easily explore your portfolio website. Use a well-structured menu and logical page hierarchy to guide users through different sections of your portfolio, ensuring they can find relevant information effortlessly.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">About Me Section</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Include an engaging "About Me" section that provides a concise summary of your background, skills, and experience. Share your unique selling points, achievements, and passions to give visitors a deeper understanding of your personality, expertise, and what sets you apart from others in your field.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Testimonials and Reviews</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Incorporate testimonials or reviews from satisfied clients or employers to build credibility and trust. Highlight positive feedback to showcase your professionalism, reliability, and the quality of your work. Testimonials can significantly influence potential clients or employers in their decision-making process.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Contact and Call-to-Action</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Make it easy for visitors to get in touch with you by including a prominently placed contact section. Provide multiple contact options, such as email, phone number, and social media profiles. Additionally, include a strong call-to-action, encouraging visitors to reach out for collaborations, job opportunities, or inquiries.
                        </p>

                    </div>

                </div>
            </div>

            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default PortfolioDev
