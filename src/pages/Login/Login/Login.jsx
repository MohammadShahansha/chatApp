import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className='mt-10 mb-20 px-5 md:mt-20 md:ms-32'>
                <h2 className='font-[700]'><FaArrowLeft></FaArrowLeft></h2>
            </div>
            <h2 className='text-center text-[#69235B] text-[18px] md:text-[40px] font-[700]'>Log in to Mokx</h2>
            <div className='w-[293px] h-10 md:w-[440px] md:h-16 leading-[20px] md:leading-[30px] mx-auto text-[#69235B] mt-7 text-center'>
                <p className='font-[300] text-[14px] md:text-[24px]'>Welcome back! Sign in using your social account or email to continue us</p>
            </div>
        </div>
    );
};

export default Login;