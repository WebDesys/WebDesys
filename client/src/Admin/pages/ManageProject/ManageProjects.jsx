import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { ProjectAPI } from '../../../services/api';
import { apiConnector } from '../../../services/apiConnector';
import Sidebar from '../../components/Sidebar/Sidebar';
import BlogLoader from '../ManageBlogs/BlogLoader';

import ProjectCard from './ProjectCard';


const ManageProjects = () => {
    const [projectData, setProjectData] = useState({ link: '', name: '', image: '', desc: '' })
    const [loading, setLoading] = useState(false)

    const [allProjectData, setAllProjectData] = useState([])
    const [dataLoading] = useState(false);

    const ChangeHandler = (e) => {
        setProjectData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    // Token
    const admin = useSelector((state) => state.auth)

    const fetchAllProjects = async () => {
        setLoading(true)
        try {
            const response = await apiConnector({ method: "GET", url: ProjectAPI.AllClientProject_API })
            setAllProjectData(response.data.data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }

    const createLogo = async () => {
        setLoading(true)
        try {
            await apiConnector({ method: "POST", url: ProjectAPI.CreateProject_API, bodyData: projectData, headers: { token: admin.token } })
            toast.success("Project Successfully Created")
            fetchAllProjects();
            setProjectData({ link: '', name: '', image: '', desc: '' })
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error)
        }
        setLoading(false)
    }

    const deleteProject = async (id) => {
        try {
            await apiConnector({ method: "DELETE", url: ProjectAPI.DeleteClientProject_API + `/${id}`, headers: { token: admin.token } })
            toast.success("Project Deleted Successfully")
            fetchAllProjects();
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createLogo();
    }

    useEffect(() => {
        const fetchAllProjects = async () => {

            try {
                const response = await apiConnector({ method: "GET", url: ProjectAPI.AllClientProject_API, headers: { token: admin.token } })
                setAllProjectData(response.data.data)
                console.log(allProjectData)
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
        }
        fetchAllProjects();
    }, [allProjectData , admin])

    const navigate = useNavigate();

    useEffect(() => {
        if (admin.role === "superAdmin" || admin.role === "Admin") {
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
                                    Add Client Projects
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900  text-start">Link of Project</label>
                                        <input type="text" name="link" id="link" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Paste Project Link" autoComplete="off" onChange={(e) => ChangeHandler(e)} value={projectData.link} />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  text-start">Name of Project</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Project Name" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={projectData.name} />
                                    </div>

                                    <div>
                                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900  text-start">Image Link </label>
                                        <input type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Project Image" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={projectData.image} />
                                    </div>

                                    <div>
                                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900  text-start">Project Description </label>
                                        <input type="text" name="desc" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Project Description" required={true} autoComplete="off" onChange={(e) => ChangeHandler(e)} value={projectData.desc} />
                                    </div>

                                    <button type="submit" className="w-full text-white grid place-items-center bg-[#2463eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{loading ? <Loader color={"#fff"} /> : "Add Project"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-[100%] flex flex-col justify-between gap-4'>
                    {
                        allProjectData.length === 0 ? (<h2 className='text-[3rem] font-extrabold font-[Mooli] text-center'>No Project Found</h2>) : (<h2 className='text-[3rem] font-extrabold font-[Questrial] text-center'>All Projects</h2>)
                    }
                    {allProjectData.length < 1 ? (<></>) : dataLoading ? <BlogLoader /> :
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-x-4 gap-y-8 p-2 place-items-center'>
                            {
                                allProjectData.map((project, index) => (
                                    <ProjectCard key={index} link={project.link} name={project.name} image={project.image} desc={project.desc} _id={project._id} deleteProject={deleteProject} />
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </Sidebar>
    )
}

export default ManageProjects;
