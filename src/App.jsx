import React, { useState } from 'react'; // Import useState for the mobile menu
import homepic from './assets/homepic.jpg';
import workshopfullpic from './assets/workshopfullpic.jpeg';
import { motion } from 'framer-motion';
import Slideshow from './components/Slideshow.jsx';

const App = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* --- RESPONSIVE NAVBAR --- */}
      <nav className='bg-blue-800 p-4 flex items-center justify-between relative'>
        {/* Logo/Home Button */}
        <div>
          <a href='#about'>
            <img src={homepic} className='h-12 w-auto' alt="homebutton" /> {/* Use height for sizing */}
          </a>
        </div>

        {/* Desktop Menu - Hidden on mobile */}
        <div className='hidden md:flex flex-row justify-end gap-8 mt-0 items-center'>
          <a href="#about" className='transition-all duration-150 ease-in-out text-white text-xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>About</a>
          <a href="#works" className='transition-all duration-150 ease-in-out text-white text-xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Works</a>
          <a href="#location" className='transition-all duration-150 ease-in-out text-white text-xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Location</a>
          <a href="#contact" className='transition-all duration-150 ease-in-out text-white text-xl hover:bg-white hover:rounded-xl hover:text-black px-3 py-2'>Contact</a>
        </div>

        {/* Hamburger Menu Button - Hidden on desktop */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Appears when isMenuOpen is true */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-blue-800 flex flex-col items-center gap-4 py-4'>
            <a href="#about" className='text-white text-xl px-3 py-2' onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#works" className='text-white text-xl px-3 py-2' onClick={() => setIsMenuOpen(false)}>Works</a>
            <a href="#location" className='text-white text-xl px-3 py-2' onClick={() => setIsMenuOpen(false)}>Location</a>
            <a href="#contact" className='text-white text-xl px-3 py-2' onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* --- RESPONSIVE ABOUT SECTION --- */}
      {/* Stacks vertically on mobile (flex-col), row on medium screens and up (md:flex-row) */}
      <div className='flex flex-col md:flex-row p-4 mb-15 md:p-10 gap-8 items-center'>
        {/* Image takes full width on mobile, half on desktop */}
        <div className='w-full md:w-1/2'>
          <img src={workshopfullpic} alt="fullpic" className='w-full h-auto rounded-2xl border-black border-2' />
        </div>
        
        {/* Text takes full width on mobile, half on desktop */}
        <div className='w-full md:w-1/2'>
          <motion.h1 
            id="about"
            className="mb-5 text-center text-blue-800 font-bold text-4xl md:text-5xl" // Responsive font size
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            DiWAN AUTOMOBILES
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl" // Responsive font size
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            At DiWAN Automobiles, We maintain  your Heavy  Equipment and Commercial Vehicle moving with out any failure .   We are Specialists in Commercial Vehicle - RTO Fitness Testing works. Our Policy is bring your Unfitted Commercial Vehicle and Take to RTO Office for Fitness test. 
 Also we experts in   Body and Patch Works ,Mechanical Repair , Auto Electrical Works , Body - Fiber Works, Seat Upholstery Works, Painting , etc  for  Tipper , Torus, Trucks, Flat beds, Lorry’s , Tempo Traveller, Pick Ups  JCB, Tractor , Hitachi , etc. We minimize your downtime so you can maximize your business. Drive in with confidence and  Reliability
            <br/>
            The workshop is located in 3rd Mile Kappadu on the Kanjirappally-Erattupetta Road (State Highway). Its roadside location makes it easily accessible for all types of heavy vehicles.
          </motion.p>
        </div>
      </div>
      
      {/* --- RESPONSIVE WORKS SECTION --- */}
      <div className='mt-10 px-4' id="works">
        <motion.h2
          className="text-center text-blue-800 font-bold text-4xl md:text-5xl" // Responsive font size
          initial={{opacity:0, translateX: "-100%"}}
          whileInView={{opacity:1, translateX: 0}}
          transition={{duration: 2}}
        >
          Our Works :
        </motion.h2>
        <motion.div 
          initial={{opacity:0, translateX: "-100%"}}
          whileInView={{opacity:1, translateX: 0}}
          transition={{duration: 2}}
          className='max-w-[1000px] mx-auto mt-4'>
          <Slideshow />
        </motion.div>
      </div>
      
      {/* --- RESPONSIVE LOCATION SECTION --- */}
      <div className='mt-10 px-4'>
        <motion.div 
          id="location"
          initial={{opacity:0, rotateX: "90deg"}}
          whileInView={{opacity:1, rotateX:0}}
          transition={{duration: 2}}
          className="text-center text-blue-800 font-bold text-4xl md:text-5xl mb-4" // Responsive font size
        >
          Location
        </motion.div>
        <div className='mt-4 flex justify-center'>
            {/* Iframe is now responsive, taking full width with a max-width for desktop */}
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.972266742494!2d76.77762847443202!3d9.597656290488146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063575e79e1ed5%3A0xcd7b288cd2dab4a!2sDiWAN%20Automobiles!5e0!3m2!1sen!2sin!4v1754477270771!5m2!1sen!2sin" 
            className='border-black border-2 rounded-2xl w-full max-w-[1000px] h-[300px] md:h-[550px]' allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </div>
      
      {/* --- RESPONSIVE CONTACT SECTION --- */}
      <div className='my-10 px-4'>
        <motion.h2 
          id="contact"
          initial={{opacity:0, rotateX: "90deg"}}
          whileInView={{opacity:1, rotateX:0}}
          transition={{duration: 2}}
          className="text-center text-blue-800 font-bold text-4xl md:text-5xl mt-10" // Responsive font size
        >
          Contact
        </motion.h2>
        <motion.div 
          initial={{opacity:0, rotateX: "90deg"}}
          whileInView={{opacity:1, rotateX:0}}
          transition={{duration: 2}}
          className="text-center text-lg md:text-xl mt-5 mb-10" // Responsive font size
        >
          Phone :   7025034342
          <br />
          Email : diwanautomobileskappadu@gmail.com
        </motion.div>
      </div>
    </div>
  )
}

export default App;