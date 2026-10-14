import React from 'react'
import {employeeData} from '../../data/EmployeeData.js'
import { IndianRupee } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext.jsx'
import { useContext } from 'react'

const EmployeeDetails = () => {
 const { auth } = useContext(AuthContext)
 const {user} = auth;
const empId = `EMPL-${Math.floor(100+Math.random()*900)
    .toString()
    .padStart(3,"0")
}`

const MonSal = `${Math.floor(10000+Math.random()*90000)
    .toString()
    .padStart(5,"0")
}`

    return (
        <div className='bg-white h-90 w-160 ml-9 mt-10 rounded-[1vw] shadow-sm'>
            <h2 className="text-xl font-bold text-gray-900 pt-6 pl-7">
                Hello, Ashutosh Thakur
            </h2>
            <div className='flex gap-2'>

                <div className='ml-10'>
                    <div className='bg-gray-100 rounded-[1vw] shadow-sm h-20 w-53 mb-2 mt-9'>
                        <p className='ml-22 pt-2 font-bold'>Role</p>
                        <p className='font-bold text-center'>{user.role}</p>
                    </div>

                    <div className='bg-gray-100 rounded-[1vw] shadow-sm h-20 w-53 mt-15'>
                        <p className='ml-17 pt-2 font-bold'>Company</p>
                        <p className='font-bold text-center'>{user.company}</p>
                    </div>
                </div>
                <div className='ml-30'>
                    <div className='bg-gray-100 rounded-[1vw] shadow-sm h-20 w-53 mb-2 mt-9'>
                        <p className='ml-15 pt-2 font-bold'>Employee ID</p>
                        <p className='font-bold text-center'>{empId}</p>
                    </div>
                    <div className='bg-gray-100 rounded-[1vw] shadow-sm h-20 w-53 mt-15'>
                        <p className='ml-13 pt-2 font-bold'>Monthly Salary</p>
                        <p className='font-bold text-center'><IndianRupee className='absolute bottom-29 right-135 size-5 '/>{MonSal}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails