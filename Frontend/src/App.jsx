import { useEffect, useState } from 'react'
import Otp from './components/Otp'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SendOTP from './components/SendOTP';

function App() {

  const [isOTPVerify, setIsOTPVerify] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    console.log(isOTPVerify);
  }, [isOTPVerify])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SendOTP isOTPVerify={isOTPVerify} />} />
        <Route path="verify" element={<Otp setIsOTPVerify={setIsOTPVerify} isOTPVerify={isOTPVerify} />} />
      </Routes>
    </div>
  )
}

export default App
