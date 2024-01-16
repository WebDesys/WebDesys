import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import NotFound from "./pages/NotFound/NotFound";
import ContactPage from "./pages/ContactPage/ContactPage";
import { Toaster } from "react-hot-toast";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import MobileAppDevelopment from "./pages/Services/MobileAppDev/MobileAppDevelopment";
import EComDev from "./pages/Services/EComDev/EComDev";
import GraphicDesigning from "./pages/Services/GraphicDesigning/GraphicDesigning";
import FAQs from './pages/FAQs/FAQs';
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import Blog from "./pages/Blog/Blog";
import Career from "./pages/Career/Career";
import AndroidMobileApplication from "./pages/Services/MobileAppDev/AndroidMobileApplication";
import IOSMobileApplication from "./pages/Services/MobileAppDev/IOSMobileApplication";
import FlutterAppDev from "./pages/Services/MobileAppDev/FlutterAppDev";
import ReactNative from "./pages/Services/MobileAppDev/ReactNative";
import WebsiteDesigning from "./pages/Services/GraphicDesigning/WebsiteDesigning";
import LogoDesigning from "./pages/Services/GraphicDesigning/LogoDesigning";
import UiUx from "./pages/Services/GraphicDesigning/UiUx";
import LandingPage from "./pages/Services/GraphicDesigning/LandingPage";
import PrestaShopDeve from "./pages/Services/EComDev/PrestaShopDeve";
import BigCommDeve from "./pages/Services/EComDev/BigCommDeve";
import WooComDev from "./pages/Services/EComDev/WooComDev";
import ShopiyDeve from "./pages/Services/EComDev/ShopiyDeve";
import LaravelDeve from "./pages/Services/WebDevelopment/LaravelDeve";
import PhpDevelopment from "./pages/Services/WebDevelopment/PhpDevelopment";
import WebFlowDeve from "./pages/Services/WebDevelopment/WebFlowDeve";
import WordpressDev from "./pages/Services/WebDevelopment/WordpressDev";
import MernStackDev from "./pages/Services/WebDevelopment/MernStackDev";
import CorporateDev from "./pages/Services/WebsiteDev/CorporateDev";
import EducationalDev from "./pages/Services/WebsiteDev/EducationalDev";
import BloggingDev from "./pages/Services/WebsiteDev/BloggingDev";
import PortfolioDev from "./pages/Services/WebsiteDev/PortfolioDev";
import StaticDynamicDev from "./pages/Services/WebsiteDev/StaticDynamicDev";
import ErpCrmDev from "./pages/Services/WebsiteDev/ErpCrmDev";
import InternetMarketing from "./pages/Services/DigitalMarketing/InternetMarketing";
import SEOServices from "./pages/Services/DigitalMarketing/SEOServices";
import SocialMedia from "./pages/Services/DigitalMarketing/SocialMedia";
import ReputationManagement from "./pages/Services/DigitalMarketing/ReputationManagement";
import ContentWriting from "./pages/Services/DigitalMarketing/ContentWriting";
import StartupDoc from "./pages/Services/DigitalMarketing/StartupDoc";
import PrivacyPolicy from "./pages/FAQs/PrivacyPolicy";
import TermsConditions from "./pages/FAQs/TermsConditions";
import RefundPolicy from "./pages/FAQs/RefundPolicy";
import OurTeam from "./pages/OurTeam/OurTeam";
import ManageUsers from "./Admin/pages/ManageUsers/ManageUsers";
import Login from "./Admin/pages/Login/Login";
import ContactPageData from "./Admin/pages/ContactPageDetails/ContactPage";
import ManageBlogs from "./Admin/pages/ManageBlogs/ManageBlogs";
import ManageCareer from "./Admin/pages/ManageCareer/ManageCareer";
import { useSelector } from "react-redux";
import ManageTestimonial from "./Admin/pages/ManageTestimonial/ManageTestimonial";
import ManageClientsLogo from "./Admin/pages/ManageClientsLogo/ManageClientsLogo";
import ManageProjects from "./Admin/pages/ManageProject/ManageProjects";
import WelcomAdmin from "./Admin/components/WelcomeAdmin/WelcomAdmin";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const ProtectedRoute = ({ children }) => {
    const admin = useSelector((state) => state.auth);
    let location = useLocation();

    if (!admin._id) {
      return <Navigate to="/" state={{ from: location }} replace />
    }
    return children

  }

  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contactus' element={<ContactPage />} />
        <Route exact path='/aboutus' element={<AboutPage />} />
        {/*Services Page Route  */}
        <Route exact path='/services/mobile_app_development' element={<MobileAppDevelopment />} />
        <Route exact path='/services/android_mobile_application' element={<AndroidMobileApplication />} />
        <Route exact path='/services/ios_mobile_application' element={<IOSMobileApplication />} />
        <Route exact path='/services/flutter_mobile_application' element={<FlutterAppDev />} />
        <Route exact path='/services/reactnative_mobile_application' element={<ReactNative />} />

        <Route exact path='/services/mernstack_development' element={<MernStackDev />} />
        <Route exact path='/services/wordpress_development' element={<WordpressDev />} />
        <Route exact path='/services/webflow_development' element={<WebFlowDeve />} />
        <Route exact path='/services/php_development' element={<PhpDevelopment />} />
        <Route exact path='/services/laravel_development' element={<LaravelDeve />} />


        <Route exact path='/services/ecom_development' element={<EComDev />} />
        <Route exact path='/services/shopify_development' element={<ShopiyDeve />} />
        <Route exact path='/services/woocommerce_development' element={<WooComDev />} />
        <Route exact path='/services/bigcommerce_development' element={<BigCommDeve />} />
        <Route exact path='/services/prestashop_development' element={<PrestaShopDeve />} />


        <Route exact path='/services/graphics_designing' element={<GraphicDesigning />} />
        <Route exact path='/services/website_designing' element={<WebsiteDesigning />} />
        <Route exact path='/services/logo_designing' element={<LogoDesigning />} />
        <Route exact path='/services/uiux' element={<UiUx />} />
        <Route exact path='/services/landingpage' element={<LandingPage />} />


        <Route exact path='/services/corporate_development' element={<CorporateDev />} />
        <Route exact path='/services/educational_development' element={<EducationalDev />} />
        <Route exact path='/services/blogging_development' element={<BloggingDev />} />
        <Route exact path='/services/portfolio_development' element={<PortfolioDev />} />
        <Route exact path='/services/static_dynamic_development' element={<StaticDynamicDev />} />
        <Route exact path='/services/erp_crm_development' element={<ErpCrmDev />} />


        <Route exact path='/services/internet_marketing' element={<InternetMarketing />} />
        <Route exact path='/services/seo_services' element={<SEOServices />} />
        <Route exact path='/services/social_media_handling' element={<SocialMedia />} />
        <Route exact path='/services/online_reputation_management' element={<ReputationManagement />} />
        <Route exact path='/services/content_writing_services' element={<ContentWriting />} />
        <Route exact path='/services/startup_documentation' element={<StartupDoc />} />


        {/* services pages ends */}
        <Route exact path='/faqs' element={<FAQs />} />
        <Route exact path='/view-our-team' element={<OurTeam />} />

        <Route exact path='/privacy_policy' element={<PrivacyPolicy />} />
        <Route exact path='/t&c' element={<TermsConditions />} />
        <Route exact path='/refund_policy' element={<RefundPolicy />} />

        <Route exact path='/our_projects' element={<ProjectsPage />} />
        <Route exact path='/blogs' element={<BlogsPage />} />
        <Route exact path='/blogs/:id' element={<Blog />} />
        <Route exact path='/career' element={<Career />} />
        <Route exact path='*' element={<NotFound />} />


        {/* New Admin Routes */}
        <Route exact path="/en/admin/adminLogin" element={<Login />} />
        <Route exact path="/en/admin/welcome-admin" element={<ProtectedRoute><WelcomAdmin /></ProtectedRoute>} />
        <Route exact path="/en/admin/manage-users" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} />
        <Route exact path="/en/admin/contact-details" element={<ProtectedRoute><ContactPageData /></ProtectedRoute>} />
        <Route exact path="/en/admin/manage-blogs" element={<ProtectedRoute><ManageBlogs /></ProtectedRoute>} />
        <Route exact path="/en/admin/manage-career" element={<ProtectedRoute><ManageCareer /></ProtectedRoute>} />
        <Route exact path="/en/admin/manage-testimonial" element={<ProtectedRoute><ManageTestimonial /></ProtectedRoute>} />
        <Route exact path="/en/admin/manage-clientsLogo" element={<ProtectedRoute><ManageClientsLogo /></ProtectedRoute>} />
        <Route exact path="/en/admin/manage-projects" element={<ProtectedRoute><ManageProjects /></ProtectedRoute>} />


      </Routes>
    </div>
  );
}

export default App;
