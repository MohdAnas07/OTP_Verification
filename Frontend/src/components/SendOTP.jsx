import React, { useEffect, useState } from 'react'
import '../style/signIn.scss';
import '../style/success.scss';
import Logo from '../assets/AK_logo.png'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import Img from '../assets/Artboard.png';

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SendOTP = ({ isOTPVerify }) => {

    const [ph, setPh] = useState("");

    const getData = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/user/login`, {
                phonenumber: ph
            })
            console.log(response.data);
            toast.success('OTP send Successfully')
            localStorage.setItem("phonenumber", ph);
            openWin('http://127.0.0.1:5173/verify')

        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        console.log(ph);
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



