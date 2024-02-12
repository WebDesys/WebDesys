import React, { useEffect } from 'react'
import Navbar from './../../components/Navbar/Navbar';
import MoveTopBtn from './../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import HomeSection10 from '../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';

const BlogsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const blogs = useSelector((state) => state.blogs)

    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Insightful Blogs - Webdesys</title>
                <meta name="description" content="Explore our collection of insightful blogs at Webdesys. Stay updated with the latest trends, tips, and industry insights in web development, app development, and digital solutions. Expand your knowledge with our informative articles." />
                <meta name="keywords" content="blogs, articles, web development, app development, digital solutions, industry insights, tips, trends, informative" />
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
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                            <span className='text-gray-900'> Explore Our </span>
                            <br className="hidden md:block" />
                            {' '}Engaging Blog<span className='text-gray-900'> for a Dose of </span>
                            <br className="hidden md:block" />
                            <span> Knowledge and</span> <span className='text-gray-900'> Thought-Provoking</span>{' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                Content!
                            </span>
                        </h2>
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

            {blogs?.data?.length === 0 ?
                <>
                    <div className="px-4 mt- mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded text-center bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 text-white p-4 lg:text-3xl font-bold">
                        Blogs Not Found
                    </div>
                </> : <>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-md:place-items-center grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                            {
                                blogs?.data.map((blog, index) => (
                                    <div key={index} className="max-w-[20rem] shadow-2xl  rounded-2xl mb-16 py-2 relative group before:absolute before:h-[6px] before:bottom-0 before:bg-gradient-to-t from-blue-700 to-purple-500  before:left-0 before:w-full before:transition-all before:duration-500 hover:before:h-full before:-z-10 before:rounded-2xl" data-aos="zoom-in" data-aos-duration="2000">
                                        <div className='flex justify-center items-center'>
                                            <img className="object-cover h-[15rem] w-[90%] rounded-2xl" src={blog.image} alt="" />
                                        </div>
                                        <div className="p-5">
                                            <h5 className="text-black group-hover:text-white duration-150 font-[600] font-[Nunito] text-lg tracking-wider mb-3  text-center ">{blog.name}</h5>

                                            <h5 className="text-gray-800 group-hover:text-white duration-150 font-[600] font-[Nunito] tracking-wider mb-3  text-center ">{blog.desc.slice(0, 200) + '...'}</h5>

                                            <div className='flex w-full justify-center items-center'>
                                                <Link to={`/blogs/${blog._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 group-hover:bg-white group-hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                    Read more
                                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </Link>
                                            </div>
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

export default BlogsPage
