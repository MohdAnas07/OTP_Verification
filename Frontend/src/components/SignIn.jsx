import React, { useEffect, useState } from 'react'
import '../style/signIn.scss';
import Logo from '../assets/AK_logo.png'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {

    const [ph, setPh] = useState("");

    useEffect(() => {
        console.log(ph);
    }, [ph])


    const getData = async () => {
        try {
            const response = await axios.post(`http://localhost:8000/api/user/login`, {
                phonenumber: ph
            })
            console.log(response.data);
            toast.success('OTP send Successfully')
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        console.log(ph);
        getData()

    }



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
                    <button className='btn' onClick={handleClick}>
                        sign in with OTP
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SignIn