import Text from './icons/Text'


const Form = () => {
  return (
    <section className='max-w-[450px] m-auto my-3 px-4'>
      <div className='border border-black rounded bg-gray-600 flex items-center p-2'>
        <span className='text-gray-400 mr-2'><Text/></span>
        <form className='w-full'>
          <input className='w-full bg-transparent'
          type="text"
          placeholder='Add a task...'>
          </input>
        </form>
      </div>
    </section>
    )
}


export default Form