import React, { useEffect } from 'react'
import Navbar from './../../../components/Navbar/Navbar';
import MoveTopBtn from './../../../components/MoveTopBtn/MoveTopBtn';
import Header from '../../../components/Services/GraphicDesign/Header';
import GraphicContainer1 from '../../../components/Services/GraphicDesign/GraphicContainer1';
import GraphicContainer2 from '../../../components/Services/GraphicDesign/GraphicContainer2';
import HomeSection10 from './../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../../components/Footer/Footer';
import { Helmet } from "react-helmet";

const GraphicDesigning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Graphic Designing Services WebDesys| Creative and Professional Designs | WebDesys</title>
        <meta name="description" content="WebDesys offers creative and professional graphic design services for all your branding and marketing needs. Our services include logo design, brochure design, flyer design, business card design, and more. Contact us to start your graphic design project today." />
        <meta name="keywords" content="graphic designing services, logo design, brochure design, flyer design, business card design, branding, marketing" />
        <meta name="author" content="WebDesys" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Navbar />
      <MoveTopBtn />
      <Header />
      <GraphicContainer1 />
      <GraphicContainer2 />
      <HomeSection10 />
      <Footer />
    </div>
  )
}

export default GraphicDesigning