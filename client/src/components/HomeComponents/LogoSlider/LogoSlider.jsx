import React from "react";
import './LogoSlider.css'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Pagination,
    Autoplay
} from "swiper";
import { useSelector } from 'react-redux';

const LogoSlider = () => {
    const ClientLogo = useSelector((state) => state.clientLogo);

    // const images = [
    //     'https://weavecu.com/wp-content/uploads/2023/03/We-Avec-U-logo-PNG.png',
    //     'https://mymetalogic.com/wp-content/uploads/2020/10/logo.png',
    //     'https://res.cloudinary.com/dzgaixltu/image/upload/v1688557112/HWR_LOGO_arn8uf.webp',
    //     'https://res.cloudinary.com/dzgaixltu/image/upload/v1693552944/logo_cmliyg.webp',
    //     'https://res.cloudinary.com/dztkzhtla/image/upload/v1683347092/IJTICMR/Untitled-design-_1__qp1ytg.webp',
    //     'https://aforayush.com/static/media/Ayush%20Srivastava%20logo.b0075ac3b0f2d4257c9f.webp',
    //     'https://res.cloudinary.com/dl5hosmxb/image/upload/v1692866749/Logo/Copy_of_ICDRC_912_273_px_rwkrry.png',
    //     'https://res.cloudinary.com/dpalqjwiy/image/upload/v1696400957/SV/PHOTO-2023-10-04-11-56-55_advbwq.jpg',
    //     'https://krishnajcommune.com/newLogo.png',
    // ]

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (window.innerWidth > 740) {
            setCount(3);
            return;
        }
        else if (window.innerWidth > 520 && window.innerWidth < 740) {
            setCount(2);
            return;
        }
        else {
            setCount(1);
        }
    }, [])

    return (
        <>
            <div className="max-md:px-6 py-8 sm:max-w-xl md:max-w-full lg:py-8">
                <div className="max-w-xl mb-3 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5" data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto max-sm:text-center">
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
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Our <span className="text-gray-900">Recent</span> Clients</span><br className="hidden md:block" />
                        </span>
                    </h2>
                </div>


                <div className="px-4 md:px-12">
                    <Swiper className="w-full"
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={count}
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true}
                        modules={[Autoplay,Pagination]}
                    >
                        {
                            ClientLogo?.data?.length>0 && ClientLogo?.data?.map((item, index) => (
                                <SwiperSlide key={index} className='h-[300px]'>
                                    <div className="flex justify-center items-center h-[300px]">
                                        <img src={item.link} alt="" className="w-36 md:w-40 object-contain" />
                                    </div>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default LogoSlider
