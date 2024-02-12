import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import Navbar from '../../components/Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
// import { BsLinkedin } from 'react-icons/bs'
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../components/Footer/Footer';

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const arr = [
        {
            img: 'https://res.cloudinary.com/dztkzhtla/image/upload/v1707587097/WebDesys-Main%20Website/mfhbaegcfjh3kk7zalbv.webp',
            name: 'Ayush Srivastava',
            role: 'Founder & Chairperson',
            url: 'https://www.linkedin.com/in/ayush10012/'
        },
        // {
        //     img: 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697024874/webdesys/4_hbwvuc.webp',
        //     name: 'Utpal Rai',
        //     role: 'Chief Executive Officer',
        //     url: 'https://www.linkedin.com/in/utpal-rai-326831233/'
        // },
        // {
        //     img: 'https://res.cloudinary.com/ddffeufbq/image/upload/v1697024874/webdesys/1_ztdpev.webp',
        //     name: 'Arvind Kumar Srivastava',
        //     role: 'Chief Finance Officer',
        //     url: 'https://www.linkedin.com/in/ayush10012/'
        // },
        {
            img: 'https://res.cloudinary.com/dztkzhtla/image/upload/v1707717673/WebDesys-Main%20Website/bq28ett943gtotidovog.webp',
            name: 'Pragya Srivastava',
            role: "Co-founder & Chief People's Officer",
            url: 'https://www.linkedin.com/in/pragya-srivastava-53b596132/'
        },
    ]

    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>Our Team | WebDesys</title>
                <meta name="description" content="Webdesys Techno Consultancy Private Limited Team" />
                <meta name="keywords" content="Team, Our Team, WebDesys, web design, web development, marketing services" />
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
                            <span className='text-gray-900'> Meet the Minds Behind </span>
                            <br className="hidden md:block" />
                            Webdesys: Your  <span className='text-gray-900'> Tech Partners</span>
                            <br className="hidden md:block" />
                            <span> Your Tech</span> <span className='text-gray-900'> Challenges,</span>{' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                Our Team Solutions
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Innovate, Create, Collaborate: Webdesys Team at Your Service
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-full" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707714076/WebDesys-Main%20Website/etwwgcfcrsgqzo1jshna.webp" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-32 py-4 md:py-12">
                <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-x-5 md:gap-x-8'>
                    {
                        arr.map((item, index) => (
                            <div key={index} className="shadow-2xl  rounded-2xl mb-16 py-2 relative group 
                            before:absolute before:h-[6px] before:bottom-0 before:bg-gradient-to-t from-blue-700 to-purple-500  before:left-0 before:w-full
                            before:transition-all before:duration-500 hover:before:h-full before:-z-10 before:rounded-2xl
                            " data-aos="zoom-in" data-aos-duration="2000">
                                <div className='flex justify-center items-center'>
                                    <img className="object-cover h-[15rem] w-[90%] rounded-2xl" src={item.img} alt="" />
                                </div>
                                <div className="p-5">
                                    <h5 className="text-black group-hover:text-white duration-150 font-[600] font-[Nunito] text-lg tracking-wider mb-3  text-center ">{item.name}</h5>

                                    <h5 className="text-gray-800 group-hover:text-white duration-150 font-[600] font-[Nunito] tracking-wider mb-3  text-center ">{item.role}</h5>

                                    {/* <a target="_blank" rel='noreferrer' href={item.url} className="font-normal w-full flex justify-center items-center font-[Poppins] text-blue-700 cursor-pointer group-hover:text-white duration-150 tracking-wide mb-1  text-2xl "><BsLinkedin /></a> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default OurTeam
