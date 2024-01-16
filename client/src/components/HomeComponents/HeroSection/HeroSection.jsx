import React from 'react'
import EmblaCarousel from './EmblaCarousel';
import './Embla.css'
import './HeroSection.css'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


const HeroSection = () => {
  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className='relative h-fit md:min-h-screen'>
      {/* <ul className="homepage-background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}

      <div className='w-full h-[20px] md:h-[100px]'>
      </div>

      <div className='w-full flex flex-col md:flex-row items-center'>

        <div className="flex-[40%] relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl" data-aos="fade-right" data-aos-duration="2000">
          <div className="">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-3 text-3xl font-bold sm:text-4xl sm:leading-none font-[Poppins] tracking-wider pt-4">
              Empowering Brands,
              {/* <br className="hidden md:block" /> */}
              <span className='text-gray-900'> Crafting Futures: </span>
              <span className="pb-2 inline text-deep-purple-accent-400">
                Your Website, <span className='text-gray-900'>Our Expertise!</span>
              </span>
            </h2>

            <p className=" mb-3 text-gray-800 text-[12px]  font-[Roboto] tracking-wider">
              Welcome to WebDesys, your gateway to unparalleled digital excellence! With a keen understanding that every project, whether it's a single landing page or a comprehensive custom web-based software for an entire enterprise, is unique, we stand as the epitome of innovation and client-centricity. At WebDesys, we pride ourselves on being more than just a web development company; we are your partners in success.
              Our expertise lies in deciphering your key requirements and meticulously handcrafting them into reality using the latest technological solutions. Whether you're envisioning a minimalist yet impactful landing page or a robust, scalable web-based software capable of handling complex enterprise needs, WebDesys is your trusted ally. We don't just meet expectations; we exceed them, ensuring that your digital presence not only meets but surpasses industry standards.
              Join us in this digital revolution, where your visions are transformed into seamless, user-friendly interfaces and powerful, efficient systems. Experience the difference with WebDesys -App where innovation, understanding, and technological prowess converge to create digital masterpieces. Your journey to digital success starts here!
            </p>

            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-3 pb-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl sm:leading-none">
              <Typewriter
                options={{
                  strings: [ 'Where Websites Become Icons', 'Where Vision Meets Innovation!', 'Your Path To Digital Excellence', 'Where Websites Become Masterpeices'],
                  autoStart: true,
                  pauseFor: 1000,
                  loop: true,
                }}
              />
            </h2>


            <div className="flex items-center">
              <Link to="/contactus" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Get Started</span>
              </Link>
              <Link
                to="/aboutus"
                aria-label=""
                className="ml-4 inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <section className="sandbox__carousel flex-[60%] hidden md:block">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>

      </div>
    </div>
  )
}

export default HeroSection
