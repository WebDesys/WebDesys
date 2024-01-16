import React, { useEffect } from 'react'
import Header from '../../../components/Services/MobileAppDev/header/Header';
import Navbar from './../../../components/Navbar/Navbar';
import ImageContainer from '../../../components/Services/MobileAppDev/imageContainer/ImageContainer';
import MainContent from '../../../components/Services/MobileAppDev/MainContent/MainContent';
import HomeSection10 from '../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../../components/Footer/Footer';
import MoveTopBtn from '../../../components/MoveTopBtn/MoveTopBtn';
import { Helmet } from "react-helmet";


const MobileAppDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Mobile App Development Services WebDesys| Creative and Professional Designs | WebDesys</title>
        <meta name="description" content="Welcome to our app development service. We specialize in creating innovative and user-friendly applications that cater to your unique needs. From concept to deployment, we ensure a seamless experience, delivering exceptional results that drive your business forward in the digital world." />
        <meta name="keywords" content="app development, mobile applications, web development, UX/UI, custom applications" />
        <meta name="author" content="WebDesys" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Navbar />
      <MoveTopBtn />
      <Header />
      <MainContent />
      <ImageContainer />
      <HomeSection10 />
      <Footer />

    </div>
  )
}

export default MobileAppDevelopment