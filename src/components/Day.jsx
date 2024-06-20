import React from 'react'
import ArrowRight from './icons/ArrowRight'
import ArrowLeft from './icons/ArrowLeft'
const Day = () => {
  return (
    <section className='flex justify-center items-center gap-8 my-20 [&>p]:text-gray-400'>
      <p>
        <ArrowLeft/>
      </p>
      <div className='w-[155px]'>
        <h4 className='text-4xl font-medium'>Thursday</h4>
        <p className='text-gray-400'>Mar 23, 2023</p>
      </div>
      <p>
        <ArrowRight/>
      </p>


    </section>
  

  )
}

export default Day