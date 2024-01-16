import React from "react";
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide } from "swiper/react";
import './testimonial.css'
import {
    Autoplay
} from "swiper";
import { useSelector } from "react-redux";

const Testimonials = () => {
    const testimonials = useSelector((state) => state.testimonials);
    return (
        <>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
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
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Client <span className="text-gray-900">testimonials:</span> The</span><br className="hidden md:block" />
                        </span>
                        <span> voice{' '}
                            <span><Typewriter
                                options={{
                                    strings: ['of our success.', 'of our success.'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                            </span>
                        </span>
                    </h2>
                </div>


                <div className="rounded-2xl w-full">
                    <Swiper className="w-full"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true}
                        modules={[Autoplay]}
                    >
                        {
                            testimonials?.data?.map((testimonial, index) => (
                                <SwiperSlide className='' key={index}>
                                    <div key={index} className="bg-gray-100 rounded-2xl md:rounded-full " style={{ boxShadow: "1px 1px 3px #f3f4f6" }}>
                                        <div className="mb-2  p-4 md:mb-0 flex flex-col justify-between items-center gap-2 md:gap-4 md:flex-row mx-3 md:mx-16">
                                            <div className="mb-3 md:mb-6 flex justify-center w-[30%]">
                                                <img src={testimonial.image} alt="" className="w-[100%] rounded-full shadow-lg dark:shadow-black/20" />
                                            </div>
                                            <div className="flex flex-col justify-between items-center gap-2 md:gap-4">
                                                <h5 className="mb-2 text-lg font-bold text-center">{testimonial.name}</h5>
                                                <h6 className="mb-4 font-medium text-primary text-center dark:text-primary-400">
                                                    {testimonial.designation}
                                                </h6>
                                                <p className="mb-4 text-center w-[95%] md:w-[60%] mx-auto">
                                                    {testimonial.message}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                                        <path fill="currentColor"
                                                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                                    </svg>
                                                </p>
                                                <ul className="mb-0 flex justify-center">
                                                    {
                                                        testimonial.rating === "3" ? (
                                                            <>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                            </>
                                                        ) : (<></>)
                                                    }
                                                    {
                                                        testimonial.rating === "4" ? (
                                                            <>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                            </>
                                                        ) : (<></>)
                                                    }
                                                    {
                                                        testimonial.rating === '5' ? (
                                                            <>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                                <li>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                        <path fill="currentColor"
                                                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                    </svg>
                                                                </li>
                                                            </>
                                                        ) : (<></>)
                                                    }
                                                </ul>
                                            </div>
                                        </div>
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

export default Testimonials
