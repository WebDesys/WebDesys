import React from 'react'
import Typewriter from 'typewriter-effect';

const HomeSection9 = () => {
  return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">The Reasons</span>
                  </span>
                  <span> You{' '}
                      <span><Typewriter
                          options={{
                              strings: ['Should Choose Us', 'Should Choose Us'],
                              autoStart: true,
                              pauseFor: 1000,
                              loop: true,
                          }}
                      />
                      </span>
                  </span>
              </h2>
          </div>

          <div className="mb-10 mt-10 grid gap-8 row-gap-10 lg:grid-cols-2">

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-sky-100 to-slate-50 "  data-aos="zoom-in" data-aos-duration="1000" >
                  <div className="flex items-center justify-center w-18 h-18 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436271/webdesys/1_kke04b.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Reliability</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      We make every effort to make or maintain a long-term relationship with our clients.
                  </p>
              </div>

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-slate-50 to-sky-100"  data-aos="zoom-in" data-aos-duration="1000" >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436271/webdesys/2_d0gsrd.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Driven results</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      We believe that prominence of a website, it can be made if its foundation is laid firmly.
                  </p>
              </div>

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-sky-100 to-slate-50 "  data-aos="zoom-in" data-aos-duration="1000" >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436272/webdesys/3_dqlpxa.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Quality Assurance</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      We make every effort to make or maintain a long-term relationship with our clients.
                  </p>
              </div>

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-slate-50 to-sky-100"  data-aos="zoom-in" data-aos-duration="1000" >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436272/webdesys/4_gwppzl.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">High level of Expertise</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      We believe that prominence of a website, it can be made if its foundation is laid firmly.
                  </p>
              </div>

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-sky-100 to-slate-50 "  data-aos="zoom-in" data-aos-duration="1000" >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436271/webdesys/5_ppzqjp.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Real Time Support</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      Being professional, we have a pleasure to offer a full range of support for our clients in real-time: phone, e-mail, online.
                  </p>
              </div>

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-slate-50 to-sky-100"  data-aos="zoom-in" data-aos-duration="1000" >
                  <div  className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436271/webdesys/6_q5kkaz.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Cost Effectiveness</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      We provide affordable and quality of services that sharply reflects your business and fit your budget.
                  </p>
              </div>

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-sky-100 to-slate-50 "  data-aos="zoom-in" data-aos-duration="1000" >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436271/webdesys/7_uvojjw.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Relationship with customer</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      Regardless of quality products or services, we focus on master customer relationship strategies that help to maintain healthy relationships with clients.
                  </p>
              </div>

              <div className="max-w-md sm:mx-auto sm:text-center border rounded shadow-sm px-2 py-4 hover:border-blue-700 hover:border-2 flex flex-col items-center bg-gradient-to-r from-slate-50 to-sky-100"  data-aos="zoom-in" data-aos-duration="1000" >
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white sm:mx-auto sm:w-24 sm:h-24">
                      <img className='h-3/5' src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685436271/webdesys/8_zpqtnn.png" alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">Delivery on time</h6>
                  <p className="mb-3 text-sm text-gray-900">
                      After successful completion of project work, we expect to make successful project delivery as per client's comfort without any flaw.
                  </p>
              </div>
          </div>

      </div>
  )
}

export default HomeSection9
