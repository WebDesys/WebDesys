import React from 'react'

const BlogLoader = () => {

    const BlogCard = () => {
        return (
            <div className="blogLoadingCard blogLoading-is-loading">
                <div className="blogLoading-image"></div>
                <div className="blogLoading-content">
                    <h2 className='text-transparent'>.</h2>
                    <p></p>
                </div>
            </div>

        )
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-x-4 gap-y-8 p-2 place-items-center'>
            <BlogCard />
            <BlogCard />
            <BlogCard />

            <BlogCard />
            <BlogCard />
            <BlogCard />

            <BlogCard />
            <BlogCard />
            <BlogCard />

            <BlogCard />
            <BlogCard />
            <BlogCard />

            <BlogCard />
            <BlogCard />
            <BlogCard />

        </div>
    )
}



export default BlogLoader
