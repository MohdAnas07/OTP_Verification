import React, { useEffect, useState } from 'react'
import '../style/signIn.scss';
import '../style/success.scss';
import Logo from '../assets/AK_logo.png'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import Img from '../assets/Artboard.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa'



const SendOTP = ({ isOTPVerify }) => {

    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false)


    const getData = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/user/login`, {
                phonenumber: ph
            })
            toast.success('OTP Send Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false)
            localStorage.setItem("phonenumber", ph);
            setTimeout(() => {
                openWin('http://127.0.0.1:5173/verify')
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        setLoading(true)
        getData()
    }

    const openWin = (url) => {
        window.open(url, '_self', "width=400px, height=900px");
    }

    return (
        <>
            {
                isOTPVerify ?
                    <div className='success'>
                        <div className="wrapper">
                            <div className="topsec" >
                                <img src={Img} alt="" className="img" />
                            </div >
                            <div className="midsec">
                                <p className='midTop'>Welcome to  AdmitKard</p>
                                <div className="midBottom">
                                    <p>
                                        In order to provide you with
                                        a custom experience,
                                    </p>
                                    <span>we need to ask you a few questions.</span>
                                </div>
                            </div>
                            <div className="bottomsec">
                                <button className='btn'>
                                    Get Started
                                </button>
                                <span>*This will only take 5 min.</span>
                            </div>
                        </div >
                    </div>
                    :
                    <div className='sign_in'>
                        <ToastContainer />
                        < div className="wrapper" >
                            <div className="topsec">
                                <img src={Logo} alt="" className="logo" />
                            </div>
                            <div className="midsec">
                                <div className="midTop">
                                    <p>Welcome Back</p>
                                    <span>Please sign in to your account</span>
                                </div>
                                <div className="midBottom">
                                    <PhoneInput
                                        country={"in"}
                                        value={ph}
                                        onChange={setPh}
                                        inputStyle={{ color: 'black', border: "none", outline: "none", height: "45px" }}
                                        specialLabel="Enter Contact Number"
                                    />
                                    <p>We will send you a one time SMS message.
                                        Charges may apply.</p>
                                </div>
                            </div>
                            <div className="bottomsec">
                                <button className='btn' onClick={handleClick}>
                                    {
                                        loading && <FaSpinner className='icon' size={20} />
                                    }
                                    sign in with OTP
                                </button>
                            </div>
                        </ div >

                    </div>

            }
        </>


    )
}

export default SendOTP



