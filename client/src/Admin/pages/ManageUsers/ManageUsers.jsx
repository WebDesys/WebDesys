import React, { useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import Sidebar from "../../components/Sidebar/Sidebar"

import { useEffect } from 'react';
import toast from 'react-hot-toast'
import { Admins } from '../../../services/api';
import { apiConnector } from '../../../services/apiConnector';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UpdatePassword from './UpdatePassword';

const ManageUsers = () => {
    const [adminData, setAdminData] = useState({ name: '', email: '', password: '', role: '' })
    const [loading, setLoading] = useState(false)

    const [allAdmins, setAllAdmins] = useState([])
    const ChangeHandler = (e) => {
        setAdminData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        console.log({ adminData })
        createAdmin();
        setAdminData({ email: "", password: "", name: "" })
        setLoading(false)
    }
    // Token
    const admin = useSelector((state) => state.auth)


    const fetchAllAdmins = async () => {
        try {
            const response = await apiConnector({ method: "GET", url: Admins.AllAdmins_API, headers: { token: admin.token } })
            setAllAdmins(response.data.data)
            console.log(allAdmins)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const createAdmin = async () => {
        try {
            await apiConnector({ method: "POST", url: Admins.CreateAdmin_API, bodyData: adminData, headers: { token: admin.token } })
            toast.success("Admin Successfully Created")
            fetchAllAdmins();
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error)
        }
    }

    const deleteAdmin = async (id) => {
        try {
            await apiConnector({ method: "DELETE", url: Admins.DeleteAdmin_API + `/${id}`, headers: { token: admin.token } })
            toast.success("Admin Deleted Successfully")
            fetchAllAdmins();
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const fetchAllAdmins = async () => {
            try {
                const response = await apiConnector({ method: "GET", url: Admins.AllAdmins_API, headers: { token: admin.token } })
                setAllAdmins(response.data.data)
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
        }
        fetchAllAdmins();
    }, [admin])

    const navigate = useNavigate();

    useEffect(() => {
        if (admin.role === "superAdmin") {
        }
        else {
            navigate('/en/admin/welcome-admin')
        }
    }, [admin, navigate])

    return (
        <Sidebar>
            <div className='flex flex-col justify-between gap-8'>
                <section className="bg-gray-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
                        <div className="w-[100%] bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Create Admin
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  text-start">Name</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Name" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={adminData.name} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900  text-start">email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="example@gmail.com" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={adminData.email} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900  text-start">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={adminData.password} />
                                    </div>
                                    <div>
                                        <label htmlFor='role' className="block mb-2 text-sm font-medium text-gray-900  text-start">Select Role</label>
                                        <select onChange={ChangeHandler} type="text" name='role' id='role' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '>
                                            <option value="">Select Access Role</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Blogs and Testimonial">Blogs and Testimonials</option>
                                            <option value="ContactUs">Contact Us</option>
                                            <option value="Career">Career Page</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="w-full text-white grid place-items-center bg-[#2463eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{loading ? <Loader color={"#fff"} /> : "Create Admin"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-[100%] px-4'>
                    {
                        loading ? (<div className='w-[100%] flex items-center justify-center mt-10'> <Loader width={"100"} height={"80"} /> </div>) : (
                            allAdmins.length === 0 ? (<p className='text-center text-3xl'>No Data Found</p>) : (<div className='w-[95%] mx-auto'>
                                <h2 className='text-center text-[2rem] font-[Questrial] font-bold'>All Admins</h2>
                                <TableContainer>
                                    <Table variant='striped'>
                                        <Thead>
                                            <Tr>
                                                <Th>Name</Th>
                                                <Th>Email</Th>
                                                <Th>Access</Th>
                                                <Th >Action</Th>
                                                <Th>Password</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                allAdmins.map((admin, index) => {
                                                    return (
                                                        <Tr className='' key={index} >
                                                            <Td>{admin.name}</Td>
                                                            <Td>{admin.email}</Td>
                                                            <Td><p className='bg-green-500 py-2 text-white w-fit px-4 rounded-full'>{admin.role}</p></Td>
                                                            <Td><button className='rounded-lg bg-red-500 text-white px-6 py-2' onClick={() => deleteAdmin(admin._id)}>Delete</button></Td>
                                                            <Td><UpdatePassword id={admin._id} token={admin.token} /></Td>
                                                        </Tr>
                                                    )
                                                })
                                            }
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </div>)
                        )
                    }
                </div>
            </div>
        </Sidebar>
    )
}

export default ManageUsers
