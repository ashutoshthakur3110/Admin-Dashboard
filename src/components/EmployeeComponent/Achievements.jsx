import React from 'react'

const Achievements = () => {
    return (
        <div className='bg-white h-70 w-70 ml-180 mt-10 rounded-[1vw] shadow-sm'>
            <p className='font-bold text-xl pl-4 pt-4'>Achievements</p>
            <div className='w-8 ml-4 mt-5'>
                <img src="https://i.pinimg.com/736x/68/a7/6f/68a76fe44eda237d0a50d80d62a3b45e.jpg" alt="" />
                <br />
                <img src="https://i.pinimg.com/736x/57/fb/23/57fb2301cd1ec4769ea04791ffc11720.jpg" alt="" />
                <br />
                <img src="https://i.pinimg.com/736x/6d/a1/12/6da112f0d32998a9f18469b0f0a6b929.jpg" alt="" />
            </div>
            <div>
                <div className="absolute top-21 right-19 w-50 flex flex-col gap-3 p-4 rounded-lg text-sm font-medium">
                <div>
                    <p className="mb-1 text-gray-700">Leadership</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full w-[45%]"></div>
                    </div>
                </div>
            </div>
             <div className="absolute top-39 right-19 w-50 flex flex-col gap-3 p-4 rounded-lg text-sm font-medium">
                <div>
                    <p className="mb-1 text-gray-700">Skill Builder</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-[75%]"></div>
                    </div>
                </div>
            </div>
            <div className="absolute top-57 right-19 w-50 flex flex-col gap-3 p-4 rounded-lg text-sm font-medium">
                <div>
                    <p className="mb-1 text-gray-700">Communicator</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-[75%]"></div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Achievements