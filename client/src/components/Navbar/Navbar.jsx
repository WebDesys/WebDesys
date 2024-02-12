import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import './navbar.css'
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <nav className={`${navbar ? "bg-white" : "bg-transparent"} nav-position w-full z-10 transition-all ease-in-out duration-1000`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to='/'><img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707667249/WebDesys-Main%20Website/r1ptizawh7deebcdotey.webp" alt="logo" className="md:cursor-pointer h-16" /></Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] z-20" style={{marginRight:'20rem'}}>
          <li>
            <Link to="/" className="py-7 px-3 inline-block font-bold cool-link hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="py-7 px-3 inline-block font-bold cool-link hover:text-blue-700">
              About Us
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/our_projects" className="py-7 px-3 inline-block font-bold cool-link hover:text-blue-700">
              Our Projects
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="py-7 px-3 inline-block font-bold cool-link hover:text-blue-700">
              Blogs
            </Link>
          </li>
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block font-bold cool-link hover:text-blue-700">
              Contact Us
            </Link>
          </li> */}
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/blogs" className="py-7 px-3 inline-block">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/our_projects" className="py-7 px-3 inline-block font-bold cool-link hover:text-blue-700">
              Our Projects
            </Link>
          </li>
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li> */}
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
