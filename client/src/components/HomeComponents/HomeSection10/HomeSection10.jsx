import React from 'react'
import { Link } from 'react-router-dom'

const HomeSection10 = () => {
  return (
      <div className="mb-10 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="grid place-items-center gap-10 lg:grid-cols-2">

              <div className="flex items-center justify-center -mx-4 lg:pl-8">
                  <div className="flex flex-col items-end px-3">
                      <img
                          className="object-cover mb-6  h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                          src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707661136/WebDesys-Main%20Website/sjqfoyuqyz0qfc1yy27y.webp"
                          alt=""
                          data-aos="zoom-in" data-aos-duration="1000"
                      />
                      <img
                          className="object-cover w-20 h-20  sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                          src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707661136/WebDesys-Main%20Website/fwvvtypaylvvfkclax7q.webp"
                          alt=""
                          data-aos="zoom-in" data-aos-duration="1000"
                      />
                  </div>
                  <div className="px-3">
                      <img
                          className="object-cover w-40 h-40 sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                          src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707661136/WebDesys-Main%20Website/pc4lsop3fjal4trsd6hb.webp"
                          alt=""
                          data-aos="zoom-in" data-aos-duration="1000"
                      />
                  </div>
              </div>


              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400" data-aos="zoom-in" data-aos-duration="1000">
                      <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707678417/WebDesys-Main%20Website/zkbmbi55gbfobgmzexuj.webp" alt="" />
                  </div>

                  <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">

                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                          We Would Like <span className='text-gray-900'>to Start</span>{' '}
                          <span className="pb-2 inline-block text-deep-purple-accent-400">
                              <span className='text-gray-900'> Your Project </span>With Us
                          </span>
                      </h2>
                      <p className="text-base text-gray-900 md:text-md font-semibold">
                          Experience customer satisfaction like never before with our exceptional services at WebDesys. Contact us today and let us help you reach your goals!
                      </p>
                      <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                          Our expertise in designing and building digital solutions authorizes us to develop bespoke solutions.
                      </p>
                      <p className="mt-2 text-base text-gray-900 md:text-md font-bold">
                          Are You Looking for Efficient Mobile App and Web Development for Your Business?
                      </p>
                      <p className="mt-2 text-base text-gray-900 md:text-md font-semibold">
                          Webdesys serves you with the most innovative Mobile App & Web development solutions that will take your business to a whole new level.
                      </p>
                  </div>
                  <div>
                      <Link to="/contactus" className="relative px-5 py-2 font-medium text-white group">
                          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                          <span className="relative">Get Started</span>
                      </Link>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default HomeSection10