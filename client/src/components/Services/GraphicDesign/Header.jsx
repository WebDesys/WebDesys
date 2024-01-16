import React from 'react'
import { Link } from 'react-router-dom';
import  Typewriter from 'typewriter-effect';

const Header = () => {
  return (
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
                      <span className='text-gray-900'> Graphics Designing: </span>
                      <br className="hidden md:block" />
                      Expert Development Design
                      <br className="hidden md:block" />
                    <span className='text-gray-900'> Services</span>{' '}
                      <span className="pb-2 inline-block text-deep-purple-accent-400">
                          <span className='text-gray-900'> for Impactful </span>Branding!
                      </span>
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg mb-4">
                      Designs that Make a Lasting Impression: Unleashing the Power of Creativity to Amplify Your Brand Identity!
                  </p>
                  <Link to="/contactus" className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span className="relative">Get Started</span>
                  </Link>
              </div>
              <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
                  <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686123674/webdesys/hye_tu13fq.png" alt="" />
              </div>
          </div>
      </div>
  )
}

export default Header