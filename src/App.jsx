import React from 'react'
import homepic from './assets/homepic.jpg'
import workshopfullpic from './assets/workshopfullpic.jpeg'
import { motion } from 'framer-motion'
import Slideshow from './components/Slideshow.jsx'
const App = () => {
  return (
    <div >
      <nav className='bg-blue-800 pt-4 pb-4 max-h-30 flex items-center flex-row justify-between'>
        <div><a href='#about'><img src={homepic} className='ml-5' alt="homebutton" /></a></div>
        <div className='flex flex-row justify-end gap-10 mt-0'>
          
          <a href="#about" className='transition-all duration-150 ease-in-out text-white text-2xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>About    </a>
          <a href="#works" className='transition-all duration-150 ease-in-out text-white text-2xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Works    </a>
          <a href="#location" className='transition-all duration-150 ease-in-out text-white text-2xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Location    </a>
          <a href="#contact" className='transition-all duration-150 ease-in-out text-white text-2xl mr-10 hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Contact    </a>
        </div>
        
      </nav>
      <div className='flex flex-row mb-30'>
        <div className='ml-10 mt-10'><img src={workshopfullpic} alt="fullpic" className='w-[700px] h-[525px] rounded-2xl border-black border-2' /></div>
        <div className='ml-10 mt-10 text-2xl max-w-[600px] mr-5'>
         
          <motion.h1 id="about"
          className="mb-5 text-center text-blue-800 font-bold text-5xl" // Add your Tailwind classes here
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
        DiWAN AUTOMOBILES
         </motion.h1>
          <motion.p
          className="text-2xl" // Example Tailwind classes for a paragraph
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          >
           At Diwan Automobiles, we keep your heavy machinery moving. 
           We are specialists in the complete service and repair of trucks, lorries, travellers, JCB, tractor etc. From expert painting and routine oil changes to ensuring your vehicles pass RTO fitness inspections, our skilled team handles it all. We minimize your downtime so you can maximize your business. Drive in with confidence, drive out with reliability.
           <br/>
           The workshop is located in 3rd Mile Kappadu in the Kanjirappally Erattupetta Road which is a state highway
           and since it is also located in the roadside, it is easily accessible for all types of heavy vehicles.
          </motion.p>
          
        
        </div>
      </div>
      
      <div className='mt-15' id="works">
        <motion.h2
          className=" text-center text-blue-800 font-bold text-5xl" // Add your Tailwind classes here
          initial={{opacity:0 , translateX: "-100%"}}
         whileInView={{opacity:1, translateX: 0}}
         transition={{duration: 2}}
        >
        Our Works :
         </motion.h2>
         <motion.div 
         initial={{opacity:0 , translateX: "-100%"}}
         whileInView={{opacity:1, translateX: 0}}
         transition={{duration: 2}}
         className='max-w-[1000px] mx-auto mt-0'>
          <Slideshow />
         </motion.div>
        
      </div>
      <motion.div id="location"
      initial={{opacity:0 , rotateX: "90deg"}}
      whileInView={{opacity:1, rotateX:0}}
      transition={{duration: 2}}
      className=" text-center text-blue-800 font-bold text-5xl">
        Location
      </motion.div>
      <div className='mt-10 flex justify-center'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d601.9242766516262!2d76.78044754118584!3d9.59755394136179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063575e79e1ed5%3A0xcd7b288cd2dab4a!2sDiWAN%20Automobiles!5e0!3m2!1sen!2sin!4v1754403030887!5m2!1sen!2sin" width="1000" height="550"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
         className='border-black border-2 rounded-2xl'></iframe>

      </div>
      <div>
      <motion.h2 id="contact"
      initial={{opacity:0 , rotateX: "90deg"}}
      whileInView={{opacity:1, rotateX:0}}
      transition={{duration: 2}}
      className=" text-center text-blue-800 font-bold text-5xl mt-10">
        Contact
      </motion.h2>
      <motion.div 
      initial={{opacity:0 , rotateX: "90deg"}}
      whileInView={{opacity:1, rotateX:0}}
      transition={{duration: 2}}
      className=" text-center text-2xl mt-5 mb-15">
        Phone :   7025034342, 8647509422
        <br />
        Email : diwanautomobileskappadu@gmail.com
      </motion.div>

      </div>
     
    </div>
  )
}

export default App