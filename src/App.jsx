import { useState } from 'react'
import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1 className="text-4xl">To Do List</h1>
      <div className='bg-gray-700 text-white rounded max-w-[600px] m-auto'>
        <Header/>
        <Day/>
        <Form/>
        <ListTasks/>
      </div>
    </main>
  )
}

export default App
