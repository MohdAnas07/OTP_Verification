import { useState } from 'react'
import SignIn from './components/SignIn'
import Otp from './components/Otp'
import Success from './components/Success'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [showOTP, setShowOTP] = useState(false);
  const [isOTPVerify, setIsOTPVerify] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="verify" element={<Otp setIsOTPVerify />} />
        <Route path="/" element={<Success />} />
      </Routes>
    </div>
  )
}

export default App
