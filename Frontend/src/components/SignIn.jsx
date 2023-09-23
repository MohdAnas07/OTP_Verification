import React, { useState } from 'react'
import '../style/signIn.scss';
import Logo from '../assets/AK_logo.png'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import { Link } from 'react-router-dom';

const SignIn = () => {

    const [ph, setPh] = useState("");

    return (
        <section className='sign_in'>

            <div className="wrapper">
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
                    <button className='btn'>
                        sign in with OTP
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SignIn