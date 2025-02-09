import React, { useState } from 'react';

const About = () => {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full py-10 sm:py-20 bg-[#cdea68] -mt-10 sm:-mt-20 p-5 sm:p-20 rounded-tl-3xl rounded-tr-3xl text-black font-serif'>
        <h1 className='text-4xl text-center sm:text-6xl leading-tight sm:leading-[3.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people. 
        </h1>
        <div className='w-full border-t-[1px] mt-10 sm:mt-20 border-black flex flex-col sm:flex-row gap-5'>
            <div className='w-full sm:w-1/2 mt-6 sm:mt-12'>
                <h1 className='text-5xl sm:text-7xl'>Our Approach</h1>
                <button 
                  className='btn rounded-3xl mt-4 sm: flex justify-center items-center w-40 h-12 sm:w-60 sm:h-16 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors duration-200' 
                  onMouseEnter={() => setIsHovered(true)} 
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Read more
                </button>
            </div>
            <div 
              className={`w-full sm:w-[60%] h-40 sm:h-[70vh] rounded-3xl mt-8 sm:mt-16 transition-transform duration-1000 transform ${isHovered ? 'scale-95' : 'scale-100'}`}
              onMouseEnter={() => setIsHovered(true)} // Fixed to use the correct state management function
              onMouseLeave={() => setIsHovered(false)}
              style={{ 
                backgroundImage: "url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            ></div>
        </div>
    </div>
  );
}

export default About;