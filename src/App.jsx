import React from 'react'
import homepic from './assets/homepic.jpg'

const App = () => {
  return (
    <div >
      <nav className='bg-blue-800 pt-4 pb-4 max-h-30 flex items-center flex-row justify-between'>
        <div><a href=''><img src={homepic} className='ml-5' alt="homebutton" /></a></div>
        <div className='flex flex-row justify-end gap-20 mt-0'>
          
          <a href="" className='text-white text-2xl'>About    </a>
          <a href="" className='text-white text-2xl'>Works    </a>
          <a href="" className='text-white text-2xl'>Location    </a>
          <a href="" className='text-white text-2xl pr-10'>Contact    </a>
        </div>
        
      </nav>

    </div>
  )
}

export default App