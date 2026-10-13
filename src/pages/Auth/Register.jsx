import React, { useState, useContext } from 'react'
import { UserPlus, User, Mail, Phone, LockKeyhole, Eye, EyeOff } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router'

const Register = () => {
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(
    { name: "",
      email: "",
      phone: "",
      password: "",
      passwordLength: "" })
  
  const { user, setUser } = auth

  function handlePassword() {
    setShowPassword(!showPassword)
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newError = {
       name: "",
       email: "",
       phone: "",
       password: "",
       passwordLength: "" }
    let hasError = false

    if (!user.name || user.name.trim() === "") {
      newError.name = "Name is required"
      hasError = true
    } else if (!/^[A-Za-z ]+$/.test(user.name)) {
      newError.name = "Name should contain only letters"
      hasError = true
    }

    if (!user.email || user.email.trim() === "") {
      newError.email = "Email is required"
      hasError = true
    }

    if (!user.phone || user.phone.trim() === "") {
      newError.phone = "Phone number is required"
      hasError = true
    }

    if (!user.password || user.password.trim() === "") {
      newError.password = "Password is required"
      hasError = true
    } else if (user.password.length <= 5) {
      newError.passwordLength = "Password must contain more than 5 characters"
      hasError = true
    }

    setError(newError)
    if (hasError) return

    alert("Registration successful")
    navigate("/login")
  }

  const inputStyle = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-100'
  const labelStyle = 'mb-2 mt-5 block text-sm font-semibold text-gray-700'

  return (
    <div className="min-h-screen bg-gray-100 absolute right-1 top-1 px-30 py-10">
      <div className="w-full max-w-xl">
        <div className="mb-8 px-9">
          <h1 className="text-2xl font-bold text-gray-900 text-center"> 
            Welcome to Admin Dashboard 
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-7 border-b border-gray-100 pb-5">
            <h2 className="text-lg font-bold text-gray-900"> Register Here </h2>
          </div>

          <div className="mb-4">

            <div>
              <label className={labelStyle}>Full Name</label>
              <input 
                className={inputStyle} 
                type="text" 
                value={user.name || ''} 
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value })
                  setError({ ...error, name: "" })
                }} 
                placeholder="Enter full name" 
              />
              {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
            </div>


            <div>
              <label className={labelStyle}>Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={17} />
                <input 
                  className={`${inputStyle} pl-10`} 
                  type="email" 
                  value={user.email || ''} 
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value })
                    setError({ ...error, email: "" })
                  }} 
                  placeholder="employee@example.com" 
                />
              </div>
              {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
            </div>

            <div>
              <label className={labelStyle}>Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-gray-400" size={17} />
                <input 
                  className={`${inputStyle} pl-10`} 
                  type="tel" 
                  value={user.phone || ''} 
                  onChange={(e) => {
                    setUser({ ...user, phone: e.target.value })
                    setError({ ...error, phone: "" })
                  }} 
                  placeholder="Enter phone number" 
                />
              </div>
              {error.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}
            </div>

            <div>
              <label className={labelStyle}>Password</label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3.5 text-gray-400" size={17} />
                <input 
                  className={`${inputStyle} pl-10 pr-12`} 
                  type={showPassword ? "text" : "password"} 
                  value={user.password || ''} 
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                    setError({ ...error, password: "", passwordLength: "" })
                  }} 
                  placeholder="Enter Password" 
                />
                <button 
                  type="button" 
                  onClick={handlePassword} 
                  className='absolute right-3 top-3.5 text-gray-400 hover:text-gray-600'
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
              {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
              {error.passwordLength && <p className="text-red-500 text-sm mt-1">{error.passwordLength}</p>}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <button 
              type="submit" 
              className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white w-full hover:bg-gray-800 transition"
            >
              <UserPlus size={18} /> Register
            </button>
            
            <p className='text-sm font-medium text-gray-600 text-center'>
              Already have an account? 
              <button type="button" onClick={() => navigate('/login')} className='ml-1 font-bold text-black underline'>
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
