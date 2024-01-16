import React, { useEffect } from 'react'
import MoveTopBtn from '../../components/MoveTopBtn/MoveTopBtn'
import Navbar from '../../components/Navbar/Navbar'
import HomeSection10 from './../../components/HomeComponents/HomeSection10/HomeSection10';
import Footer from './../../components/Footer/Footer';
import { Rings } from 'react-loader-spinner';
import axios from 'axios';
import { url2 } from '../../services/api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button } from '@chakra-ui/react';

const VerifyEmployee = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${url2}/api/manage-employee/${id}`);
                if (res?.data?.success) {
                    setData(res?.data?.data);
                    toast.success("Verified");
                }
            }
            catch (err) {
                toast.error('Invalid Information')
                setError(true);
            }
            setLoading(false);
        }
        fetchProjects();
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Navbar />
            <MoveTopBtn />

            <div className="mb-2 px-4 pt-2 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-32">
            </div>

            {loading ?
                <div className='border-2 border-gray-500 h-[40vh] mx-4 px-3 py-2 sm:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex justify-center items-center flex-col bg-gradient-to-r from-pink-100 to-rose-300 '>
                    <Rings
                        height="50"
                        width="50"
                        color="blue"
                        radius="8"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="rings-loading"
                    />
                    <p className='font-[Roboto] text-lg font-[500]'>fetching details....</p>
                </div> :
                <div className='border-2 border-gray-500 h-[40vh] mx-4 px-3 py-2 md:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex justify-center items-center flex-col bg-gradient-to-r from-cyan-100 to-indigo-200 rounded-md'>
                    {error ?
                        <Button colorScheme='red' size='sm' fontWeight='500' className='font-[Roboto]'>
                            Oops! employee not found
                        </Button>
                        :
                        <>
                            <Button colorScheme='telegram' size='sm' fontWeight='500' className='font-[Roboto]'>
                                Details Verified
                            </Button>
                            <p className='text-center mt-3 font-[Roboto] font-[500]'>
                                This belongs to <span className='italic underline text-red-600'>{data.name}</span>.
                            </p>
                            <p className=' text-center mt-3 font-[Roboto] font-[500]'>
                                Your details verified, confirming you as a valued Webdesys employee.
                            </p>
                        </>
                    }
                </div>
            }



            <HomeSection10 />
            <Footer />
        </div>
    )
}

export default VerifyEmployee