import React, { useEffect } from 'react'
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import Navbar from '../../components/Navbar/Navbar'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../components/Footer/Footer';
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>Privacy Policy - Webdesys</title>
                <meta name="description" content="Learn about the privacy practices and policies at Webdesys. Our Privacy Policy outlines how we handle and protect your personal information when you use our services. Safeguarding your privacy is our top priority." />
                <meta name="keywords" content="privacy policy, data protection, personal information, privacy practices, privacy policy statement, Webdesys" />
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
                            <span className='text-gray-900'>Privacy Policy</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Keeping Your Information Secure and Confidential.
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1689143523/webdesys/Untitled_design_6_aznykf.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="mb-10 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:w-full">

                    <div className="w-full mb-6" data-aos="zoom-in" data-aos-duration="1000">
                        <p className="text-base text-gray-900 md:text-md font-semibold">
                            At WebDesys, we prioritize the privacy and security of our website visitors, customers, and users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with our website and utilize our services. By accessing our website or using our services, you agree to the terms and practices described in this policy.
                        </p>
                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Information Collection
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            A. Personal Information: When you visit our website or engage with our services, we may collect personal information that you voluntarily provide, such as your name, email address, phone number, and company details. This information is necessary to communicate with you, fulfill your requests, and improve our services.<br/>
                            B. Usage Data: We may automatically collect non-personal information about your interactions with our website, such as your IP address, browser type, referring pages, and operating system. This data helps us analyze trends, administer the site, and enhance user experience.
                        </p>
                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Information Usage
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            A. Service Delivery: We use your personal information to provide and improve our services, respond to your inquiries, and fulfill your requests. This may include sending you important updates, notifications, and administrative messages.<br />
                            B. Personalization: We may use your information to personalize your experience on our website, tailor our offerings to your preferences, and provide relevant content and recommendations.<br />
                            C. Marketing and Communication: With your consent, we may send you promotional materials, newsletters, and marketing communications related to our products and services. You have the option to unsubscribe from these communications at any time.<br />
                            D. Legal Compliance: We may use and disclose your personal information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests, and to protect our rights, privacy, safety, or property, as well as that of our users and the public.
                        </p>
                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Information Sharing
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            A. Third-Party Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating our website and delivering our services. These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your data.<br />
                            B. Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction. We will notify you via email and/or prominent notice on our website of any change in ownership or uses of your personal information.<br />
                            C. Legal Requirements: We may disclose your information if required by law, in response to a valid legal process, or to protect our rights, privacy, safety, or property.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Data Security
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission or storage over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Cookies and Tracking Technologies
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            We may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You have the option to disable cookies through your browser settings, but this may limit your access to certain features of our website.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Links to Third-Party Websites
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            Our website may contain links to third-party websites or services that are not under our control. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of these third parties before providing any personal information.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Children's Privacy
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            Our website and services are not directed to individuals under the age of 13. We do not knowingly collect or solicit personal information from children. If you believe that we may have inadvertently collected personal information from a child, please contact us, and we will take prompt action to delete such information from our records.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Changes to this Privacy Policy
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            We reserve the right to modify or update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this page periodically to stay informed about how we collect, use, and protect your personal information.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            Contact Us
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at support@webdesys.com
                        </p>

                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            Last updated:12/07/2023
                        </p>

                    </div>
                </div>
            </div>


            <HomeSection10 />
            <Footer />

        </div >
    )
}

export default PrivacyPolicy