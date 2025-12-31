import { useState } from 'react'

function App({username}) {

  const [color,setColor] = useState('Black')

  const isLightBackground = color === 'white' || color === 'yellow';

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className={`flex fixed flex-wrap inset-x-0 inset-y-96 justify-center ${isLightBackground ? 'text-black':'text-white'} `}>
          <h1 className='text-5xl capitalize font-semibold' >bg-Changer by {username}</h1>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-4xl bg-white'>
          <button className='outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-red-400 hover:bg-red-800 cursor-pointer' onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-sky-400 hover:bg-blue-800 cursor-pointer' onClick={()=>setColor('blue')}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-green-400 hover:bg-green-700 cursor-pointer' onClick={()=>setColor('green')}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full bg-yellow-400 text-white shadow-yellow-400 hover:bg-yellow-800 cursor-pointer' onClick={()=>setColor('yellow')}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full bg-black text-white  hover:bg-gray-700 cursor-pointer' onClick={()=>setColor('black')}>Black</button>
          <button className='border px-4 py-1 rounded-full bg-white text-black shadow-gray-400 hover:bg-gray-200 cursor-pointer' onClick={()=>setColor('white')}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
