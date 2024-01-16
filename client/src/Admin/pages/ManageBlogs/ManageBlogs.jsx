import React, { useEffect, useRef, useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import Sidebar from '../../components/Sidebar/Sidebar'
import JoditEditor from 'jodit-react';
import BlogCard from './BlogCard';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react'
import { toast } from 'react-hot-toast';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import BlogLoader from './BlogLoader';
import { apiConnector } from '../../../services/apiConnector';
import { getBlogs } from '../../../features/blogsSlice'

import './BlogCard.css'
import { BlogsAPI } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const ManageBlogs = () => {
    const [blogData, setBlogData] = useState({ name: '', image: '', desc: '', content: '' })
    const [loading, setLoading] = useState(false)

    const [allBlogs, setAllBlogs] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [dataLoading, setDataLoading] = useState(false);

    const increasePageNo = (pageNo) => {
        if (pageNo < totalPages && pageNo > 0) {
            setPageNo(pageNo = pageNo + 1)
            getAllBlogs(pageNo)
            getBlogs();
        }
    }

    const descreasePageNo = (pageNo) => {
        if (pageNo !== 0 && pageNo > 0 && pageNo !== 1) {
            setPageNo(pageNo = pageNo - 1)
            getAllBlogs(pageNo)
        }
    }

    const editor = useRef(null);

    const ChangeHandler = (e) => {
        setBlogData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const admin = useSelector((state) => state.auth)

    const getAllBlogs = async (pageNo = 1, pageSize = 15) => {
        setDataLoading(true);
        try {
            const response = await apiConnector({ method: "GET", url: BlogsAPI.AllBlogs_API + `?pageNo=${pageNo}&pageSize=${pageSize}`, })
            setAllBlogs(response.data.data)
            setTotalPages(Math.ceil(response.data.count / pageSize))
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
        setDataLoading(false);
    }

    const createBlog = async () => {
        setLoading(true)
        try {
            await apiConnector({ method: "POST", url: BlogsAPI.CreateBlog_API, bodyData: blogData, headers: { token: admin.token } })
            toast.success("Blog Successfully Created")
            setBlogData({ name: '', image: '', desc: '', content: '' })
            getAllBlogs();

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }

    const deleteBlog = async (id) => {
        setLoading(true)
        try {
            await apiConnector({ method: "DELETE", url: BlogsAPI.DeleteBlogs_API + `/${id}`, headers: { token: admin.token } })
            toast.success("Blog Deleted Successfully")
            getAllBlogs();
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        createBlog()
    }

    useEffect(() => {
        const getAllBlogs = async (pageNo = 1, pageSize = 15) => {
            setDataLoading(true);
            try {
                const response = await apiConnector({ method: "GET", url: BlogsAPI.AllBlogs_API + `?pageNo=${pageNo}&pageSize=${pageSize}`, headers: { token: admin.token } })
                setAllBlogs(response.data.data)
                setTotalPages(Math.ceil(response.data.count / pageSize))
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
            setDataLoading(false);
        }

        getAllBlogs();
    }, [admin]);

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
            <div className='w-[100%] flex flex-col justify-between items-start gap-[3rem]'>
                <section className="bg-gray-50 w-[100%]">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
                        <div className="w-[100%] bg-white rounded-lg shadow  md:mt-0 xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                    Add Blog
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  text-start">Enter Title</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Blog Title" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={blogData.name} />
                                    </div>
                                    <div>
                                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900  text-start">Image Url</label>
                                        <input type="text" name="image" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter Img Url" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={blogData.image} />
                                    </div>
                                    <div>
                                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900  text-start">Enter Description</label>
                                        <input type="text" name="desc" id="desc" placeholder="Enter Description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={blogData.desc} />
                                    </div>

                                    <div className=''>
                                        <JoditEditor
                                            ref={editor}
                                            value={blogData.content}
                                            tabIndex={1}
                                            onChange={newContent => setBlogData((prevFormData) => {
                                                return {
                                                    ...prevFormData,
                                                    content: newContent
                                                }
                                            })}
                                            onBlur={newContent => setBlogData((prevFormData) => {
                                                return {
                                                    ...prevFormData,
                                                    content: newContent
                                                }
                                            })}
                                        />
                                    </div>
                                    <button type="submit" className="w-full text-white grid place-items-center bg-[#2463eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{loading ? <Loader color={"#fff"} /> : "Create Blog"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='w-[100%] flex flex-col justify-between gap-4'>
                    {
                        allBlogs.length === 0 ? (<h2 className='text-[3rem] font-extrabold font-[Questrial] text-center'>No Blogs Found</h2>) : (<h2 className='text-[3rem] font-extrabold font-[Questrial] text-center'>All Blogs</h2>)
                    }
                    {allBlogs.length < 1 ? (<></>) : dataLoading ? <BlogLoader /> :
                        <div className="px-3 md:px-32 py-4 md:py-4">
                            <div className='my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-8'>
                                {
                                    allBlogs.map((blog, index) => (
                                        <BlogCard heading={blog.name} des={blog.desc} img={blog.image} deleteBlog={deleteBlog} _id={blog._id} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className='w-[100%] bg-gray-200 mt-5'>
                <div className='w-[90%] mx-auto flex justify-between items-center px-4 py-4 '>
                    <div className='flex justify-between items-center gap-6'>
                        <Button colorScheme='green' size='sm' onClick={() => descreasePageNo(pageNo)}>
                            <p className='font-[Poppins] font-[400] flex justify-center items-center'><AiOutlineLeft className='mr-2' />Prev </p>
                        </Button>
                        <Button colorScheme='green' size='sm' onClick={() => increasePageNo(pageNo)}>
                            <p className='font-[Poppins] font-[400] flex justify-center items-center'>Next <AiOutlineRight className='ml-2' /></p>
                        </Button>
                    </div>
                    <div>
                        <p className='text-gray-900  font-[Poppins]'>{pageNo} of {totalPages}</p>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}

export default ManageBlogs