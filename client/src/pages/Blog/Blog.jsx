import React, { useState } from 'react'
import './Blog.css'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BlogsAPI } from '../../services/api';
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn';
import Navbar from '../../components/Navbar/Navbar';
import { Dna } from 'react-loader-spinner'
import HomeSection10 from '../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from '../../components/Footer/Footer';
import { apiConnector } from '../../services/apiConnector';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Blog = () => {
  const { id } = useParams();
  const [loading2, setLoading2] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const blogs = useSelector((state) => state.blogs.data)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading2(true);
      try {
        const res = await apiConnector({ method: "GET", url: BlogsAPI.SingleBlog_API + `/${id}` })
        if (res.data.success) {
          setData(res.data.data);
        }
      } catch (error) {
        toast.error("data not found")
      }
      setLoading2(false);
    }

    const exists = blogs.some(item => item._id === id);
    if (!exists) {
      navigate('/blogs');
    }
    else {
      fetchProjects();
    }
  }, [id, blogs, navigate]);


  return (
    <div style={{ overflowX: 'hidden' }}>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Blogs - Webdesys</title>
        <meta name="description" content="Explore our collection of insightful blogs at Webdesys. Stay updated with the latest trends, tips, and industry insights in web development, app development, and digital solutions. Expand your knowledge with our informative articles." />
        <meta name="keywords" content="blogs, articles, web development, app development, digital solutions, industry insights, tips, trends, informative" />
        <meta name="author" content="WebDesys" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Navbar />
      <MoveTopBtn />

      {/* Header Section */}
      <div className="border-b-2 border-gray-400 mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">

        <div className="flex flex-col justify-center items-center lg:flex-row" >

          <div className="mb-6  lg:mb-0 lg:w-1/2 lg:pr-5" data-aos="fade-right" data-aos-duration="2000">

            <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-white lg:w-20 lg:h-20">
              <img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685433704/webdesys/star-icon_yurvwj.png" alt="" />
            </div>
            <h2 className="pb-2 text-gray-900 italic max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-none" >
              {data.name}
            </h2>
            <Link to="/contactus" className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-bold">Get Started</span>
            </Link>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-left" data-aos-duration="2000">
            <img className="object-cover h-40 md:h-60 xl:h-80" src="https://res.cloudinary.com/ddffeufbq/image/upload/v1686339158/webdesys/Untitled_design_1_joycd1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
        <div className="w-full  p-2 flex">

          {
            loading2 ?
              <div className='flex justify-center items-start h-full'>
                <Dna
                  visible={true}
                  height="200"
                  width="200"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              </div> :

              <div className='flex-[100%] md:flex-[70%] border-r-2 border-gray-300 p-4 flex flex-col flex-wrap' style={{ overflowX: 'auto' }} dangerouslySetInnerHTML={{ __html: data.content }}>
              </div>
          }

          <div className='flex-[30%] p-4 hidden md:block'>
            <h2 className="pb-2 text-gray-900 italic max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-none text-center" >
              Related Blogs
            </h2>
            <div className='mt-2 grid grid-cols-1 gap-y-5 place-items-center'>
              {blogs?.length === 0 ? <>
                hey
              </> :
                blogs?.slice(0, 4).map((item, index) => (
                  <div key={index} className="shadow-2xl  rounded-2xl max-w-[20rem] mb-16 py-2 relative group 
                            before:absolute before:h-[6px] before:bottom-0 before:bg-gradient-to-t from-blue-700 to-purple-500  before:left-0 before:w-full
                            before:transition-all before:duration-500 hover:before:h-full before:-z-10 before:rounded-2xl
                            ">
                    <div className='flex justify-center items-center'>
                      <img className="object-cover h-[12rem] w-[90%] rounded-2xl" src={item.image} alt="" />
                    </div>
                    <div className="p-5">
                      <h5 className="text-black group-hover:text-white duration-150 font-[600] font-[Nunito] text-lg tracking-wider mb-3  text-center ">{item.name.length > 50 ? item.name.slice(0, 50) + '...' : item.name}</h5>

                      <h5 className="text-gray-800 group-hover:text-white duration-150 font-[600] font-[Nunito] tracking-wider mb-3  text-center text-sm">{item.desc.slice(0, 100) + '...'}</h5>

                      <div className='mt-3 flex w-full justify-center items-center'>
                        <Link to={`/blogs/${item._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 group-hover:bg-white group-hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                          Read more
                          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                        </Link>
                      </div>

                    </div>
                  </div>
                ))
              }
            </div>
          </div>


        </div>
      </div>

      <HomeSection10 />
      <Footer />

    </div>
  )
}

export default Blog
