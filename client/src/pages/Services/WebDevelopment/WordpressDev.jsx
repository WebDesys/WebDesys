import React, { useEffect } from 'react'
import Navbar from './../../../components/Navbar/Navbar';
import HomeSection10 from '../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../../components/Footer/Footer';
import MoveTopBtn from '../../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const WordpressDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>WordPress Development Services | Webdesys</title>
                <meta name="description" content="Webdesys offers professional WordPress development services, ensuring SEO-friendly and plagiarism-free websites. Contact us for expert WordPress solutions." />
                <meta name="keywords" content="WordPress development, SEO friendly, plagiarism free, web design, website development, professional services, expert solutions, Webdesys" />
                <meta name="author" content="WebDesys" />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Navbar />
            <MoveTopBtn />

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
                            <span className='text-gray-900'>WordPress Development</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            Unleash the true potential of WordPress with our expert development.<br className="hidden md:block" />
                            Delivering top-notch WordPress development for exceptional websites.
                        </p>
                        <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Get Started</span>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1687419981/webdesys/terflutter_3_bhxt0l.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-3" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                Welcome to the realm of WordPress development, where creativity meets functionality and the possibilities are limitless. Whether you're an aspiring blogger, a small business owner, or a seasoned web developer, WordPress offers a robust platform that empowers you to create stunning and dynamic websites with ease.

                                WordPress, a widely popular content management system (CMS), has revolutionized the way websites are built and managed. Its user-friendly interface, extensive plugin ecosystem, and vast theme options make it an ideal choice for individuals and businesses looking to establish a strong online presence.
                            </p>
                            <p className="mt-2 text-base text-gray-700 md:text-lg">
                                With WordPress, you have the freedom to customize and tailor your website to suit your unique needs. From designing visually appealing layouts to implementing complex functionalities, the flexibility of WordPress ensures that your website truly represents your brand and vision.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">
                            <p className="text-base text-gray-700 md:text-lg">
                                Whether you're starting from scratch or seeking to enhance an existing WordPress site, a skilled WordPress developer can be your invaluable partner. These professionals possess a deep understanding of WordPress's architecture, coding languages, and best practices, enabling them to transform your ideas into reality. They can build custom themes, develop tailored plugins, optimize website performance, and ensure a seamless user experience across devices.
                            </p>
                            <p className="mt-2 text-base text-gray-700 md:text-lg">
                                WordPress development isn't limited to just blogs or basic websites. It extends to e-commerce platforms, online communities, membership sites, and much more. By harnessing the power of WordPress, you can create feature-rich, interactive websites that engage your audience and drive conversions.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-4 pb-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-12">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="zoom-in" data-aos-duration="1500">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="d9d7687a-355f-4502-8ec4-7945db034688"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                                    width="52"
                                    height="24"
                                />
                            </svg>

                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">The all-in-one</span>
                        </span>{' '}
                        <span>solution for your business is
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500" > Webdesys</span>
                        </span>
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Our team of skilled developers specializes in front-end and back-end technologies, crafting visually appealing designs and robust functionalities to deliver seamless online experiences for businesses across industries.
                    </p>
                </div>
                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Flexibility and Customization</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            With WordPress development, harness the power of a highly flexible and customizable platform. Create unique websites tailored to your specific needs, whether it's a personal blog, e-commerce site, or corporate portal. Customize themes, layouts, and functionality to reflect your brand and deliver an exceptional user experience.
                        </p>
                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Extensive Plugin Library</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            WordPress boasts a vast plugin library, offering an extensive range of features and functionalities. Easily enhance your website with plugins for SEO optimization, social media integration, e-commerce capabilities, security enhancements, and much more. Leverage these plugins to extend your site's capabilities and meet your specific requirements.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">User-Friendly Content Management</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            WordPress simplifies content management, empowering website owners to update and publish content with ease. The intuitive interface allows you to create and edit pages, blog posts, media files, and menus effortlessly. Its WYSIWYG editor ensures a user-friendly experience, enabling quick and hassle-free content updates.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Responsive and Mobile-Ready</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            In the era of mobile browsing, WordPress development ensures that your website is responsive and optimized for various devices. Deliver a seamless user experience across smartphones, tablets, and desktops, with responsive design elements and mobile-friendly layouts that adapt to different screen sizes.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">SEO-Friendly Architecture</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            WordPress inherently supports search engine optimization (SEO) practices, making it easier for your website to rank higher in search engine results. Benefit from clean code, SEO-friendly URLs, meta tags, and other built-in features that contribute to improved search engine visibility, driving organic traffic to your site.
                        </p>

                    </div>

                    <div className="p-5 duration-300 transform bg-gradient-to-r from-cyan-50 to-indigo-100 border rounded shadow-sm hover:-translate-y-6 hover:border-blue-700 hover:border-2 hover:bg-white" data-aos="flip-left" data-aos-duration="1600">
                        <h6 className="mb-2 font-semibold leading-5">Community Support and Updates</h6>
                        <p className="text-sm text-gray-900 mb-4">
                            Join a vast community of WordPress developers and users who actively contribute to the platform's growth. Stay updated with the latest trends, security patches, and feature enhancements through regular updates and community-driven support. With a robust ecosystem, you can rely on ongoing development and support for your WordPress website.
                        </p>

                    </div>

                </div>
            </div>

            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default WordpressDev
