import React from 'react'
import { Rings } from 'react-loader-spinner';

const PageLoader = () => {
    return (
        <div className='fixed top-0 left-0 z-[100] flex w-screen h-screen justify-center items-center bg-gray-200 flex-col'>
            <Rings
                height="150"
                width="150"
                color="black"
                // color="white"
                radius="8"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    )
}

export default PageLoader