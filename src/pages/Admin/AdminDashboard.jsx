import React from 'react'
import { useNavigate } from 'react-router'
import SalaryOverview from '../../components/Admin/SalaryOverview'

const AdminDashboard = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 h-240 w-260 absolute top-4 left-75 rounded-[1vw] font-roboto-mono'>
      <div className='bg-white w-128 h-60 absolute top-17 right-20 rounded'>
        <SalaryOverview/>
      </div>
      <input type="text" placeholder='Search Employee' className='bg-white pr-5 mt-4 rounded ml-10 pl-2 pr-40 py-1 ' />

        <button className='text-sm p-2 rounded ml-[55rem] mt-70 font-bold bg-white cursor-pointer' onClick={()=>navigate("/addForm")}>Add Employees</button> 

    <div>
      <p className='text-2xl font-bold absolute top-[20.5rem] left-10'>Employee Data</p>
    </div>

    </div>
  )
}

export default AdminDashboard



