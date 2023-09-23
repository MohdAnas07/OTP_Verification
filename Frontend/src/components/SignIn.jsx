import React, { useState } from 'react'
import '../style/signIn.scss';
import Logo from '../assets/AK_logo.png'
import PhoneInput from "react-phone-input-2";

import 'react-phone-input-2/lib/material.css'

const SignIn = () => {

    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false)

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
                            inputStyle={{ color: 'black', border: "1px solid #F7B348", outline: "none", height: "50px" }}
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