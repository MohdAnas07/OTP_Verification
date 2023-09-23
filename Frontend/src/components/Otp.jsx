import React, { useState } from 'react'
import '../style/otp.scss';
import Artboard from '../assets/otp_confirmed.png'
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa'

const Otp = () => {

    const [OTP, setOTP] = useState("");
    const [loading, setLoading] = useState(false)

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
                            <p>An OTP is sent to <span>+917896781234</span></p>
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
                    <button className='btn'>
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