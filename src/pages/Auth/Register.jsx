import React, { useState } from 'react'
import { UserPlus, User, Building2, IndianRupee, BriefcaseBusiness, Mail, Phone, LockKeyhole } from 'lucide-react'

const Register = () => {
  const inputStyle =
    'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-100'

  const labelStyle = 'mb-2 mt-5  block text-sm font-semibold text-gray-700'

  return (
    <div className="min-h-screen bg-gray-100 absolute right-1 top-1 px-30 py-10">
      <div>

        <div className="mb-8 mx-13">

          <div>
            <h1 className="text-2xl font-bold text-gray-900 text-center ">
              Welcome to Admin Dashboard
            </h1>
          </div>
        </div>

        <form
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="mb-7 border-b border-gray-100 pb-5">
            <h2 className="text-lg font-bold text-gray-900">
              Register Here
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-gray-800">
              <User size={18} />
              Personal Details
            </h3>

            <div className="">

              <div>
                <label className={labelStyle}>Full Name</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="email"
                    name="email"
                    placeholder="employee@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    pattern="[0-9]{6}"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Password</label>
                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="password"
                    name="phone"
                    placeholder="Enter Password"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse border-t border-gray-100  ">

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              <UserPlus size={18} />
              Register
            </button>
          </div>
          <div>
            <p className='text-sm font-bold text-gray-900 mt-6 ml-22'>
              Already have an account?? <button className='ml-3'>Sign In</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register