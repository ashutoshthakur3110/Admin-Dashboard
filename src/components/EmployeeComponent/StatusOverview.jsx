import React from 'react'

const StatusOverview = () => {
    const totalCircumference = 251.2;

    return (
        <div className='bg-white h-70 w-160 absolute top-10 left-9 rounded-[1vw] p-4 shadow-sm'>
            <p className='font-bold text-xl pl-4 pt-4 text-slate-800'>Grow Status Overview</p>

            <div className="absolute flex items-center justify-center w-50 h-50 rounded-full mt-2 mx-auto left-8 ">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">


                    <circle
                        cx="50" cy="50" r="40"
                        stroke="#4ade80" strokeWidth="4" strokeLinecap="round" fill="transparent"
                        strokeDasharray={totalCircumference}
                        strokeDashoffset={totalCircumference - 53}
                    />

                    <circle
                        cx="50" cy="50" r="40"
                        stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="transparent"
                        strokeDasharray={totalCircumference}
                        strokeDashoffset={totalCircumference - 43}
                        style={{ transform: `rotate(${(60 / totalCircumference) * 360}deg)`, transformOrigin: 'center' }}
                    />

                    <circle
                        cx="50" cy="50" r="40"
                        stroke="#c084fc" strokeWidth="4" strokeLinecap="round" fill="transparent"
                        strokeDasharray={totalCircumference}
                        strokeDashoffset={totalCircumference - 33}
                        style={{ transform: `rotate(${((60 + 50) / totalCircumference) * 360}deg)`, transformOrigin: 'center' }}
                    />

                    <circle
                        cx="50" cy="50" r="40"
                        stroke="#fbcfe8" strokeWidth="4" strokeLinecap="round" fill="transparent"
                        strokeDasharray={totalCircumference}
                        strokeDashoffset={totalCircumference - 23}
                        style={{ transform: `rotate(${((60 + 50 + 40) / totalCircumference) * 360}deg)`, transformOrigin: 'center' }}
                    />

                    <circle
                        cx="50" cy="50" r="40"
                        stroke="#f87171" strokeWidth="4" strokeLinecap="round" fill="transparent"
                        strokeDasharray={totalCircumference}
                        strokeDashoffset={totalCircumference - 63}
                        style={{ transform: `rotate(${((60 + 50 + 40 + 30) / totalCircumference) * 360}deg)`, transformOrigin: 'center' }}
                    />
                </svg>

                <div className="absolute text-center">
                    <span className="text-xl font-bold text-black block tracking-wide">257</span>
                    <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Yearly Commits</span>
                </div>
            </div>

            <div className='absolute right-60 top-19'>
                <div className='bg-[#4ade80] h-1 w-3 px-2 py-1 rounded mb-7'></div>
                <div className='bg-[#3b82f6] h-1 w-3 px-2 py-1 rounded mb-7'></div>
                <div className='bg-[#c084fc] h-1 w-3 px-2 py-1 rounded mb-7'></div>
                <div className='bg-[#fbcfe8] h-1 w-3 px-2 py-1 rounded mb-7'></div>
                <div className='bg-[#f87171] h-1 w-3 px-2 py-1 rounded mb-7'></div>
            </div>


            <div className='ml-100 text-sm '>
                <p className='pb-2 pt-2'>New Commits</p>
                <p className='pb-2 pt-2'>Changes</p>
                <p className='pb-2 pt-2'>Total Progress (X / 250)</p>
                <p className='pb-2 pt-2'>Current Tier (Color Phase)</p>
                <p className='pb-2 pt-2'>Remaining to Goal</p>
            </div>


        </div>




    )
}

export default StatusOverview
