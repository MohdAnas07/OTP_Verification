import React, { useState } from 'react'
import '../style/otp.scss';
import Artboard from '../assets/otp_confirmed.png'
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link, useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa'
import axios from 'axios';

const Otp = ({ setIsOTPVerify, isOTPVerify }) => {

    const [OTP, setOTP] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const phonenumber = localStorage.getItem("phonenumber");

    const getData = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/user/verify`, {
                "phonenumber": phonenumber,
                "otp": OTP
            })
            console.log(response.data);
            setLoading(false)
            setIsOTPVerify(true)
            console.log(isOTPVerify);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        setLoading(true)
        getData()
        console.log(OTP);
    }

    return (
        <section className='otp'>
            <div className="wrapper">
                <div className="topsec">
                    <img src={Artboard} alt="" className="logo" />
                </div>
                <div className="midsec">
                    <div className="midTop">
                        <p>Please verify Mobile number</p>
                        <div>
                            <p>An OTP is sent to <span>+{phonenumber}</span></p>
                            <Link to="/" className='link'>Change Phone Number</Link>
                        </div>
                    </div>
                    <div className="midBottom">
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                            className="otp-container"
                        />
                        {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                    </div>
                </div>
                <div className="bottomsec">
                    <div className='resend'>
                        <p>Didn’t receive the code?</p>
                        <Link to="" className='resendLink'>Resend</Link>
                    </div>
                    <button className='btn' onClick={handleClick}>
                        {
                            loading && <FaSpinner className='icon' size={20} />
                        }
                        Verify
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Otp