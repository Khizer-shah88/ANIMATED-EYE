import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marque = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll data-scroll-speed=".2" className="w-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
      <div className="border-t-2 border-b-2 mt-16 mb-36 border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          className="text-[22vw] leading-none font-bold uppercase -mt-20 pt-20 text-white"
          variants={marqueeVariants}
          animate="animate"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          className="text-[22vw] leading-none font-bold uppercase -mb-[7vw] -mt-20 pt-20 text-white"
          variants={marqueeVariants}
          animate="animate"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
