import React, { useEffect } from 'react'
import './contactpage.css'
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import Typewriter from 'typewriter-effect';
import MoveTopBtn from './../../components/MoveTopBtn/MoveTopBtn';

import { ImLocation2 } from 'react-icons/im'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { useState } from 'react';
import toast from 'react-hot-toast'
import Loader from './../../components/Loader/Loader';
import { ContactPageAPI } from '../../services/api';
import { Helmet } from "react-helmet";
import { apiConnector } from '../../services/apiConnector';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // Phone number validation
    const phonenumber = (inputtxt) => {
        const numberPattern = /^\d{10}$/;
        if (numberPattern.test(inputtxt)) {
            return true;
        }
        else {
            toast.error("Enter Valid Phone Number.");
            return false;
        }
    }

    // email id validation
    const emailValidate = (inputtxt) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(inputtxt)) {
            return true;
        }
        else {
            toast.error("Enter Valid Email Id.");
            return false;
        }
    }

    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (phonenumber(mobile) && emailValidate(email)) {
            // console.log({name,email:email.toLowerCase(),mobile,message});
            // toast.success("Done")
            try {
                const res = await apiConnector({ method: "POST", url: ContactPageAPI.CreateAContact_API, bodyData: { name, email: email.toLowerCase(), mobile, message, type } })
                console.log("response", res)

                toast.success("Successfully Send");

                if (res.status === 200) {
                    setName('');
                    setMessage('');
                    setEmail('');
                    setMobile('')
                    setType('')
                }
            }
            catch (err) {
                toast.error("Internal Error, Try after some time.")
            }
        }
        setLoading(false);
    }
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Contact Us - Webdesys</title>
                <meta name="description" content="Get in touch with our team at Webdesys. We are here to answer your inquiries, discuss potential collaborations, and provide excellent customer support. Reach out to us today and let's start working together." />
                <meta name="keywords" content="contact us, get in touch, inquiries, collaborations, customer support, Webdesys" />
                <meta name="author" content="WebDesys" />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Navbar />
            <MoveTopBtn />

            <div className="border-b-2 border-gray-400 mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">

                <div className="flex flex-col justify-center items-center lg:flex-row">

                    <div className="mb-6  lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="zoom-in" data-aos-duration="2000">

                        <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-white lg:w-20 lg:h-20">
                            <img src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707678417/WebDesys-Main%20Website/zkbmbi55gbfobgmzexuj.webp" alt="" />
                        </div>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-4 font-sans text-xl font-bold tracking-tight sm:text-2xl sm:leading-none" >
                            <Typewriter
                                options={{
                                    strings: ['Get in touch', 'Get in touch'],
                                    autoStart: true,
                                    pauseFor: 1000,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                            Need Assistance
                            <br className="hidden md:block" />
                            <span> with</span> <span className='text-gray-900'> Mobile Apps</span>{' '}
                            <span className="pb-2 inline-block text-deep-purple-accent-400">
                                <span className='text-gray-900'> or </span>Web Services?
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Contact us today to take your business to the next level. Fill out the form below to start your app or web development project. We can’t wait to help you achieve your goals. Don’t hesitate to get in touch now!
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center" data-aos="zoom-in" data-aos-duration="2000">
                        <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/dztkzhtla/image/upload/v1707714812/WebDesys-Main%20Website/mrupmotqvxzgwqtk1x3z.webp" alt="" />
                    </div>
                </div>
            </div>

            <div className="mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">

                <section className="text-gray-800">
                    <div className="flex flex-wrap">

                        <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6" data-aos="zoom-in" data-aos-duration="1000">

                            <h2 className="pb-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 max-w-lg  font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" >
                                <Typewriter
                                    options={{
                                        strings: ['Ready to Get Started?', 'Ready to Get Started?'],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true,
                                    }}
                                />
                            </h2>
                            <p className="p-2 text-base text-gray-700 md:text-lg items-start flex gap-2 ">
                                <ImLocation2 className='text-3xl text-blue-700 font-bold' /> WebDesys, Plot C-2, WorkBox Spaces, 15th Floor, ESquare Building, Sector 96, Noida, Uttar Pradesh 201301
                            </p>
                            <p className="p-2 text-base text-gray-700 md:text-lg items-center flex gap-2">
                                <BsFillTelephoneInboundFill className='text-md text-blue-700' /> +91-9554555557 (whatsapp only)
                            </p>
                            <a href="mailto:info@webdesys.com" className="p-2 text-base text-gray-700 md:text-lg items-center flex gap-2">
                                <AiFillMail className='text-md text-blue-700' /> info@webdesys.com

                            </a>
                            <a href="mailto:admin@webdesys.com" className="p-2 text-base text-gray-700 md:text-lg items-center flex gap-2">
                                <AiFillMail className='text-md text-blue-700' /> admin@webdesys.com
                            </a>
                        </div>

                        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6" data-aos="zoom-in" data-aos-duration="1000">
                            <form onSubmit={submitHandler}>
                                <div className="form-group mb-6">
                                    <input type="text" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required={true} minLength={4} maxLength={50} name="name" id='name' autoComplete='on' />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Email address" value={email} onChange={(e) => setEmail(e.target.value)} required={true} minLength={5} maxLength={100} name="email" id='email' autoComplete='on' />
                                </div>
                                <div className="form-group mb-6">
                                    <input type={"number"} className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Phone number" value={mobile} onChange={(e) => setMobile(e.target.value)} required={true} minLength={10} maxLength={10} name="mobile" id='mobile' autoComplete='on' />
                                </div>
                                <div className=''>
                                    <select onChange={(e) => setType(e.target.value)} required={true} name="type" id='type' className=" my-6 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
                                        <option value={""} >Select Your Profile</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Organisation">Organisation</option>
                                    </select>
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="5" placeholder="Write Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required={true} minLength={10} maxLength={400} id='message'></textarea>
                                </div>

                                <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center">
                                    {loading ? <Loader /> : "Send"}
                                </button>
                            </form>
                        </div>

                    </div>
                </section>


            </div>

            <div className="map mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16" data-aos="zoom-in" data-aos-duration="1000">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.290770370051!2d77.3437774563203!3d28.54123813797482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce74616d4798b%3A0x5f54466d19cb28df!2sWebDesys!5e0!3m2!1sen!2sin!4v1685622281322!5m2!1sen!2sin" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" title='webdesys' style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer />
        </>
    )
}

export default ContactPage