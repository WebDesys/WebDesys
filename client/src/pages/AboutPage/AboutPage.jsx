import React, { useEffect, useState } from 'react'
import './aboutpage.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Typewriter from 'typewriter-effect';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import MoveTopBtn from './../../components/MoveTopBtn/MoveTopBtn';
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import { Helmet } from "react-helmet";

export const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [counterOn1, setCounterOn1] = useState(false);
    const [counterOn2, setCounterOn2] = useState(false);
    const [counterOn3, setCounterOn3] = useState(false);
    const [counterOn4, setCounterOn4] = useState(false);
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>About WebDesys | Best Web Design & Development, App Development, Digital Marketing Company</title>
                <meta name="description" content="WebDesys is a top-rated and best Web Design & Development, Mobile App Development, and Digital Marketing Company. We offer services like E-commerce Development, Wordpress Development, Leading Page Design & Development, Hosting Services, SEO Services, PPC Advertising, Social Media Marketing, Content Creation, Graphic Design, UI/UX Design, logo Design, Responsive Design, Website Maintenance, E-mail Marketing, Lead Generation, and Digital Marketing. " />
                <meta name="keywords" content="Web Design, Web Development, App Development, Digital Marketing, E-commerce Development, SEO Services, PPC Advertising, Social Media Marketing, Content Creation, Graphic Design, UI/UX Design, Responsive Design, Website Maintenance, Website Security" />
                <meta name="author" content="WebDesys" />
            </Helmet>
            <Navbar />
            <MoveTopBtn />

            <div className="border-b-2 border-gray-400 mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">

                <div className="flex flex-col justify-center gap-4 lg:flex-row">

                    <div className="mb-6  lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="zoom-in" data-aos-duration="2000">

                        {/* <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-white lg:w-20 lg:h-20">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685433704/webdesys/star-icon_yurvwj.png" alt="" />
                        </div> */}
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-4 font-sans text-xl font-bold tracking-tight sm:text-2xl sm:leading-none" >
                            <Typewriter
                                options={{
                                    strings: ['About Us', 'About Us'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                            Drive Digital
                            <br className="hidden md:block" />
                            <span> Revolution</span> <span className='text-gray-900'> With</span>{' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                WebDesys
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Welcome to WebDesys - your all-in-one solution for web design, development, and digital marketing. We specialize in providing comprehensive services to startups, making it easier for you to establish a strong online presence. Our team of experts has years of experience in creating effective websites and digital marketing strategies that drive traffic and generate leads. With a reputation as a top web development company in Noida and a trusted partner for businesses worldwide, we're committed to delivering the highest quality work to our clients. Let us help your business thrive - contact WebDesys today.
                        </p>

                        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">

                            <div className="text-center p-2 border rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:-translate-y-6 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                                    <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707655839/WebDesys-Main%20Website/r59zivfaqyyutgvkqwg8.webp" alt="" className='max-h-[45px]'/>
                                </div>
                                <ScrollTrigger onEnter={() => setCounterOn1(true)} onExit={() => setCounterOn1(false)}>
                                    <h6 className="text-2xl font-bold text-deep-purple-accent-400">
                                        {counterOn1 && <CountUp start={0} end={12} duration={2} delay={0} />}+ Years
                                    </h6>
                                </ScrollTrigger>
                                <p className="mb-2 font-bold text-xl">Experience</p>
                            </div>

                            <div className="text-center p-2 border rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:-translate-y-6 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                                    <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707654792/WebDesys-Main%20Website/nrebamxchh9zf1vcs2xz.webp" alt="" />
                                </div>
                                <ScrollTrigger onEnter={() => setCounterOn2(true)} onExit={() => setCounterOn2(false)}>
                                    <h6 className="text-2xl font-bold text-deep-purple-accent-400">
                                        {counterOn2 && <CountUp start={0} end={250} duration={2} delay={0} />}+
                                    </h6>
                                </ScrollTrigger>
                                <p className="mb-2 font-bold text-md">Team members</p>
                            </div>

                            <div className="text-center p-2 border rounded  hover:-translate-y-6 hover:border-blue-700
                            shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]" data-aos="zoom-in" data-aos-duration="1000" >
                                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                                    <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707654792/WebDesys-Main%20Website/ikaydermgntzwyhcji4o.webp" alt="" />
                                </div>
                                <ScrollTrigger onEnter={() => setCounterOn3(true)} onExit={() => setCounterOn3(false)}>
                                    <h6 className="text-2xl font-bold text-deep-purple-accent-400">
                                        {counterOn3 && <CountUp start={0} end={100} duration={2} delay={0} />}%
                                    </h6>
                                </ScrollTrigger>
                                <p className="mb-2 font-bold text-md">Satisfaction rate</p>
                            </div>

                            <div className="text-center p-2 border rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:-translate-y-6 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                                    <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707655481/WebDesys-Main%20Website/t9moonbs9btzj9c6ayus.webp" alt="" className='max-w-[60px]'/>
                                </div>
                                <ScrollTrigger onEnter={() => setCounterOn4(true)} onExit={() => setCounterOn4(false)}>
                                    <h6 className="text-2xl font-bold text-deep-purple-accent-400">
                                        {counterOn4 && <CountUp start={0} end={93} duration={2} delay={0} />}%
                                    </h6>
                                </ScrollTrigger>
                                <p className="mb-2 font-bold text-md">Retention Ratio</p>
                            </div>

                        </div>
                    </div>

                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="zoom-in" data-aos-duration="2000">
                        <img className="rounded p-4"
                            src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707566751/WebDesys-Main%20Website/Mission.webp" alt="" />
                    </div>
                </div>

            </div>

            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="p-4 rounded shadow-xl sm:p-8">
                    <div className="flex flex-col justify-center items-center lg:flex-row">
                        <div className="mb-4 lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="zoom-in" data-aos-duration="1000">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-3 p-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                                <Typewriter
                                    options={{
                                        strings: ['Our Mission', 'Our Mission'],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true,
                                    }}
                                />
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                At WebDesys, our mission is to be the driving force behind the transformative growth of early-stage startups, small businesses, and individuals by empowering them with cutting-edge technology solutions. We envision a future where every aspiring entrepreneur and company, irrespective of their size or resources, can harness the power of technology to achieve their full potential, disrupt industries, and positively impact society.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
                            <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707716028/WebDesys-Main%20Website/ia9k1qya28kscwi8lbgi.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="p-4 rounded shadow-xl sm:p-8">
                    <div className="flex flex-col justify-center items-center lg:flex-row-reverse">
                        <div className="mb-4 lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="zoom-in" data-aos-duration="1000">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-3 p-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                                <Typewriter
                                    options={{
                                        strings: ['Our Vision', 'Our Vision'],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true,
                                    }}
                                />
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Our vision at WebDesys is to bridge the technology gap for startups, small businesses, and individuals, enabling them to overcome challenges hindering their growth. We are committed to providing comprehensive IT services and innovative products that cater to their unique needs and aspirations.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
                            <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707566754/WebDesys-Main%20Website/Vision.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="p-4 rounded shadow-xl sm:p-8">
                    <div className="flex flex-col justify-center items-center lg:flex-row">
                        <div className="mb-4 lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="zoom-in" data-aos-duration="1000">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-3 p-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                                <Typewriter
                                    options={{
                                        strings: ['Certified Team', 'Certified Team'],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true,
                                    }}
                                />
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Our certified experts deliver quality products on time. They use latest & updated techniques that are time-saving & result-oriented.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
                            <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707568729/WebDesys-Main%20Website/Certified_teams.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Our Core</span> Values
                        </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        We transform businesses with innovative and adaptable digital solutions that satisfy today’s needs and open the door for upcoming opportunities.
                    </p>
                </div>

                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100  border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center overflow-hidden w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                            <img className='h-3/5' src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707568729/WebDesys-Main%20Website/Development.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Learning & Development</h6>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                            <img className='h-3/5' src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707671070/WebDesys-Main%20Website/qnkzofsdk1bhmxzodush.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Innovation & Quality First</h6>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                            <img className='h-3/5' src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707671504/WebDesys-Main%20Website/td07amvy6okymdjkh772.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Inclusive & Open-Culture</h6>
                    </div>

                </div>
                <div className=" mt-6 grid gap-8 row-gap-8 lg:grid-cols-3">

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                            <img className='h-3/5' src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707566750/WebDesys-Main%20Website/Latest_tech.png" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Work with Latest Technology</h6>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100  border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                            <img className='h-3/5' src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707671677/WebDesys-Main%20Website/cf1fcedygrdqjrghkqou.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Best & Global Opportunities</h6>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                            <img className='h-3/5' src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707566486/WebDesys-Main%20Website/Feedback.webp" alt="" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Constructive Feedback</h6>
                    </div>

                </div>
            </div>

            {/* <div className=" px-4 flex justify-center py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
                <div className='flex w-4/5 justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' data-aos="zoom-in" data-aos-duration="1000">
                    <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685700340/webdesys/from_grso3t.webp" alt="" />

                </div>
            </div> */}

            <HomeSection10 />

            <Footer />
        </div>
    )
}
