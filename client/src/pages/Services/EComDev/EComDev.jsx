import React, { useEffect } from 'react'
import EcomContainer1 from '../../../components/Services/Ecommerce/EcomContainer1';
import EcomContainer2 from '../../../components/Services/Ecommerce/EcomContainer2';
import Header from '../../../components/Services/Ecommerce/Header';
import Navbar from './../../../components/Navbar/Navbar';
import MoveTopBtn from './../../../components/MoveTopBtn/MoveTopBtn';
import Footer from './../../../components/Footer/Footer';
import HomeSection10 from './../../../components/HomeComponents/HomeSection10/HomeSection10';
import { Helmet } from "react-helmet";

const EComDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Services WebDesys | Expert Web Design and Development Services</title>
        <meta name="description" content="WebDesys is a top-rated and best Web Design & Development, Mobile App Development, and Digital Marketing Company. We offer services like E-commerce Development, Wordpress Development, Leading Page Design & Development, Hosting Services, SEO Services, PPC Advertising, Social Media Marketing, Content Creation, Graphic Design, UI/UX Design, logo Design, Responsive Design, Website Maintenance, E-mail Marketing, Lead Generation, and Digital Marketing. " />
        <meta name="keywords" content="Web Design, Web Development, App Development, Digital Marketing, E-commerce Development, SEO Services, PPC Advertising, Social Media Marketing, Content Creation, Graphic Design, UI/UX Design, Responsive Design, Website Maintenance, Website Security" />
        <meta name="author" content="WebDesys" />
      </Helmet>

      <Navbar />
      <MoveTopBtn />
      <Header />
      <EcomContainer1 />
      <EcomContainer2 />
      <HomeSection10 />
      <Footer />
    </div>
  )
}

export default EComDev