import React from 'react'

const Register = () => {
  return (
    <div className='bg-gray-100 h-156 w-190 absolute right-1 top-1'>
      <form action="" className='bg-white relative w-120 h-110 left-40 top-20 rounded-[1vw] shadow-md pl-10 pt-4'>
        <p className='text-center text-xl font-bold pb-10'>Welcome to Admin Dashboard</p>
        <input type="text" placeholder='Enter your name' className='mb-4 p-1 pr-40' />
        <br />
        <input type="text" placeholder='Enter your name' className='mb-4 p-1 pr-40' />
        <br />
        <input type="text" placeholder='Enter your name' className='mb-4 p-1 pr-40' />
        <br />
        <input type="text" placeholder='Enter your name' className='mb-4 p-1 pr-40' />
        <br />
        <button>Register </button>
        <p>Already Registered ? <button>Sign In</button></p>
      </form>
    </div>
  )
}

export default Register