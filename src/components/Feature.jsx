import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Feature = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div  className='py-10 w-full bg-gray-400 relative overflow-hidden'>
      <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='text-5xl tracking-tight text-white font-bold font-sans'>Featured Projects</h1>
      </div>
      <div className='px-10 mt-5'>
        <div className="Cards w-full flex flex-col sm:flex-row justify-between">                                                                                                                                                                                                                                                                                                                                            
          <motion.div onMouseEnter={() => setHoveredCard('FYDE')} onMouseLeave={() => setHoveredCard(null)}
            className='card w-full sm:w-1/2 h-[60vh] relative rounded-xl mb-5 sm:mb-0 sm:mr-2.5'
            style={{
              backgroundImage: "url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
          </motion.div>
          <motion.div onMouseEnter={() => setHoveredCard('VISE')} onMouseLeave={() => setHoveredCard(null)}
            className='card w-full sm:w-1/2 h-[60vh] relative rounded-xl'
            style={{
              backgroundImage: "url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
          </motion.div>
        </div>
        {hoveredCard && (
          <h1 className='text-6xl font-bold absolute flex overflow-hidden left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-yellow-300'>
            {hoveredCard.split('').map((item, index) => (
              <motion.span key={index} initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ ease: "easeInOut", delay: index * 0.1 }} className='inline-block'>
                {item}
              </motion.span>
            ))}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Feature;