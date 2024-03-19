import React from 'react'
import { aboutData } from '../data/aboutData'

export const About = () => {

    return (
        <div className='container mx-auto py-20  grid lg:grid-cols-2 grid-cols-1 gap-4  my-20 '>

            {
                aboutData.map(({ img, tittle, description, link ,size }) => (
                    <div className=' flex m-10'>
                        <div className='flex flex-col  ' style={{ width: size }}>
                            <img className='w-full' src={img} alt="" />
                        </div>
                        <div className="flex flex-col ml-6">
                            <h4 className='text-left text-3xl font-bold  pb-5'>{tittle}</h4>
                            <p className='text-2xl text-gray-700 tracking-wide '>{description}</p>
                            <div className='flex mt-5'>
                                <a className='text-blue-800 font-light text-2xl '>{link}</a>
                            </div>
                        </div>
                    </div>
                ))
            }






        </div>
    )
}
