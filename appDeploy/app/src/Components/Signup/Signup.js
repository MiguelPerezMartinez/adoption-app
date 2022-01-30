import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

//Services
import { registerWithEmailAndPassword } from '../../services/firebase'

export default function Signup({ handleSection }) {
  const navigate = useNavigate()
  const [signupData, setsignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setsignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (signupData.password !== signupData.confirmPassword)
      return console.log('error')
    else
      registerWithEmailAndPassword(
        signupData.username,
        signupData.email,
        signupData.password
      ).then(navigate('/search'))
  }

  return (
    <div className="login-container">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          handleChange={handleChange}
        />
        <Input
          type="email"
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
        <Input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          handleChange={handleChange}
        />
        <Button value="Sign Up" type="submit" />
      </form>
      <p>or</p>
      <Button value="Sign In" handleSection={handleSection} />
    </div>
  )
}
