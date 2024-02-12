import React from 'react'

const GraphicContainer1 = () => {
  return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                  <div className="max-w-xl mb-6" data-aos="zoom-in" data-aos-duration="1000">
                      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                          <span className='text-gray-900'> Webdesys </span>
                          Offers a
                          <br className="hidden md:block" />
                          <span> Variety</span> <span className='text-gray-900'> Of</span>{' '}
                          <span className="pb-2 inline-block text-deep-purple-accent-400">
                              <span className='text-gray-900'> Graphic </span>Designing Solutions
                          </span>
                      </h2>
                      <p className="text-base text-gray-700 md:text-lg">
                          Elevate Your Brand Aesthetics: Unlocking the Potential of Memorable Graphic Designs!
                      </p>
                  </div>
                  <p className="mb-4 text-sm font-bold tracking-widest uppercase" data-aos="zoom-in" data-aos-duration="1000">
                      Our Services
                  </p>
                  <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                      <ul className="space-y-3">
                          <li className="flex" data-aos="flip-left" data-aos-duration="1600">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Website Designing
                          </li>
                          <li className="flex" data-aos="flip-left" data-aos-duration="1600">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Logo Designing
                          </li>
                          <li className="flex" data-aos="flip-left" data-aos-duration="1600">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Java Development
                          </li>
                      </ul>
                      <ul className="space-y-3">
                          <li className="flex" data-aos="flip-left" data-aos-duration="1600">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              UI & UX Development
                          </li>
                          <li className="flex" data-aos="flip-left" data-aos-duration="1600">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Landing Page Designing
                          </li>
                          <li className="flex" data-aos="flip-left" data-aos-duration="1600">
                              <span className="mr-1">
                                  <svg
                                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="4"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </span>
                              Ruby on Rails Development
                          </li>
                      </ul>
                  </div>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1000">
                  <img
                      className="object-cover w-full h-56 rounded  sm:h-96"
                      src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707566755/WebDesys-Main%20Website/Web_Design.jpg"
                      alt=""
                  />
              </div>
          </div>
      </div>
  )
}

export default GraphicContainer1