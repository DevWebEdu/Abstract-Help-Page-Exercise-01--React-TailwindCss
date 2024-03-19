import React from 'react'

export const Header = () => {
    return (
        <div className="  bg-black ">
            <div className='container mx-auto py-6 flex justify-between'>
                <div className='flex  '>
                    <div className='flex items-center'>
                        <box-icon type='solid' name='camera' color='white' size='md'></box-icon>
                        <span className=' font-medium text-white text-3xl inline-block pl-3'  >Abstract</span>
                    </div>
                    <div className='flex items-center'>
                        <span className=' text-white text-4xl inline-block pl-3' > | </span>
                        <span className=' font-thin text-white text-3xl inline-block pl-3'  >Help Center</span>
                    </div>
                </div>
                <div className='lg:flex hidden '>
                    <button className='border-white border-2   text-white text-3xl mx-4 px-6 bg-slate-800 rounded-md'>Submit a request </button>
                    <button className='border-none bg-indigo-700 text-white py-3 px-12 rounded-md text-3xl hover:bg-white  hover:text-black'>Sign in </button>
                </div>
            </div>
        </div>

    )
}
