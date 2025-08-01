import React from 'react'
import homepic from './assets/homepic.jpg'
import workshopfullpic from './assets/workshopfullpic.jpg'

const App = () => {
  return (
    <div >
      <nav className='bg-blue-800 pt-4 pb-4 max-h-30 flex items-center flex-row justify-between'>
        <div><a href=''><img src={homepic} className='ml-5' alt="homebutton" /></a></div>
        <div className='flex flex-row justify-end gap-10 mt-0'>
          
          <a href="" className='transition-all duration-150 ease-in-out text-white text-2xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>About    </a>
          <a href="" className='transition-all duration-150 ease-in-out text-white text-2xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Works    </a>
          <a href="" className='transition-all duration-150 ease-in-out text-white text-2xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Location    </a>
          <a href="" className='transition-all duration-150 ease-in-out text-white text-2xl mr-10 hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Contact    </a>
        </div>
        
      </nav>
      <div className='flex flex-row'>
        <div><img src={workshopfullpic} alt="fullpic" /></div>
      </div>

    </div>
  )
}

export default App