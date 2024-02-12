import React from 'react'
import Typewriter from 'typewriter-effect';


const MainContent = () => {
    return (
        <>

            <div className="mt-4 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid place-items-center gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400" data-aos="zoom-in" data-aos-duration="1000">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707678417/WebDesys-Main%20Website/zkbmbi55gbfobgmzexuj.webp" alt="" />
                        </div>

                        <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">

                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-md font-bold tracking-tight sm:text-xl sm:leading-none" >
                                <Typewriter
                                    options={{
                                        strings: ['WELCOME TO WEBDESYS', 'WELCOME TO WEBDESYS'],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true,
                                    }}
                                />
                            </h2>

                            <p className="text-base text-gray-900 md:text-md font-semibold">
                                Your one-stop destination for all your app development needs. We are a leading company dedicated to helping entrepreneurs and businesses bring their visions to life through cutting-edge, customized app solutions.
                            </p>
                            <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                                Our expert team specializes in creating customized, high-quality apps for businesses of all sizes. From Android to iOS, web apps to hybrids, we leverage the latest technologies to deliver exceptional solutions tailored to your unique needs. We pride ourselves on our collaborative approach, working closely with clients to understand their goals and audience. Our dedication to excellence extends beyond development, as we offer ongoing support and maintenance to ensure your app's optimal performance. Join us at Webdesys and unlock the full potential of your business through innovative, user-friendly apps.
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <img
                            //   className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            className='ayush_img rounded shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
                            src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707730516/WebDesys-Main%20Website/qkvuqpptidyhmrpn6tcv.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>



            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-screen-lg sm:mx-auto">
                    <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-md font-bold tracking-tight sm:text-xl sm:leading-none" >
                            <Typewriter
                                options={{
                                    strings: ['OUR PROCESS', 'OUR PROCESS'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>

                    <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 bg-gray-100">
                        <div className="mb-4 lg:mb-0">
                            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                                1. Discovery and Planning
                            </h5>
                            <div className="relative pr-8">
                                <p className="text-base text-gray-900 md:text-md font-semibold">
                                    We work closely with you to understand your business objectives, target audience, and app requirements. Through thorough research and analysis, we define project scope, timelines, and milestones.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-2 flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 bg-gray-100">
                        <div className="mb-4 lg:mb-0">
                            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                                2. Design and Prototyping
                            </h5>
                            <div className="relative pr-8">
                                <p className="text-base text-gray-900 md:text-md font-semibold">
                                    Our design team creates wireframes and interactive prototypes to visualize the app's layout and features. We focus on delivering an intuitive user interface and seamless user experience.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-2 flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 bg-gray-100">
                        <div className="mb-4 lg:mb-0">
                            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                                3. Development and Testing
                            </h5>
                            <div className="relative pr-8">
                                <p className="text-base text-gray-900 md:text-md font-semibold">
                                    Our skilled developers bring your app to life, employing best practices and coding standards. Throughout the development phase, rigorous testing ensures functionality, performance, and compatibility across multiple devices.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-2 flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 bg-gray-100">
                        <div className="mb-4 lg:mb-0">
                            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                                4. Deployment and Launch
                            </h5>
                            <div className="relative pr-8">
                                <p className="text-base text-gray-900 md:text-md font-semibold">
                                    We guide you through the process of app store submissions, ensuring compliance with guidelines and requirements. We assist with app distribution and provide support during the launch phase.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-2 flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 bg-gray-100">
                        <div className="mb-4 lg:mb-0">
                            <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                                5. Maintenance and Support
                            </h5>
                            <div className="relative pr-8">
                                <p className="text-base text-gray-900 md:text-md font-semibold">
                                    Once your app is live, we offer ongoing maintenance and support services, including bug fixes, feature enhancements, and regular updates to adapt to changing technologies and user needs.
                                </p>
                            </div>
                        </div>

                    </div>
                            
                    <div className='m-4 flex justify-center items-center'>
                    <a href="#_" className="relative px-5 py-2 font-medium text-white group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                        <span className="relative">Get Started</span>
                    </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainContent