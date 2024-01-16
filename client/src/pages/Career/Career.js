import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import Navbar from '../../components/Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { Dna } from 'react-loader-spinner'
import Footer from './../../components/Footer/Footer';
import { useSelector } from 'react-redux';

const Career = () => {
    const careers = useSelector((state) => state.careers);
    const [loading2] = useState(false)

    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Career Opportunities - Webdesys</title>
                <meta name="description" content="Explore exciting career opportunities at Webdesys. Join our talented team and embark on a fulfilling journey in a dynamic and innovative work environment. Discover how you can make an impact and grow with us." />
                <meta name="keywords" content="career opportunities, jobs, employment, work, Webdesys, dynamic work environment, growth, innovation" />
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
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685433704/webdesys/star-icon_yurvwj.png" alt="" />
                        </div>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-4 font-sans text-xl font-bold tracking-tight sm:text-2xl sm:leading-none" >
                            <Typewriter
                                options={{
                                    strings: ['JOIN US', 'GET IN TOUCH'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                            <span className='text-gray-900'> Ignite </span>Your Creativity,
                            <br className="hidden md:block" />
                            {' '} <span className='text-gray-900'> Ignite Your </span>Career
                            <br className="hidden md:block" />
                            <span className='text-gray-900'> with</span>{' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                WebDesys.
                            </span>
                        </h2>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686393237/webdesys/Untitled_design_2_jubzfd.png" alt="" />
                    </div>
                </div>
            </div>

            {loading2 ? <div className='flex justify-center items-center max-h-screen w-screen'>
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div> : <>
                <div className="px-4 py-8 mx-auto w-[90%]">
                    <div className="mb-4 divide-y border-b-2 border-gray-400">
                        <div className='w-[100%] gap-4 py-8 mt-6 flex flex-col'>
                            {careers?.data?.length === 0 ? (<p className='my-4 text-[3rem] text-center font-[serif]'> No Current Openings</p>) : (<h2 className='my-4 text-[3rem] text-center font-[serif]'>All Current Openings</h2>)}
                            {
                                careers?.data?.map((job, index) => {
                                    return (
                                        <div key={index} className='w-[100%] bg-[#0c3a7c] mt-8' style={{ borderRadius: "80px 0px 130px 50px" }}>
                                            <div className='flex flex-col items-start  bg-white md:flex-col md:border py-8' style={{ borderRadius: "100px 0px 150px 20px" }}>
                                                <div className='flex flex-col gap-2 py-8 px-14'>
                                                    <h2 className='font-[Rubik] font-bold text-[#000] text-2xl'>{job.position}</h2>
                                                    <p className='font-[Roboto]'>No. Of Opening : {job.count} </p>
                                                    <p className='font-[Rubik] font-medium text-lg'>Salary : ₹{job.salary}</p>
                                                </div>
                                                <div className='w-[100%] flex flex-col justify-around items-start md:flex-row'>
                                                    <div className='flex flex-col gap-2 py-8 md:px-14'>
                                                        <p className='font-[Rubik] font-semibold '>Requirements : </p>
                                                        <ul className='list-disc font-[Rubik] space-y-4 bg-[#0c3a7c] shadow-2xl p-4 text-white' style={{ borderRadius: "70px 70px 20px 20px" }}>
                                                            {
                                                                job.requirementArray.map((requirement, index) => {
                                                                    return (
                                                                        <li key={index} className='ml-8'>{requirement}</li>
                                                                    )
                                                                })

                                                            }
                                                        </ul>
                                                    </div>
                                                    <div className='flex flex-col gap-2 py-8 md:px-14'>
                                                        <p className='font-[Rubik] font-semibold '>Responsibility : </p>
                                                        <ul className='list-disc font-[Rubik] space-y-4 bg-[#0c3a7c] shadow-2xl p-4 text-white' style={{ borderRadius: "20px 20px 70px 70px" }}>
                                                            {
                                                                job.responsibilityArray.map((responsibility, index) => {
                                                                    return (
                                                                        <li key={index} className='ml-8'>{responsibility}</li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between items-center gap-2'>
                                                    <div>
                                                        {
                                                            job.active ? (<button className='px-14 py-2 ml-8 bg-[#0c3a7c] text-white rounded-lg text-sm font-[Rubik] mt-8 transition-all duration-300 hover:shadow-lg hover:scale-x-[1.05] '>Activily Hiring</button>) : (<button className='px-14 py-2 ml-8 bg-[#1a3777] text-white rounded-lg text-sm font-[Rubik] mt-8 transition-all duration-300 hover:shadow-lg hover:scale-x-[1.05] '>Hiring Closed</button>)
                                                        }

                                                    </div>
                                                    {/* <button className='px-14 py-2 ml-8 bg-[#1a3777] text-white rounded-lg text-sm font-[Rubik] mt-8 transition-all duration-300 hover:shadow-lg hover:scale-x-[1.05] animate-bounce'>Open Form</button> */}
                                                    <Link to={job.link} className='px-14 py-2 ml-8 bg-[#0c3a7c] text-white rounded-lg text-sm font-[Rubik] mt-8 transition-all duration-300 hover:shadow-lg hover:scale-x-[1.05]'>Apply Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </>
            }

            <Footer />
        </div>
    )
}

export default Career
