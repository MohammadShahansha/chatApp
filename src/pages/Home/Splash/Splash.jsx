import React from 'react';
import img1 from '../../../assets/images/MOkx logo 1.png'

const Splash = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={img1} alt="" className='w-[300px]' />

            </div>
            <div className='flex justify-center items-center text-[#69235B] font-[600] text-[20px]'>
                <h2 className='mt-40'>Back to Vedas</h2>
            </div>
        </div>
    );
};

export default Splash;