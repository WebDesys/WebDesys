import React, { useEffect } from 'react'
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import Navbar from '../../components/Navbar/Navbar'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../components/Footer/Footer';
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>Refund Policy - Webdesys</title>
                <meta name="description" content="Learn about our Refund Policy at Webdesys. This page outlines the terms and conditions for requesting refunds on our products and services. We prioritize customer satisfaction and strive to provide transparent refund procedures." />
                <meta name="keywords" content="refund policy, refunds, terms and conditions, customer satisfaction, Webdesys" />
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
                            <span className='text-gray-900'>Refund Policy</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Your happiness is our success.
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1689143624/webdesys/Untitled_design_7_hzalz1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="mb-10 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:w-full">

                    <div className="w-full mb-6" data-aos="zoom-in" data-aos-duration="1000">
                        <p className="text-base text-gray-900 md:text-md font-semibold">
                            At WebDesys, we are committed to delivering high-quality IT services and products to our clients. We aim to ensure your satisfaction with every project you undertake with us. However, we understand that there may be situations where a refund is necessary. Please review our refund policy outlined below.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            1. Eligibility for Refund
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            A. Projects cost worth greater than USD 1000  for International Clients and INR 50,000 for Indian Clients: Refunds are applicable for projects with a total cost equal to or exceeding USD 1000 International Clients & INR 50,000 for Indian Clients.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            B. Refund Amount: In eligible cases, the refund will be determined based on the project cost, with a minimum reservation amount that covers the time, effort, and resources invested in initiating the project. The refund policy differs for Indian and international clients as follows:
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            i). Indian Clients:
                            For projects with a total cost equal to or exceeding INR 50,000, the refund will be 50% of the project cost or INR 25,000, whichever amount is lower. The remaining amount, including INR 25,000 or 50% of the project cost (whichever is greater), will be reserved by WebDesys to cover the time, effort, and resources invested in the project.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            ii). International Clients:
                            For projects with a total cost equal to or exceeding USD 10,000, the refund will be 50% of the project cost or USD 5,000, whichever amount is lower. The remaining amount, including USD 5,000 or 50% of the project cost (whichever is greater), will be reserved by WebDesys to cover the time, effort, and resources invested in the project.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            Please note that these reservation amounts are necessary to compensate WebDesys for the work already completed and to ensure the sustainability of our business operations.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            C. Refund Timeframe: Once a refund is approved, we will initiate the refund process within 15 working business days. The actual time for the refund to reflect in your account may vary depending on your bank or payment provider.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            2. Refund Conditions
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            A. First Prototype or Within 7 Days: Refunds will only be considered if the project is within its first prototype or within 7 days of project initiation. This ensures that a reasonable period is provided for evaluation and feedback.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            B. Unsatisfactory Performance: Refunds may be granted if our team fails to meet the agreed-upon project requirements or if the delivered solution significantly deviates from the scope agreed upon during the initial discussions.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            C. Clear Documentation: To initiate a refund request, you must provide clear and specific documentation highlighting the areas of dissatisfaction or non-compliance. This will help us assess your claim promptly and accurately.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            D. No Refund for Completed Projects: Refunds will not be granted for completed projects, including projects that have undergone multiple revisions and iterations after the initial prototype stage or projects that have been in progress for more than 7 days.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            3. How to Request a Refund
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            If you believe you are eligible for a refund based on the conditions mentioned above, please follow the steps below to initiate the refund process:
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            A. Contact our Customer Support: Reach out to our customer support team within the first 7 days of project initiation or after the first prototype is delivered. Provide them with all the necessary details regarding your refund request.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            B. Documentation Submission: Submit clear and comprehensive documentation highlighting the specific reasons for the refund request. This may include project requirements, communications, and any relevant supporting evidence.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            C. Evaluation and Approval: Our team will review your refund request and the provided documentation. We will assess the validity of the claim and determine if it meets the refund policy conditions. We may request further information or clarification if needed.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            D. Refund Processing: If your refund request is approved, we will initiate the refund process within 7 working business days. The refund will be issued using the same payment method used for the project.
                        </p>

                        <p className="mt-2 text-lg text-gray-900 md:text-md font-bold">
                            4. Contact Us
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            If you have any questions or concerns regarding our refund policy or need assistance with a refund request, please contact our customer support team at support@webdesys.com. We will be happy to assist you.
                        </p>
                        <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                            Note: This refund policy is subject to change without prior notice. Please refer to the most recent version available on our website.
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
export default RefundPolicy