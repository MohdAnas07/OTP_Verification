import React from 'react'
import '../style/success.scss';
import Img from '../assets/Artboard.png';

const Success = () => {
    return (
        <div className='success'>
            <div className="wrapper">
                <div className="topsec">
                    <img src={Img} alt="" className="img" />
                </div>
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
            </div>

        </div>)
}

export default Success