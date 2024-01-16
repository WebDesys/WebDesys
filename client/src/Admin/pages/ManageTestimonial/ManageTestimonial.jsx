import React, { useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import Sidebar from "../../components/Sidebar/Sidebar"

import { useEffect } from 'react';
import toast from 'react-hot-toast'
import { apiConnector } from '../../../services/apiConnector';
import { Testimonial } from '../../../services/api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ManageTestimonial = () => {
    const [testimonialData, setTestimonialData] = useState({ name: '', designation: '', message: '', image: '', rating: '' })
    const [loading, setLoading] = useState(false)

    const [allTestimonials, setAllTestimonials] = useState([])

    const ChangeHandler = (e) => {
        setTestimonialData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTestimonial();
    }
    // Token
    const admin = useSelector((state) => state.auth)

    const fetchAllTestimonial = async () => {
        try {
            const response = await apiConnector({ method: "GET", url: Testimonial.AllTestimonial_API, headers: { token: admin.token } })
            setAllTestimonials(response.data.data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const createTestimonial = async () => {
        setLoading(true)
        try {
            await apiConnector({ method: "POST", url: Testimonial.CreateTestimonial_API, bodyData: testimonialData, headers: { token: admin.token } })
            toast.success("Testimonial Successfully Created")
            fetchAllTestimonial();
            setTestimonialData({ name: '', designation: '', message: '', image: '', rating: '' })
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }

    const deleteTestimonial = async (id) => {
        try {
            await apiConnector({ method: "DELETE", url: Testimonial.DeleteTestimonial_API + `/${id}`, headers: { token: admin.token } })
            toast.success("Testimonial Deleted Successfully")
            fetchAllTestimonial();
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const fetchAllTestimonial = async () => {
            try {
                const response = await apiConnector({ method: "GET", url: Testimonial.AllTestimonial_API, headers: { token: admin.token } })
                setAllTestimonials(response.data.data)
                console.log(response)
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
        }
        fetchAllTestimonial();
    }, [admin])

    const navigate = useNavigate();

    useEffect(() => {
        if (admin.role === "Blogs and Testimonial" || admin.role === "superAdmin" || admin.role === "Admin") {
        }
        else {
            navigate('/en/admin/welcome-admin')
        }
    }, [admin, navigate])

    return (
        <Sidebar>
            <div className='flex flex-col justify-between gap-8'>
                <section className="bg-gray-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                        <div className="w-[100%] bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Add Testimonial
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  text-start">Name</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Name" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={testimonialData.name} />
                                    </div>
                                    <div>
                                        <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900  text-start">Designation </label>
                                        <input type="text" name="designation" id="designation" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="CEO" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={testimonialData.designation} />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900  text-start">Message</label>
                                        <input type="text" name="message" id="message" placeholder="Write Your Message..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={testimonialData.message} />
                                    </div>
                                    <div>
                                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900  text-start">User Image</label>
                                        <input type="text" name="image" id="image" placeholder="Enter User Image Link" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={testimonialData.image} />
                                    </div>
                                    <div>
                                        <label htmlFor='rating' className="block mb-2 text-sm font-medium text-gray-900  text-start">Select Rating</label>
                                        <select onChange={ChangeHandler} type="text" name='rating' id='rating' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '>
                                            <option value="">Select Rating</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="w-full text-white grid place-items-center bg-[#2463eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{loading ? <Loader color={"#fff"} /> : "Add Testimonial"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-[100%] px-4'>
                    {
                        loading ? (<div className='w-[100%] flex items-center justify-center mt-10'> <Loader width={"100"} height={"80"} /> </div>) :
                            allTestimonials.length === 0 ? (<p className='text-center text-3xl'>No Data Found</p>) : (<>
                                <h2 className='text-center text-[2rem] font-[Questrial] font-bold mb-8'>All Testimonials</h2>
                                {
                                    <div className='flex flex-col justify-around items-center gap-8 py-16 md:flex-row md:flex-wrap'>
                                        {
                                            allTestimonials.map((testimonial, index) => {
                                                return (
                                                    <div key={index} className="bg-gray-100 rounded-2xl w-[80%] md:w-[20%] " style={{ boxShadow: "1px 1px 3px #f3f4f6" }}>
                                                        <div className="mb-2  p-4 md:mb-0 flex flex-col justify-between items-center gap-2">
                                                            <div className="mb-3 md:mb-6 flex justify-center w-[100%] max-w-[150px]">
                                                                <img src={testimonial.image} alt="" className="w-[100%] rounded-full shadow-lg" />
                                                            </div>
                                                            <div className="flex flex-col justify-between items-center gap-4">
                                                                <h5 className="font-bold text-center text-xl">{testimonial.name}</h5>
                                                                <h6 className="  text-primary text-center text-sm">
                                                                    {testimonial.designation}
                                                                </h6>
                                                                <p className="mb-4 text-left w-[100%] mx-auto font-[Roboto]">
                                                                    {testimonial.message}
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                                                        <path fill="currentColor"
                                                                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                                                    </svg>
                                                                </p>
                                                                <div className='flex flex-col items-center justify-between gap-4 w-[80%] mx-auto md:flex-row'>
                                                                    <ul className="mb-0 flex justify-center">
                                                                        {
                                                                            testimonial.rating === "3" ? (
                                                                                <>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                </>
                                                                            ) : (<></>)
                                                                        }
                                                                        {
                                                                            testimonial.rating === "4" ? (
                                                                                <>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                </>
                                                                            ) : (<></>)
                                                                        }
                                                                        {
                                                                            testimonial.rating === '5' ? (
                                                                                <>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                    <li key={index}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                                                                            <path fill="currentColor"
                                                                                                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                                                        </svg>
                                                                                    </li>
                                                                                </>
                                                                            ) : (<></>)
                                                                        }
                                                                    </ul>
                                                                    <button className='px-4 py-2 bg-red-500 text-white rounded-full shadow-lg' onClick={() => deleteTestimonial(testimonial._id)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }

                                    </div>
                                }
                            </>)
                    }
                </div>
            </div>
        </Sidebar>
    )
}

export default ManageTestimonial
