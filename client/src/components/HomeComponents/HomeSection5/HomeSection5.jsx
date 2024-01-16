import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Typewriter from 'typewriter-effect';

const HomeSection5 = () => {
    const [counterOn1, setCounterOn1] = useState(false);
    const [counterOn2, setCounterOn2] = useState(false);
    const [counterOn3, setCounterOn3] = useState(false);
    const [counterOn4, setCounterOn4] = useState(false);

    return (
        <>
            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">

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
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Webdesys IT Solutions</span>
                        </span>
                        <span> Deliver{' '}
                            <span><Typewriter
                                options={{
                                    strings: ['Value for Money', 'Value for Money'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                            </span>
                        </span>
                    </h2>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                
                    <div className="text-center p-2 border rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:-translate-y-6 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685362174/webdesys/Untitled_design_14_fxellg.png" alt="" />
                        </div>
                        <ScrollTrigger onEnter={() => setCounterOn1(true)} onExit={() => setCounterOn1(false)}>
                            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                                {counterOn1 && <CountUp start={0} end={12} duration={2} delay={0} />}+ Years
                            </h6>
                        </ScrollTrigger>
                        <p className="mb-2 font-bold text-xl">Experience</p>
                    </div>

                    <div className="text-center p-2 border rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:-translate-y-6 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685362332/webdesys/Untitled_design_15_fb430r.png" alt="" />
                        </div>
                        <ScrollTrigger onEnter={() => setCounterOn2(true)} onExit={() => setCounterOn2(false)}>
                            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                                {counterOn2 && <CountUp start={0} end={250} duration={2} delay={0} />}+
                            </h6>
                        </ScrollTrigger>
                        <p className="mb-2 font-bold text-md">Team members</p>
                    </div>

                    <div className="text-center p-2 border rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:-translate-y-6 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685362541/webdesys/Untitled_design_16_tq6iie.png" alt="" />
                        </div>
                        <ScrollTrigger onEnter={() => setCounterOn3(true)} onExit={() => setCounterOn3(false)}>
                            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                                {counterOn3 && <CountUp start={0} end={100} duration={2} delay={0} />}%
                            </h6>
                        </ScrollTrigger>
                        <p className="mb-2 font-bold text-md">Satisfaction rate</p>
                    </div>

                    <div className="text-center p-2 border rounded shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:-translate-y-6 hover:border-blue-700" data-aos="zoom-in" data-aos-duration="1000" >
                        <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                            <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685362674/webdesys/Untitled_design_17_zoeykx.png" alt="" />
                        </div>
                        <ScrollTrigger onEnter={() => setCounterOn4(true)} onExit={() => setCounterOn4(false)}>
                            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                                {counterOn4 && <CountUp start={0} end={93} duration={2} delay={0} />}%
                            </h6>
                        </ScrollTrigger>
                        <p className="mb-2 font-bold text-md">Retention Ratio</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeSection5