import React, { useEffect } from 'react'
import Navbar from './../../components/Navbar/Navbar';
import MoveTopBtn from './../../components/MoveTopBtn/MoveTopBtn';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../components/Footer/Footer';
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const ourProjects = useSelector((state) => state.ourProjects)

    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Our Projects - Webdesys</title>
                <meta name="description" content="Explore our impressive portfolio of projects at Webdesys. We deliver top-notch web and mobile applications, ensuring innovative designs, smooth functionality, and exceptional user experiences. See how we can transform your digital presence today." />
                <meta name="keywords" content="webdesys, projects, portfolio, web development, mobile applications, innovative designs, smooth functionality, user experiences" />
                <meta name="author" content="WebDesys" />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Navbar />
            <MoveTopBtn />

            {/* Header Section */}
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
                            <span className='text-gray-900'> Our Projects: </span>Discover
                            <br className="hidden md:block" />
                            {' '}Our<span className='text-gray-900'> Success Stories: </span>
                            <br className="hidden md:block" />
                            <span> Inspiring Projects</span> <span className='text-gray-900'> That</span>{' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                Drive Results!
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            From Vision to Reality: Unveiling Our Exceptional Projects That Make a Difference!
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707714076/WebDesys-Main%20Website/etwwgcfcrsgqzo1jshna.webp" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 mt- mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded text-center bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 text-white p-4 lg:text-3xl font-bold">
                OUR RECENT CLIENTS
            </div>

            {ourProjects?.data?.length === 0 ?
                <div className="px-4 mt- mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded text-center bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 text-white p-4 lg:text-3xl font-bold">
                    Projects Not Found
                </div>
                : <>
                    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                        <div className="mb-10 divide-y border-b-2 border-gray-400">
                            {
                                ourProjects?.data.map((item) => (
                                    <div className="my-8 py-5 flex items-center flex-col md:flex-row border-gray-100 border-2 shadow-xl rounded-2xl gap-y-4 md:gap-y-0"
                                        data-aos="zoom-in" aos-duration="1500" key={item._id}>
                                        <div className="flex-[30%]">
                                            <div className="flex items-center justify-center">
                                                <img src={item.image} alt="" className='w-32 md:w-44' />
                                            </div>
                                        </div>
                                        <div className="flex-[70%] px-2">
                                            <div className="mb-3">
                                                <p className="font-[Poppins] tracking-wide font-[700] text-2xl text-black text-center md:text-left">
                                                    {item.name}
                                                </p>
                                            </div>
                                            <p className="font-[Roboto] tracking-wide mb-2 text-gray-700 text-center md:text-left">
                                                {item.desc}
                                            </p>

                                            {
                                                item.link.length > 0 &&
                                                <div className='mt-5 flex justify-center items-center md:justify-start'>
                                                <a href={item.link} target="_blank" rel="noreferrer" className="font-[Roboto] tracking-wider bg-blue-600 rounded-xl text-white text-sm px-4 py-2">
                                                    Visit
                                                </a>
                                            </div>}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            }


            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default ProjectsPage
