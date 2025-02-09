import React, { useEffect, useState } from 'react';

export const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX);
            const angleDeg = angle * 180 / Math.PI;

            setRotate(angleDeg);
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden">
            <div data-scroll data-scroll-speed="-.7" className='w-full h-full relative'
                style={{ 
                    backgroundImage: "url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')", 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}>
                <div className='absolute flex gap-5 sm:gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className='w-[30vw] h-[30vw] sm:w-[15vw] sm:h-[15vw] bg-white rounded-full flex items-center justify-center'>
                            <div className='w-2/3 h-2/3 relative rounded-full bg-black'>
                                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                    <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Eyes;