import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { toast } from 'react-hot-toast';
import { apiConnector } from '../../../services/apiConnector';
import { Admins } from '../../../services/api';
import Loader from '../../../components/Loader/Loader';
import { useSelector } from 'react-redux';

const UpdatePassword = ({ id, token }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)

    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const ChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const admin = useSelector((state) => state.auth)

    const updatePassword = async (id) => {
        setLoading(true)
        try {
            await apiConnector({ method: "PUT", url: Admins.UpdateAdmin_API + `/${id}`, bodyData: { password }, headers: { token: admin.token } })
            toast.success("Password Updated");
        } catch (error) {
            toast.error(error)
        }
        setLoading(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        updatePassword(id)
    }


    return (
        <div>
            <button className='rounded-lg bg-black text-white px-4 py-2 shadow-lg' ref={btnRef} onClick={onOpen}>Update Password</button>


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
                        <div className='flex flex-col justify-between gap-4'>
                            <form className='flex flex-col justify-between ' onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-2' >
                                    <legend className='pl-2 font-semibold font-[Mooli]'>New Password</legend>
                                    <input onChange={ChangeHandler} type={"text"} className="bg-[#f3f6fb] select-none shadow-sm font-extrabold font-[Questrial] text-gray-900 sm:text-sm rounded-full block w-full p-2.5 group-hover:py-4 " placeholder={"Enter Your New Password"} />
                                </div>

                                <button type="submit" className="mt-6 w-[30%] px-4 py-2 bg-black text-white rounded-full cursor-pointer flex justify-center">{loading ? <Loader color={"#fff"} /> : "Update"}</button>

                            </form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )
}

export default UpdatePassword
