import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

export default function Signin({ handleSection }) {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth)
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/search')
  }, [user, loading])

  const handleChange = (e) => {
    setSigninData({
      ...signinData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    logInWithEmailAndPassword(signinData.email, signinData.password)
  }

  return (
    <div className="login-container">
      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          handleChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          handleChange={handleChange}
        />
        <Button value="Sign In" handleSection={handleSubmit} />
        <button className="send-button" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </form>
      <p>or</p>
      <Button value="Sign Up" handleSection={handleSection} />
    </div>
  )
}
