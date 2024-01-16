import React, { useState } from 'react';
import './Sidebar.css'
import { RxCross2 } from "react-icons/rx"
import { MdKeyboardArrowRight } from "react-icons/md"
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = ({ children }) => {

    const admin = useSelector((state) => state.auth)

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser(null))
        navigate('/en/admin/adminlogin')
        console.log('role')
    }

    const allMenuItem = [
        {
            path: "/en/admin/manage-users",
            name: "Manage Users",
            icon: "https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279037/Admin/Dashboard/1_r8sijc.svg"
        },
        {
            path: "/en/admin/manage-projects",
            name: "Projects",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006949/WebDesys-Main%20Website/10_nntuwu.png"
        },
        {
            path: "/en/admin/manage-blogs",
            name: "Manage Blogs",
            icon: "https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279040/Admin/Dashboard/5_jkfbd2.svg"
        },
        {
            path: "/en/admin/contact-details",
            name: "Contact Data",
            icon: "https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279039/Admin/Dashboard/6_grzwug.svg"
        },
        {
            path: "/en/admin/manage-career",
            name: "Career",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006865/WebDesys-Main%20Website/11_mc9mq9.png"
        },
        {
            path: "/en/admin/manage-clientsLogo",
            name: "Manage Clients Logo",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006949/WebDesys-Main%20Website/13_dmz3aj.png"
        },
        {
            path: "/en/admin/manage-testimonial",
            name: "Manage Testimonials",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006804/WebDesys-Main%20Website/12_yqau1e.png"
        }
    ]
    const Admin = [
        {
            path: "/en/admin/manage-projects",
            name: "Projects",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006949/WebDesys-Main%20Website/10_nntuwu.png"
        },
        {
            path: "/en/admin/manage-blogs",
            name: "Manage Blogs",
            icon: "https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279040/Admin/Dashboard/5_jkfbd2.svg"
        },
        {
            path: "/en/admin/contact-details",
            name: "Contact Data",
            icon: "https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279039/Admin/Dashboard/6_grzwug.svg"
        },
        {
            path: "/en/admin/manage-career",
            name: "Career",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006865/WebDesys-Main%20Website/11_mc9mq9.png"
        },
        {
            path: "/en/admin/manage-clientsLogo",
            name: "Manage Clients Logo",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006949/WebDesys-Main%20Website/13_dmz3aj.png"
        },
        {
            path: "/en/admin/manage-testimonial",
            name: "Manage Testimonials",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006804/WebDesys-Main%20Website/12_yqau1e.png"
        }
    ]

    const BlogAndTestimonial = [
        {
            path: "/en/admin/manage-blogs",
            name: "Manage Blogs",
            icon: "https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279040/Admin/Dashboard/5_jkfbd2.svg"
        },
        {
            path: "/en/admin/manage-testimonial",
            name: "Manage Testimonials",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006804/WebDesys-Main%20Website/12_yqau1e.png"
        }
    ]

    const ContactUs = [
        {
            path: "/en/admin/contact-details",
            name: "Contact Data",
            icon: "https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279039/Admin/Dashboard/6_grzwug.svg"
        },
    ]

    const Career = [
        {
            path: "/en/admin/manage-career",
            name: "Career",
            icon: "https://res.cloudinary.com/dztkzhtla/image/upload/v1697006865/WebDesys-Main%20Website/11_mc9mq9.png"
        },
    ]

    return (
        <div className="mainContainer">
            <div style={{ minWidth: isOpen ? "300px" : "50px" }} className="sidebar ">
                <div className={`top_section ${isOpen ? "justify-between" : "justify-center"}`}>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">WebDesys</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars ">
                        {/* <FaBars onClick={toggle} /> */}
                        {
                            isOpen ? (<RxCross2 onClick={toggle} />) : (<MdKeyboardArrowRight onClick={toggle} />)
                        }
                    </div>
                </div>
                {
                    admin.role === "Blogs and Testimonial" ? (BlogAndTestimonial.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <img className="icon" alt="icon-sidebar" src={item.icon} />
                            <div className={`link_text font-[Roboto] ${isOpen ? "block" : "hidden"}`}>{item.name}</div>
                        </NavLink>
                    ))) : admin.role === "ContactUs" ? (ContactUs.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <img className="icon" alt="icon-sidebar" src={item.icon} />
                            <div className={`link_text font-[Roboto] ${isOpen ? "block" : "hidden"}`}>{item.name}</div>
                        </NavLink>
                    ))) : admin.role === "Career" ? (Career.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <img className="icon" alt="icon-sidebar" src={item.icon} />
                            <div className={`link_text font-[Roboto] ${isOpen ? "block" : "hidden"}`}>{item.name}</div>
                        </NavLink>
                    ))) : admin.role === "Admin" ? (Admin.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <img className="icon" alt="icon-sidebar" src={item.icon} />
                            <div className={`link_text font-[Roboto] ${isOpen ? "block" : "hidden"}`}>{item.name}</div>
                        </NavLink>
                    ))) : allMenuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <img className="icon" alt="icon-sidebar" src={item.icon} />
                            <div className={`link_text font-[Roboto] ${isOpen ? "block" : "hidden"}`}>{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className="link" style={{ cursor: 'pointer' }} onClick={handleLogout}>
                    <img className="icon" src={"https://res.cloudinary.com/dpalqjwiy/image/upload/v1695279040/Admin/Dashboard/8_ebaovq.svg"} alt="icon-sidebar" />
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Logout</div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar