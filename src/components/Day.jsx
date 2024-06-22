import React from 'react'
import ArrowRight from './icons/ArrowRight'
import ArrowLeft from './icons/ArrowLeft'
import { getNameDay } from '../helpers/getNameDay'
import { getDate } from '../helpers/getDate'

const Day = ( {dateM, setDateM }) => {


  const addDays = (date) => {
    let addDate = new Date(dateM)
    addDate.setDate(date.getDate() + 1)
    return addDate;
  }

  const restDays = (date) => {
    let restDate = new Date(dateM)
    restDate.setDate(date.getDate() - 1)
    return restDate;
  }

  const handleRight = () => {
    //console.log('right');
    setDateM(addDays(dateM))
  }
  const handleLeft = () => {
    setDateM(restDays(dateM))
  }

  
  return (
    <section className='flex justify-center items-center gap-8 my-20 [&>p]:text-gray-400'>
      <p
      onClick={() => handleLeft()}
      className='cursor-pointer'>
        <ArrowLeft/>
      </p>
      <div className='w-[155px]'>
        <h4 className='text-4xl font-medium'>{getNameDay(dateM)}</h4>
        <p className='text-gray-400'>{getDate(dateM)}</p>
      </div>
      <p 
      onClick={() => handleRight()}
      className='cursor-pointer'>
        <ArrowRight/>
      </p>


    </section>
  

  )
}

export default Day