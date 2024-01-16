import React, { useEffect } from 'react'
import Navbar from './../../components/Navbar/Navbar';

// import HomeSection1 from '../../components/HomeComponents/HomeSection1/HomeSection1';
import HomeSection2 from '../../components/HomeComponents/HomeSection2/HomeSection2';
import HomeSection3 from '../../components/HomeComponents/HomeSection3/HomeSection3';
import HomeSection4 from '../../components/HomeComponents/HomeSection4/HomeSection4';
import HomeSection5 from '../../components/HomeComponents/HomeSection5/HomeSection5';
import HomeSection6 from '../../components/HomeComponents/HomeSection6/HomeSection6';
import HomeSection7 from '../../components/HomeComponents/HomeSection7/HomeSection7';
import HomeSection8 from '../../components/HomeComponents/HomeSection8/HomeSection8';
import HomeSection9 from '../../components/HomeComponents/HomeSection9/HomeSection9';
import HomeSection10 from '../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../components/Footer/Footer';
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";
import Testimonials from '../../components/Testimonials/Testimonials';
import LogoSlider from '../../components/HomeComponents/LogoSlider/LogoSlider';
import HeroSection from './../../components/HomeComponents/HeroSection/HeroSection';
import RecentBlogs from '../../components/HomeComponents/RecentBlogs/RecentBlogs';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className=''>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WebDesys | Top-rated Company for Web Design and Development, App Development, and Digital Marketing Services</title>
        <meta name="description" content="Welcome to WebDesys, your gateway to unparalleled digital excellence! With a keen understanding that every project, whether it's a single landing page or a comprehensive custom web-based software for an entire enterprise, is unique, we stand as the epitome of innovation and client-centricity. At WebDesys, we pride ourselves on being more than just a web development company; we are your partners in success." />
        <meta name="keywords" content="Web Design, Web Development, App Development, Digital Marketing, E-commerce Development, SEO Services, PPC Advertising, Social Media Marketing, Content Creation, Graphic Design, UI/UX Design, Responsive Design, Website Maintenance, Website Security" />
        <meta name="author" content="WebDesys" />
      </Helmet>

      <Navbar />
      <MoveTopBtn />
      {/* <HomeSection1 /> */}
      <HeroSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <LogoSlider />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
      <Testimonials />
      <RecentBlogs />
      <HomeSection10 />
      <Footer />
    </div>
  )
}


export default Home