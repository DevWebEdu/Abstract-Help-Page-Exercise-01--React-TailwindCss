import React from 'react'

export const CallToAction = () => {
    return (
        <div className='bg-purple-300  '>
            <div
                className="container mx-auto flex flex-col items-center  justify-center"
                style={{ height: '500px' }}>
                <h1
                    className='py-20 font-light lg:text-8xl md:text-6xl text-5xl tracking-tighter text-center'>
                    How can we help?
                </h1>
                <form className='flex wrap relative '  style={{width:'90%'}}  >
                    <input type="text"
                             className=' border-2 rounded-lg bg-white  border-black outline-none py-5 px-6  text-2xl relative'
                             style={{width:'100%'}} 
                             placeholder='Search'
                             />
                    <box-icon 
                            style={{height:'100%', cursor:'pointer', position:'absolute', right:0,paddingRight:'10px' }}
                            name='right-arrow-alt'
                            size='lg'
                            color='black'
                            type='regular'
                        >
                    </box-icon>
                </form>
            </div>
        </div>
    )
}
