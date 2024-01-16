import React, { useEffect } from 'react'
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import Navbar from '../../components/Navbar/Navbar'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../components/Footer/Footer';
import { Helmet } from "react-helmet";


const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>Terms and Conditions - Webdesys</title>
                <meta name="description" content="Read and understand the Terms and Conditions of Webdesys. This page outlines the terms of service, usage rights, and legal agreements between Webdesys and its users. Stay informed to ensure a smooth and transparent relationship." />
                <meta name="keywords" content="terms and conditions, legal agreements, terms of service, usage rights, Webdesys" />
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
                            <span className='text-gray-900'>Terms and Conditions</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Empowering Users through Knowledge and Transparency.
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1689143435/webdesys/Untitled_design_5_cm0dgh.png" alt="" />
                    </div>
                </div>
            </div>


            <div className="mb-10 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:w-full">

                    <div className="w-full mb-6" data-aos="zoom-in" data-aos-duration="1000">
                        <p className="text-base text-gray-900 md:text-md font-semibold">
                            Welcome to WebDesys! We are an IT service and product company committed to providing high-quality services and products to our clients. To ensure a fair and transparent relationship, please read and understand the following Terms and Conditions:
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Acceptance of Terms:-
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            By accessing and using our website (www.webdesys.com) and any of our services or products, you agree to be bound by these Terms and Conditions, as well as any applicable laws and regulations. If you do not agree with any of the terms, please refrain from using our website or services.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Intellectual Property Rights:-
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            a.) All content on our website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of WebDesys and protected by intellectual property laws. You may not copy, reproduce, distribute, or modify any of our content without our prior written consent.<br />
                            b.) We strive to ensure that all content we create for our clients is 100% plagiarism-free. However, we cannot be held responsible for any external sources or content provided by clients that may infringe on copyright or intellectual property rights. It is the client's responsibility to ensure the legality and originality of all content they provide.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Use of Services:-
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            a.) Our services are intended for lawful purposes only. You agree not to use our services for any illegal or unauthorized activities.<br />
                            b.) You shall not attempt to disrupt or interfere with the security or functioning of our website or services, including but not limited to introducing viruses, malware, or any other harmful code.<br />
                            c.) We reserve the right to refuse service to anyone for any reason at any time.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Privacy Policy:-
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            We value your privacy and handle your personal information in accordance with our Privacy Policy. By using our website and services, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Limitation of Liability:-
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            a.) WebDesys and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use of our website or services.<br />
                            b.) We make no warranties or representations, expressed or implied, regarding the accuracy, reliability, or completeness of any information or content provided on our website.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Modifications to Terms and Conditions:-
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            WebDesys reserves the right to modify or update these Terms and Conditions at any time without prior notice. It is your responsibility to review the most current version of the Terms and Conditions regularly.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Governing Law and Jurisdiction :-
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or related to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts.
                        </p>

                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            By using our website and services, you acknowledge that you have read, understood, and agreed to abide by these Terms and Conditions. If you have any questions or concerns, please contact us at support@webdesys.com
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            Last updated: 12/07/2023
                        </p>
                    </div>
                </div>
            </div>

            <HomeSection10 />
            <Footer />

        </div >
    )
}

export default TermsConditions