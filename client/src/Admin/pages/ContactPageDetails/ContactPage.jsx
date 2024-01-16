import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'


import CustomModal from '../../components/Modal/CustomModal'
import Sidebar from '../../components/Sidebar/Sidebar'

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { TailSpin } from 'react-loader-spinner'
import { ContactPageAPI } from '../../../services/api'
import { apiConnector } from '../../../services/apiConnector'
import { useNavigate } from 'react-router-dom'

const ContactPageData = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)

    const [loading, setLoading] = useState(false)
    const [allContactRequest, setAllContactRequest] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPages] = useState()

    let currentModalData = { name: '', email: '', mobile: '', type: '', message: '' }

    const increasePageNo = (pageNo) => {
        if (pageNo < totalPages && pageNo > 0) {
            setPageNo(pageNo = pageNo + 1)
            allContactData(pageNo)
        }
    }

    const descreasePageNo = (pageNo) => {
        if (pageNo !== 0 && pageNo > 0 && pageNo !== 1) {
            setPageNo(pageNo = pageNo - 1)
            allContactData(pageNo)
        }
    }


    const admin = useSelector((state) => state.auth)

    const allContactData = async (pageNo = 1, pageSize = 15) => {
        console.log(admin.token)
        setLoading(true)
        try {
            const response = await apiConnector({ method: "GET", url: ContactPageAPI.AllContact_API + `?pageNo=${pageNo}&pageSize=${pageSize}`, headers: { token: admin.token } })
            setAllContactRequest(response.data.data)
            setTotalPages(Math.ceil(response.data.count / pageSize))
            console.log("RESPONSE", response)
        } catch (error) {
            toast.error(error)
            console.log(error)
        }
        setLoading(false)
    }

    const DeleteContact = async (id) => {
        setLoading(true)
        try {
            await apiConnector({ method: "DELETE", url: ContactPageAPI.DeleteContact_API + `/${id}`, headers: { token: admin.token } })
            toast.success("Request Deleted Successfully")
            allContactData();

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        const allContactData = async (pageNo = 1, pageSize = 15) => {
            setLoading(true)
            try {
                const response = await apiConnector({ method: "GET", url: ContactPageAPI.AllContact_API + `?pageNo=${pageNo}&pageSize=${pageSize}`, headers: { token: admin.token } })
                setAllContactRequest(response.data.data)
                setTotalPages(Math.ceil(response.data.count / pageSize))
                console.log("RESPONSE", response)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        allContactData();
    }, [admin]);

    const navigate = useNavigate();

    useEffect(() => {
        if (admin.role === "ContactUs" || admin.role === "superAdmin" || admin.role === "Admin") {
        }
        else {
            navigate('/en/admin/welcome-admin')
        }
    }, [admin, navigate])

    return (
        <Sidebar>
            <div className='flex flex-col justify-between items-center min-h-[100vh]'>
                <div className='w-[100%] pt-8 px-4 flex flex-col justify-between gap-8'>
                    <h2 className='text-center text-[2rem] font-[Questrial] font-bold'>Contacted Details</h2>
                    {
                        loading ? (<div className='w-[100%] h-screen ml-[50%] mt-[20%]'>
                            <TailSpin />
                        </div>) : allContactRequest.length > 0 ? (<TableContainer>
                            <Table variant='striped' colorScheme="teal">
                                <Thead>
                                    <Tr>
                                        <Th>User Name</Th>
                                        <Th>User Email</Th>
                                        <Th isNumeric>More Details</Th>
                                        <Th isNumeric>Action</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        allContactRequest.length > 0 ? (
                                            allContactRequest.map((contact, index) => {
                                                currentModalData = { name: contact.name, email: contact.email, mobile: contact.mobile, type: contact.type, message: contact.message }
                                                return (
                                                    <Tr className='' key={index}>
                                                        <Td>{contact.name}</Td>
                                                        <Td>{contact.email}</Td>
                                                        <Td><button className='ml-[75%] rounded-lg bg-black text-white px-4 py-2 shadow-lg' ref={btnRef} onClick={onOpen}>View More</button></Td>
                                                        <Td><button className='ml-[75%] rounded-lg bg-red-500 text-white px-6 py-2' onClick={() => DeleteContact(contact._id)} >Delete</button></Td>
                                                        {/* <AiFillDelete className='text-xl ml-[50%] mt-[20%] text-red-600 cursor-pointer'  /> */}
                                                    </Tr>
                                                )
                                            })
                                        ) : <p>No Data Found</p>
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>) : "No Data Found"
                    }
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
            </div>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={scrollBehavior}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>All Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CustomModal name={currentModalData.name} email={currentModalData.email} mobile={currentModalData.mobile} type={currentModalData.type} message={currentModalData.message} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Sidebar>
    )
}

export default ContactPageData;