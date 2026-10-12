import React from 'react'
import Achievements from '../../components/EmployeeComponent/Achievements.jsx'
import StatusOverview from '../../components/EmployeeComponent/StatusOverview.jsx'
import EmployeeDetails from '../../components/EmployeeComponent/EmployeeDetails.jsx'

const EmployeeDashboard = () => {
  return (
    <div className='bg-gray-100 h-190 w-260 absolute top-4 left-75 rounded-[1vw] font-roboto-mono'>
      <Achievements/>
      <StatusOverview/>
      <EmployeeDetails/>
    </div>
  )
}

export default EmployeeDashboard