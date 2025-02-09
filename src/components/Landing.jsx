import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6"; // Corrected import path and syntax

export const Landing = () => {
  return (
    <div data-scroll data-scroll-speed="-.8" className='w-full h-screen'>
      <div className="Text-structure mt-20 sm:mt-44 px-4 sm:px-20"> {/* Adjusted padding and margin for responsiveness */}
        {["we create", "eye-opening", "presentation"].map((item, index) => (
          <div key={index} className="Mask font-sans text-5xl sm:text-8xl text-white mb-4 sm:mb-8"> {/* Responsive text size */}
            <div className='w-fit flex items-center'>
              <motion.div 
                initial={{ width: index === 1 ? 0 : '9vw' }} 
                animate={{ width: '9vw' }}
                transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                className='w-[8vw] h-[5vw] bg-green-500 -mb-2 mr-2 rounded-lg'
                style={{ display: index === 1 ? 'block' : 'none' }}
              />
              <h1 className='uppercase text-5xl sm:text-8xl leading-none sm:leading-[2vw] tracking-tighter font-bold'> {/* Responsive text size and leading */}
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className={`border-t-[1px] border-zinc-800 mt-20 sm:mt-32 py-5 px-4 sm:px-20 text-white flex flex-col sm:flex-row justify-between items-center`}> {/* Adjusted padding, margin, and flex layout for responsiveness */}
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className={`text-md font-light ${index === 0 ? "whitespace-nowrap" : ""} tracking-tight leading-none ${index === 1 ? "text-center w-full" : ""}`}>{item}</p>
        ))}
        <div className='start flex items-center justify-center mt-4 sm:mt-0'> {/* Added margin-top for mobile */}
          <div className='px-10 py-2 border-[2px] border-zinc-500 hover:bg-white hover:text-black hover:border-white transition-colors duration-200 font-light text-sm capitalize rounded-full'>Start the project</div>
          <div className='w-[50px] h-[30px] rounded-full ml-2 border-[2px] rotate-[45deg] flex justify-center items-center border-zinc-500'><FaArrowUpLong /></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;