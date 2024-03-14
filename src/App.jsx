import React from 'react'
import Tag from './components/Tag'
import Random from './components/Random'

function App() {
  return (
    <div className='h-full w-full pt-4 flex flex-col background'>
      <h1 className='rounded-xl text-3xl font-bold  bg-white text-center py-3 m-3'>Random GIF's</h1>
      <div className='flex flex-col gap-4 justify-center items-center mt-6'>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  )
}

export default App