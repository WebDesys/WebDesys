import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useEffect } from 'react';
import { loginUser } from '../../../features/authSlice';
import Loader from '../../../components/Loader/Loader';

import "./Login.css"

const Login = () => {
    const [user, setUser] = useState({
        email: '', password: ''
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth._id) {
            if (auth.role === "superAdmin") {
                navigate('/en/admin/manage-users')
            }
            else {
                navigate('/en/admin/welcome-admin')
            }
            // navigate('/en/admin/manage-users')
        }
    }, [navigate, auth])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        dispatch(loginUser(user)).then(() => {
            setLoading(false);
        });
    }

    return (
        <div className='loginPage_mainDiv'>
            <div className="loginPage_wrapper">
                <div className="w-full flex justify-center items-center">
                    <Link to='/'><img src="https://res.cloudinary.com/ddffeufbq/image/upload/v1685439572/webdesys/webdesys_logo_v4bxps.webp" alt="logo" className="md:cursor-pointer h-24" /></Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Login </h1>
                    <div className="loginPage_input-box">
                        <input type="text" placeholder="Username" name='email' autoComplete='email' required={true} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="loginPage_input-box">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" autoComplete='current-password' name='password' required={true} onChange={(e) => handleChange(e)} />
                        {
                            showPassword ?
                                <AiOutlineEyeInvisible className='absolute top-[1.4rem] right-5 text-lg cursor-pointer'
                                    onClick={() => setShowPassword((prev) => !prev)} />
                                :
                                <AiOutlineEye className='absolute top-[1.4rem] right-5 text-lg cursor-pointer'
                                    onClick={() => setShowPassword((prev) => !prev)} />
                        }
                    </div>
                    <button type="submit" className="btn grid place-items-center">{loading ? <Loader color={"#000"} /> : "Login"}</button>
                    <div className='flex justify-center items-center mt-6'>
                        <Link to='/' className='text-sm text-white font-[Mooli] text-center mx-auto'>Back to home</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
