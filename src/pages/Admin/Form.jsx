import React, { useState } from 'react'
import { UserPlus, User, Building2, IndianRupee, BriefcaseBusiness, Mail, Phone, CalendarDays } from 'lucide-react'

const Form = () => {

  const inputStyle =
    'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-black focus:bg-white focus:ring-2 focus:ring-gray-100'

  const labelStyle = 'mb-2 block text-sm font-semibold text-gray-700'

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-2xl bg-black p-3 text-white">
            <UserPlus size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Add New Employee
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Enter employee information to create a new record.
            </p>
          </div>
        </div>

        <form
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
        >
          <div className="mb-7 border-b border-gray-100 pb-5">
            <h2 className="text-lg font-bold text-gray-900">
              Employee Information
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Fields marked with * are required.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-gray-800">
              <User size={18} />
              Personal Details
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className={labelStyle}>Full Name *</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Email Address *</label>
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
                <label className={labelStyle}>Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Joining Date *</label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="date"
                    name="joiningDate"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-gray-800">
              <BriefcaseBusiness size={18} />
              Job Details
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className={labelStyle}>Department *</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <select
                    className={`${inputStyle} pl-10`}
                    name="department"
                    required
                  >
                    <option value="">Select department</option>
                    <option>Development</option>
                    <option>Human Resources</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelStyle}>Designation *</label>
                <input
                  className={inputStyle}
                  type="text"
                  name="designation"
                  placeholder="e.g. Software Developer"
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Monthly Salary (₹) *</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-3.5 text-gray-400" size={17} />
                  <input
                    className={`${inputStyle} pl-10`}
                    type="number"
                    name="salary"
                    placeholder="Enter monthly salary"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Experience (Years) *</label>
                <input
                  className={inputStyle}
                  type="number"
                  name="experience"
                  placeholder="e.g. 2"
                  min="0"
                  max="60"
                  step="0.5"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Reset Form
            </button>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
            >
              <UserPlus size={18} />
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form