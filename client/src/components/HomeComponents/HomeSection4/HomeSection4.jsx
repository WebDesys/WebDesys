import React from 'react'
import Typewriter from 'typewriter-effect';

const HomeSection4 = () => {
  return (
      <div className=" px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="zoom-in" data-aos-duration="1000"> 
                 <h2  className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-xl font-bold tracking-tight sm:text-2xl sm:leading-none" >
                      <Typewriter
                          options={{
                              strings: ['Our Mission..', 'Our Mission..'],
                              autoStart: true,
                              pauseFor: 1000,
                              loop: true,
                          }}
                      />
                  </h2> 
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
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Empowering Businesses</span>
                  </span>{' '}
                  <span>with Innovative
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500" > Web Solutions</span>
                  </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                  Our mission at WebDesys is to empower businesses with innovative solutions for web design, development, and digital marketing that exceed expectations and drive growth.
              </p>
          </div>
          <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">

              <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100  border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685359650/webdesys/Untitled_design_6_foup81.png" alt="" />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Global Experience</h6>
              </div>

              <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685360236/webdesys/Untitled_design_9_bvgrb7.png" alt="" />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Value for Price</h6>
              </div>

              <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685360333/webdesys/Untitled_design_10_k1lhwu.png" alt="" />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">User Perspective</h6>
              </div>

          </div>
          <div className=" mt-6 grid gap-8 row-gap-8 lg:grid-cols-3">

              <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685360441/webdesys/Untitled_design_11_rvhful.png" alt="" />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Business Perspective</h6>
              </div>

              <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100  border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685360566/webdesys/Untitled_design_12_xfkiym.png" alt="" />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Expert Perspective</h6>
              </div>

              <div className="p-5 duration-300 transform bg-gradient-to-r from-slate-50 to-sky-100 border rounded shadow-sm sm:text-center flex flex-col justify-center items-center hover:border-blue-700 hover:border-2" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685360653/webdesys/Untitled_design_13_iqvh0u.png" alt="" />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 hover:font-bold">Marketplace Solutions</h6>
              </div>

          </div>

          <div className="mt-12 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="zoom-in" data-aos-duration="1000">
              <p className="text-base text-gray-700 md:text-lg">
                  With a skilled team committed to excellence and up-to-date with the latest technologies, we're passionate about making a positive impact on clients, employees, and communities.
              </p>
          </div>
      </div>
  )
}

export default HomeSection4
