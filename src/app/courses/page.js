import Image from 'next/image'
import React from 'react'
import bg from "../../Assets/header/imgbg.png"
const CoursesPage = () => {
  return (
    <div>

        <div className='bg h-72 flex flex-col justify-center items-center text-white'>
            <h1 className='text-4xl font-bold'>All of our online courses</h1>
            <p className=' mt-3'>Choose the course of your choice and become self-reliant by acquiring skills.</p>
        </div>




        <div className='flex'>
            <div className='w-3/12'>
            <div>
                <h3>Course Type</h3>

                <div>
                    <div className='flex gap-2 items-center'>
                        <input type='checkbox'></input>
                        <p>Development</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='w-9/12 border-4 flex-1'>dddd</div>
        </div>
    </div>
  )
}

export default CoursesPage