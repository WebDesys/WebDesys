import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RecentBlogs = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    blogs?.data?.length > 0 &&
    <div className='py-6 md:py-16'>
      <div className="max-w-xl mb-3 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5" data-aos="zoom-in" data-aos-duration="1000">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto max-sm:text-center">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500 ">Our <span className="text-gray-900">Recent</span> Blogs</span><br className="hidden md:block" />
          </span>
        </h2>
      </div>

      <div className="px-3 md:px-32 py-4">
        <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-x-5 md:gap-x-8'>
          {blogs?.data?.length === 0 ? <>

          </> :
            blogs?.data?.slice(0, 4).map((item, index) => (
              <div key={index} className="shadow-2xl  rounded-2xl mb-16 py-2 relative group 
                            before:absolute before:h-[6px] before:bottom-0 before:bg-gradient-to-t from-blue-700 to-purple-500  before:left-0 before:w-full
                            before:transition-all before:duration-500 hover:before:h-full before:-z-10 before:rounded-2xl
                            " data-aos="zoom-in" data-aos-duration="2000">
                <div className='flex justify-center items-center'>
                  <img className="object-cover h-[15rem] w-[90%] rounded-2xl" src={item.image} alt="" />
                </div>
                <div className="p-5">
                  <h5 className="text-black group-hover:text-white duration-150 font-[600] font-[Nunito] text-lg tracking-wider mb-3  text-center ">{item.name.length > 50 ? item.name.slice(0, 50) + '...' : item.name}</h5>

                  <h5 className="text-gray-800 group-hover:text-white duration-150 font-[600] font-[Nunito] tracking-wider mb-3  text-center text-sm">{item.desc.slice(0, 200) + '...'}</h5>

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

        <div className=' flex w-full justify-center items-center'>
          <Link to={`/blogs`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 group-hover:bg-white group-hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Load more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default RecentBlogs
