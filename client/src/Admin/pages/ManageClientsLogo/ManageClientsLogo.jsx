import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import Sidebar from '../../components/Sidebar/Sidebar'
import BlogLoader from '../ManageBlogs/BlogLoader'
import { AiFillDelete } from "react-icons/ai"
import { ClientsLogo } from '../../../services/api'
import toast from 'react-hot-toast'
import { apiConnector } from '../../../services/apiConnector'
import { useNavigate } from 'react-router-dom'

const ManageClientsLogo = () => {
    const [clientLogoData, setClientLogoData] = useState({ link: '' })
    const [loading, setLoading] = useState(false)

    const [allClientLogo, setAllClientLogo] = useState([])
    const [dataLoading] = useState(false);

    const ChangeHandler = (e) => {
        setClientLogoData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    // Token
    const admin = useSelector((state) => state.auth)

    const fetchAllLogos = async () => {
        setLoading(true)
        try {
            const response = await apiConnector({ method: "GET", url: ClientsLogo.AllClientLogo_API })
            setAllClientLogo(response.data.data)
            console.log(allClientLogo)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }

    const createLogo = async () => {
        setLoading(true)
        try {
            await apiConnector({ method: "POST", url: ClientsLogo.CreateClientLogo_API, bodyData: clientLogoData, headers: { token: admin.token } })
            toast.success("Logo Successfully Created")
            fetchAllLogos();
            setClientLogoData({ link: '' })
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error)
        }
        setLoading(false)
    }

    const deleteLogo = async (id) => {
        try {
            await apiConnector({ method: "DELETE", url: ClientsLogo.DeleteClientLogo_API + `/${id}`, headers: { token: admin.token } })
            toast.success("Logo Deleted Successfully")
            fetchAllLogos();
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createLogo();
    }

    useEffect(() => {
        const fetchAllLogos = async () => {
            try {
                const response = await apiConnector({ method: "GET", url: ClientsLogo.AllClientLogo_API, headers: { token: admin.token } })
                setAllClientLogo(response.data.data)
                console.log(allClientLogo)
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
        }
        fetchAllLogos();
    }, [admin, allClientLogo])

    const navigate = useNavigate();

    useEffect(()=>{
        if(admin.role === "superAdmin" || admin.role === "Admin"){
        }
        else{
            navigate('/en/admin/welcome-admin')
        }
    },[admin , navigate])

    return (
        <Sidebar>
            <div className='flex flex-col justify-between gap-8'>
                <section className="bg-gray-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                        <div className="w-[100%] bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Add Client Logo
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900  text-start">Logo Link</label>
                                        <input type="text" name="link" id="link" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Paste Logo Link" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={clientLogoData.link} />
                                    </div>

                                    <button type="submit" className="w-full text-white grid place-items-center bg-[#2463eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{loading ? <Loader color={"#fff"} /> : "Add Client Logo"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-[100%] flex flex-col justify-between gap-4'>
                    {
                        allClientLogo.length === 0 ? (<h2 className='text-[3rem] font-extrabold font-[Questrial] text-center'>No Logo Found</h2>) : (<h2 className='text-[3rem] font-extrabold font-[Questrial] text-center'>All Logos</h2>)
                    }
                    {allClientLogo.length < 1 ? (<></>) : dataLoading ? <BlogLoader /> :
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-x-4 gap-y-8 p-2 place-items-center'>
                            {
                                allClientLogo.map((logo, index) => (
                                    <div className='w-[40%] flex flex-col justify-between items-center gap-6 border pb-8 rounded-lg overflow-hidden bg-gray-200 hover:bg-gray-100 transition-all duration-200'>
                                        <img src={logo.link} alt='' className='w-[100%]' />
                                        <AiFillDelete className='text-xl text-red-600 cursor-pointer ' onClick={() => deleteLogo(logo._id)} />
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </Sidebar>
    )
}

export default ManageClientsLogo
