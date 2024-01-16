import React, { useEffect } from 'react'
import Navbar from './../../../components/Navbar/Navbar';
import MoveTopBtn from './../../../components/MoveTopBtn/MoveTopBtn';
import HomeSection10 from './../../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../../components/Footer/Footer';
import WebDevContainer1 from '../../../components/Services/WebsiteDevelopment/WebdContainer1';
import WebDevContainer2 from '../../../components/Services/WebsiteDevelopment/WebdContainer2';
import WebdHeader from './../../../components/Services/WebsiteDevelopment/WebdHeader';
import { Helmet } from "react-helmet";

const StaticDynamicDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Web Development Services WebDesys | Custom Website Solutions | WebDesys</title>
                <meta name="description" content="WebDesys offers custom web development services to help you create a website that meets your unique business needs. Our services include website design, development, WordPress development, Shopify development, maintenance, and more. Contact us to start your web development project today." />
                <meta name="keywords" content="Web development services, custom website solutions, website design, website development, WordPress development, Shopify development, website maintenance" />
                <meta name="author" content="WebDesys" />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Navbar />
            <MoveTopBtn />
            <WebdHeader />
            <WebDevContainer1 />
            <WebDevContainer2 />
            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default StaticDynamicDev
