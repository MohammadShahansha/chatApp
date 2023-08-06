import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import img3 from '../../../assets/images/facebook.png'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {

    const { googleSignIn, appleSignIn, facebookSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logByGoogle = result.user;
                console.log(logByGoogle)

            })
    }

    const handelAppleSignIn = () => {
        appleSignIn()
            // .then((result) => {
            //     const credential = OAuthProvider.credentialFromResult(result);
            //     const accessToken = credential.accessToken;
            //     const idToken = credential.idToken;
            // })
            
    }

    const handelFacebookSignIn = () => {
        facebookSignIn()
        .then(result => {
            console.log(result.user)
        })
    }

    return (
        <div className='mb-3'>
            <div className='text-center'>
                {/* <button onClick={handelGoogleSignIn} className="btn btn-circle btn-outline text-[--text-color] text-center">
                    <FaGoogle></FaGoogle>
                </button> */}
                <div className='flex justify-center items-center gap-4 text-[32px] text-white mt-[-50px]'>
                    <button onClick={handelFacebookSignIn}><img src={img3} alt="" className='w-[50px] h-[50px] border-solid border-[#A8B0AF] border-[1px] rounded-full p-2' /></button>
                    <button onClick={handelGoogleSignIn} className=' border-solid border-[#A8B0AF] border-[1px] rounded-full p-2'><FcGoogle></FcGoogle></button>
                    <button onClick={handelAppleSignIn} className=' border-solid border-[#A8B0AF] border-[1px] text-black rounded-full p-2'><FaApple></FaApple></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
// https://chatapp-ccd90.firebaseapp.com/__/auth/handler