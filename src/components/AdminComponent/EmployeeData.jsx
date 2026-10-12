import React from 'react'
import {useNavigate} from 'react-router'

const EmployeeData = () => {
    const navigate = useNavigate()
  return (
        <div className='bg-white mt-73 mx-6 pl-8 pt-5 rounded h-100 w-140'>
        <h1 className='text-2xl font-bold'>Employee Data</h1>
        <button className='font-bold absolute left-110 top-92 text-sm cursor-pointer' onClick={()=>{navigate('/addForm')}}>Add Employees</button>
        <p className='font-bold mt-40 ml-45'>
            No Data available
        </p>
 
    </div>
  )
}

export default EmployeeData