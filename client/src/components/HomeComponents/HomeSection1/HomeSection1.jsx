import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const HomeSection1 = () => {
    return (
        <>
            <div className="relative flex py-2 lg:pt-0 lg:flex-col lg:pb-0">

                <div className="flex-[50%] relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl" data-aos="fade-right" data-aos-duration="2000">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-3 text-3xl font-bold sm:text-4xl sm:leading-none font-[Poppins] tracking-wider">
                            We Are
                            <br className="hidden md:block" />
                            <span className='text-gray-900'> Dedicated</span> To {' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                Building Your <span className='text-gray-900'>Business</span>
                            </span>
                        </h2>

                        <p className="pr-5 mb-5 text-gray-700 text-[12px] font-[Roboto] tracking-wider">
                            Welcome to WebDesys, your gateway to unparalleled digital excellence! With a keen understanding that every project, whether it's a single landing page or a comprehensive custom web-based software for an entire enterprise, is unique, we stand as the epitome of innovation and client-centricity. At WebDesys, we pride ourselves on being more than just a web development company; we are your partners in success.
                            Our expertise lies in deciphering your key requirements and meticulously handcrafting them into reality using the latest technological solutions. Whether you're envisioning a minimalist yet impactful landing page or a robust, scalable web-based software capable of handling complex enterprise needs, WebDesys is your trusted ally. We don't just meet expectations; we exceed them, ensuring that your digital presence not only meets but surpasses industry standards.
                            Join us in this digital revolution, where your visions are transformed into seamless, user-friendly interfaces and powerful, efficient systems. Experience the difference with WebDesys -App where innovation, understanding, and technological prowess converge to create digital masterpieces. Your journey to digital success starts here!
                        </p>

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 pb-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl sm:leading-none">
                            <Typewriter
                                options={{
                                    strings: ['Devoted to digital excellence', 'Powering digital solutions', 'Building your online foundation', 'Unlocking your web potential', 'Empowering online businesses'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                        </h2>


                        <div className="flex items-center">
                            <Link to="/contactus" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                <span className="relative text-white">Get Started</span>
                            </Link>
                            <Link
                                to="/aboutus"
                                aria-label=""
                                className="ml-4 inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="flex-[30%] overflow-hidden 
                inset-y-0 top-0 right-0 z-0 w-full px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0
                "
                >
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685439706/webdesys/pexels-photo-3184291_idnfcm.webp"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default HomeSection1
