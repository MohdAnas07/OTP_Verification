import { useState } from 'react'
import SignIn from './components/SignIn'
import Otp from './components/Otp'
import Success from './components/Success'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [showOTP, setShowOTP] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route path="signin" element={<SignIn />} />
      </Routes>
      {/* <Success /> */}

    </div>
  )
}

export default App
