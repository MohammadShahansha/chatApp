import React from 'react';
import img2 from '../../../assets/images/girl.png'
import { Link } from 'react-router-dom';
import SocialLogin from '../../Login/SocialLogin/SocialLogin';

const MainContent = () => {
    return (
        <div className='bg-[#69235B] pb-20'>
            {/* image related work------------------ */}
            <div className='relative flex flex-col justify-center items-center'>
                <img src={img2} alt="" className='w-full h-auto' />
                <div className='w-[190px] h-[30px] bg-[#CBCBFF] text-[#69235B] rounded-md absolute bottom-[-10px] flex justify-center '>
                    <p className='text-center  font-[500]'>Arya, AI Acharya</p>
                </div>
            </div>

            {/* --------------------some text---------------- */}
            <div className='w-[295px] h-[100px] md:w-[440px] md:h-[150px] leading-[39px] md:leading-[45px] font-[600] mt-14 mb-10 md:mb-0 mx-auto'>
                <h2 className='text-[32px] md:text-[50px] text-[#ffffff]'>Discover the timeless wisdom of <span className='text-[#FFC746]'>the Vedas</span></h2>

            </div>

            <div className='w-[295px] h-[100px] md:w-[440px] md:h-[150px] leading-[26px] md:leading-[33px] font-[300] mx-auto'>
                <p className='text-[16px] md:text-[24px] text-[#FFFFFF]'>Sign up and <span className='text-[#FBBC04]'>journey through ancient knowledge with Arya</span></p>
            </div>

            {/* --------------------------Register & Login related------------------- */}
            {/* <div className='flex justify-center items-center gap-4 text-[32px] text-white mt-[-50px]'>
                <p><img src={img3} alt="" className='w-[50px] h-[50px] border-solid border-[#A8B0AF] border-[1px] rounded-full p-2' /></p>
                <p className=' border-solid border-[#A8B0AF] border-[1px] rounded-full p-2'><FcGoogle></FcGoogle></p>
                <p className=' border-solid border-[#A8B0AF] border-[1px] rounded-full p-2'><FaApple></FaApple></p>
            </div> */}
            <div className='mt-3 md:mt-0'>
                <SocialLogin></SocialLogin>
            </div>

            <div className='text-[#CDD1D0] w-[295px] h-[100px] md:w-[440px] md:h-[150px] mx-auto'>
                <div className="divider text-[#CDD1D0] "> OR </div>
            </div>

            <div className='w-[295px] md:w-[440px] h-11 bg-[#FBBC04] rounded-md mx-auto flex justify-center items-center text-center mt-[-70px] md:mt-[-100px]'>
                <Link to="/register" className='font-[500] text-[20px] '>Sign up with mail</Link>
            </div>

            <div className='text-center md:mt-4'>
                <p className='font-[400] text-[20px] text-[#FFFFFF]'>Existing Accoutn? <Link to="/login" className='text-[#FBBC04]'>Log in</Link></p>
            </div>

        </div>
    );
};

export default MainContent;