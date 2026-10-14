import React from 'react';
import { useNavigate } from 'react-router'; 
import SalaryOverview from '../../components/AdminComponent/SalaryOverview.jsx';
import ShowData from '../../components/AdminComponent/ShowData.jsx';
import { employeeData } from '../../data/EmployeeData.js';
import Names from '../../components/AdminComponent/Names.jsx';
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import { useState } from 'react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [filteredValue, setFilteredValue] = useState(employeeData)

const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const endIndex = currentPage * itemsPerPage;
  const firstIndex = endIndex - itemsPerPage;

  const currentItems = filteredValue.slice(
    firstIndex,
    endIndex,
  );

  const totalPages = Math.ceil(filteredValue.length / itemsPerPage);



  function handleSearch(){
    let filter = employeeData.filter((emp)=>emp.firstName.toLowerCase().includes(search.toLowerCase()));
    setFilteredValue(filter)

  }

  return (
    <div className='bg-gray-100 h-200 w-260 absolute top-4 left-75 rounded-[1vw] font-roboto-mono'>
      <div className='bg-white w-128 h-60 absolute top-17 right-20 rounded'>
        <SalaryOverview />
      </div>

      <input 
        type="text" 
        placeholder='Search Employee' 
        className='bg-white pr-5 mt-4 rounded ml-10 pl-2 pr-40 py-1'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} 
      />
      <button className='font-bold absolute left-100 top-4 rounded px-2 text-sm cursor-pointer p-1.5 bg-white' onClick={handleSearch} >Search</button>

        <div className='bg-white mt-73 mx-6 pl-8 pt-5 rounded h-100 w-140 overflow-y-auto'>
          <h1 className='text-2xl font-bold'>Employee Data</h1>
          
          <button 
            className='font-bold relative left-95 bottom-7 text-sm cursor-pointer' 
            onClick={() => { navigate('/addForm') }}
          >
            Add Employees
          </button>

          {currentItems && currentItems.length > 0 ? (
            currentItems.map((emp) => (
              <Names key={emp.employeeId} 
              empData={
                { name: emp.firstName,
                  id: emp.employeeId
                 }
              } />
            ))
          ) : (
            <p className='font-bold mt-40 ml-45'>No Data available</p>
          )}

          
        </div>
          <div className="w-60 h-10 bg-white text-gray-900 flex items-center justify-center gap-6 rounded-lg ml-45 mt-4 ">
            <p
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1} className='cursor-pointer'>
                Prev
            </p>
            <p>
              {currentPage} of {totalPages}
            </p>
            <p
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages} className='cursor-pointer'>
                Next
            </p>
          </div>
      <ShowData />
    </div>
  );
};

export default AdminDashboard;
