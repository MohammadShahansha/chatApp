import React from 'react';
import img from '../../../assets/images/girl.png'
import text from '../../../assets/images/text.png'
import vector from '../../../assets/images/Vector.png'
import warn from '../../../assets/images/Group.png'
import mic from '../../../assets/images/microphone-2.png'
import send from '../../../assets/images/send.png'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Message = () => {
    return (
        <div className='md:w-[440px] mx-auto pt-5 pb-40 bg-[#F8F8FF] '>
            <div className='sticky top-0 z-[100] w-full block'>
                <div className='flex justify-between items-center pb-5 px-5 shadow-xl '>
                    <div className='flex items-center gap-2'>
                        <Link to="/"><h2 className='font-[700]'><FaArrowLeft></FaArrowLeft></h2></Link>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 h-10 rounded-full' src={img} alt="" />
                            <div>
                                <h2 className='text-[#69235B] font-[500] text-[15px]'>Arya</h2>
                                <p className='text-[#797C7B] font-[100] text-[12px]'>Vedic Al Bot</p>
                            </div>
                        </div>
                    </div>
                    <img src={text} alt="" />
                </div>

            </div>

            <div className='scroll-m-0'>
                <div className=' pt-5 px-5'>
                    <div className='flex gap-2 '>
                        <img className='w-10 h-10 rounded-full' src={img} alt="" />
                        <div className='bg-[#69235B] w-[273px] md:w-[300px] py-3 mt-2 text-white font-[400] text-[12px] md:text-[14px] px-5 rounded-e-lg rounded-bl-lg'>
                            <p>Namaste! I'm Arya, your AI Vedic help.I' m here to provide insights from Vedas for daily life concerns.</p> <br />
                            <p> Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I'm here to assist you.</p>

                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='flex justify-center items-center gap-2 text-[16px] md:text-[20px] font-[400] text-[#69235B]'>
                        <img src={vector} alt="" />
                        <p>You can ask queries like:</p>
                    </div>
                    <div className='mt-3 text-[12px] md:text-[15px] font-[400] mx-auto leading-[14px]'>
                        <p className=' w-[273px] h-[43px] md:w-[300px] md:h-[50px] bg-[#FBBC04] flex  items-center text-left px-3 rounded-full mx-auto'>What is the mantra in Rigveda 10.2.3?</p>

                    </div>
                    <div className='my-2 leading-[14px]'>
                        <p className='w-[273px] h-[51px] md:w-[300px] md:h-[55px] bg-[#FBBC04] flex  items-center text-left ps-3 rounded-full mx-auto'>What are the prescribed Vedic remedies for snake bites?</p>

                    </div>
                    <div className='leading-[14px]'>
                        <p className=' w-[273px] h-[43px] md:w-[300px] md:h-[55px] bg-[#FBBC04] flex  items-center text-left ps-3 rounded-full mx-auto'>Can you tell me the significance of the Gayatri Mantra?</p>
                    </div>
                    <div className='flex justify-center items-center gap-2 mt-5 text-[13px] md:text-[15px] font-[400] text-[#69235B]'>
                        <img src={warn} alt="" />
                        <p >Limitation: May struggle with complex queries.</p>
                    </div>
                </div>

                <div className=' pt-5 px-5'>
                    <div className='flex gap-2 '>
                        <img className='w-10 h-10 rounded-full' src={img} alt="" />
                        <div className='bg-[#69235B] w-[273px] md:w-[300px] py-3 mt-2 text-white font-[400] text-[12px] md:text-[14px] px-5 rounded-e-lg rounded-bl-lg'>
                            <p>Let your curiosity guide you; wishing you blessings and enlightenment.</p>

                        </div>
                    </div>
                </div>

            </div>


            <div className='ms-[22px] md:ms-[52px]'>
                <div className="flex items-center justify-between mx-auto mt-10  rounded-full w-[328px] h-[56px] bg-white shadow-xl px-5 fixed bottom-5 z-[100]">
                    <div className="">
                        <input type="text" placeholder="Write your message" className="" />

                    </div>
                    <div className='grid grid-cols-2'>
                        <img src={send} alt="" />
                        <img src={mic} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Message;