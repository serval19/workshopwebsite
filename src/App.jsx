import React from 'react'
import homepic from './assets/homepic.jpg'
import workshopfullpic from './assets/workshopfullpic.jpeg'

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
        <div className='ml-10 mt-10'><img src={workshopfullpic} alt="fullpic" className='w-[700px] h-[525px] rounded-2xl border-black border-2' /></div>
        <div className='ml-10 mt-10 text-2xl max-w-[600px] mr-5'>
          <h1 className='mb-5 text-center text-blue-800 font-bold text-5xl'>DiWAN AUTOMOBILES</h1>
          <p>
            workshop description diwan automobiles.
          hello hi diwan automobiles is located in near kappadu in anakkal. It does all types of
          trucks and other works including body works, painting, oil change,
          body repair etc. the owner has 25 years of experience in the gulf.
          </p>
          
        
        </div>
      </div>

    </div>
  )
}

export default App