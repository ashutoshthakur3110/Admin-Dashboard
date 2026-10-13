import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserPlus, Mail, LockKeyhole } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext)
  const { user } = auth

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
    loginErr: ""
  })

  function handleSubmit(event) {
    event.preventDefault()
    let newError = {
      emailErr: "",
      passwordErr: "",
      loginErr: ""
    }
    let hasError = false

    if (loginData.email.trim() === "") {
      newError.emailErr = "Email is required"
      hasError = true
    }

    if (loginData.password.trim() === "") {
      newError.passwordErr = "Password is required"
      hasError = true
    }

    if (hasError) {
      setError(newError)
      return
    }

    if (loginData.email !== user.email || loginData.password !== user.password) {
      newError.loginErr = "Invalid email or password"
      setError(newError)
      return
    }

    setError(newError)
    alert("Login successful")
  }

  const inputStyle = 'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-100'
  const labelStyle = 'mb-2 mt-5 block text-sm font-semibold text-gray-700'

  return (
    <div className="min-h-screen bg-gray-100 absolute right-1 top-1 px-30 py-10">
      <div>
        <div className="mb-8 mx-13">
          <h1 className="text-2xl font-bold text-gray-900 text-center ">
            Welcome to Admin Dashboard
          </h1>
        </div>

        <form className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" onSubmit={handleSubmit}>
          <div className="mb-7 border-b border-gray-100 pb-5">
            <h2 className="text-lg font-bold text-gray-900"> Login Here </h2>
          </div>

          {error.loginErr && (
            <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-500 font-medium text-center">
              {error.loginErr}
            </div>
          )}

          <div className="mb-8">
            <div>
              <div>
                <label className={labelStyle}>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="email"
                    value={loginData.email}
                    onChange={(e) => {
                      setLoginData({
                        ...loginData,
                        email: e.target.value
                      })
                      setError({
                        ...error,
                        emailErr: "", loginErr: ""
                      })
                    }}
                    placeholder="employee@example.com"
                  />
                  <p className='text-red-500 text-sm mt-1'> {error.emailErr}
                  </p>
                </div>
              </div>

              <div>
                <label className={labelStyle}>Password</label>
                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="password"
                    value={loginData.password}
                    onChange={(e) => {
                      setLoginData({
                        ...loginData,
                        password: e.target.value
                      })
                      setError({
                        ...error,
                        passwordErr: "",
                        loginErr: ""
                      })
                    }}
                    placeholder="Enter Password"
                  />
                  <p className='text-red-500 text-sm mt-1'> {error.passwordErr} </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse border-t border-gray-100 pt-5">
            <button type="submit" className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white">
              <UserPlus size={18} /> Login
            </button>
          </div>

          <div>
            <p className='text-sm font-bold text-gray-900 mt-6 text-center'>
              Didn't have an account??
              <button type="button" className='ml-3 underline' onClick={() => navigate('/')}>
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
