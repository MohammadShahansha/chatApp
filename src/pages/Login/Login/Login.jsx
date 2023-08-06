import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const { signin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/message";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        signin(data.email, data.password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                reset()
                Swal.fire('Login successfull')
                navigate(from, { replace: true })

            })
    }

    return (
        <div>
            <div className='mt-10 mb-20 px-5 md:mt-20 md:ms-32'>
                <Link to="/"><h2 className='font-[700]'><FaArrowLeft></FaArrowLeft></h2></Link>
            </div>
            <h2 className='text-center text-[#69235B] text-[18px] md:text-[40px] font-[700]'>Log in to Mokx</h2>
            <div className='w-[293px] h-10 md:w-[440px] md:h-16 leading-[20px] md:leading-[30px] mx-auto text-[#69235B] mt-7 text-center'>
                <p className='font-[300] text-[14px] md:text-[24px]'>Welcome back! Sign in using your social account or email to continue us</p>
            </div>

            <div className='mt-20'>
                <SocialLogin></SocialLogin>
            </div>
            <div className="divider w-[293px] md:w-[440px]   mx-auto">OR</div>

            {/* -------------login related work------------------- */}

            <div className="px-5">

                <div className="md:w-[440px] mx-auto mt-20">
                    <div className=" w-full">
                        {/* <form onSubmit={handelLogin} className="card-body"> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="">
                                <label className="label">
                                    <span className=" text-[#69235B] font-[500] text-[14px] md:text-[20px]">Your Email</span>
                                </label>
                                <input type="email"{...register("email", { required: true })} name='email' placeholder="" className="border-b-2 w-full" />
                            </div>
                            <div className="mt-7">
                                <label className="label">
                                    <span className=" text-[#69235B] font-[500] text-[14px] md:text-[20px]">Your Password</span>
                                </label>
                                <input type="password"{...register("password", { required: true })} name='password' placeholder="" className="border-b-2 w-full" />

                            </div>
                            <div className="form-control mt-20">
                                <input className="bg-[#FFC746] h-[54px] rounded-md text-[#69235B] font-[500] text-[20px] cursor-pointer" type="submit" value="Login" />
                                <p className='text-center text-[--text-color] font-[400] text-[20px] mt-4'><Link to="/register" className='text-[#FFC746]'>Forgot Password?</Link></p>
                            </div>
                            {/* <SocialLogin></SocialLogin> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;