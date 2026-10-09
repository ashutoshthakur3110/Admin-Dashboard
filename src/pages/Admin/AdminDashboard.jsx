import React from 'react'
import SalaryOverview from '../../components/Admin/SalaryOverview.jsx'
import EmployeeData from '../../components/Admin/EmployeeData.jsx'
import ShowData from '../../components/Admin/ShowData.jsx'

const AdminDashboard = () => {
  return (
    <div className='bg-gray-100 h-200 w-260 absolute top-4 left-75 rounded-[1vw] font-roboto-mono'>
      <div className='bg-white w-128 h-60 absolute top-17 right-20 rounded'>
        <SalaryOverview/>
      </div>
      <input type="text" placeholder='Search Employee' className='bg-white pr-5 mt-4 rounded ml-10 pl-2 pr-40 py-1 ' />
      <div>
        <EmployeeData/>
        <ShowData/>
      </div>

    </div>
  )
}

export default AdminDashboard



