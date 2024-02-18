import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    // Check if window is defined before accessing its properties
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;

        var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div data-scroll data-scroll-speed=".3" className="w-full relative">
    <img
      className="object-cover w-full"
      src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
      alt=""
    />

    <div className="bg-white h-[200px]  w-[200px] absolute top-[300px] left-[35%] rounded-[50%]  ">
      <div className="bg-black h-[100px] w-[100px] rounded-[50%] absolute top-[50px] left-[50px]">
        <div style={{ transform: `rotate(${rotate}deg)` }} className="h-[20px] w-full absolute top-[39%]">
          <div className="h-[20px] w-[20px] rounded-[50%] bg-white"></div>
        </div>
      </div>
    </div>

    <div className="bg-white h-[200px]  w-[200px] absolute top-[300px] right-[35%] rounded-[50%]  ">
      <div className="bg-black h-[100px] w-[100px] rounded-[50%] absolute top-[50px] left-[50px]">
        <div style={{ transform: `rotate(${rotate}deg)` }} className="h-[20px] w-full  absolute top-[39%] ">
          <div className="h-[20px] w-[20px] rounded-[50%] bg-white"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default dynamic(() => Promise.resolve(Eyes), {
  ssr: false,
});
