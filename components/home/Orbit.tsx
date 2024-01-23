'use client';
import React, { useEffect, useState } from 'react';

const Orbit = () => {
  const [winWidth, setWinWidth] = useState<number | null>(null);

  useEffect(() => {
    setWinWidth(window.innerWidth);

    const handleWidth = () => {
      setWinWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return (
    <>
      {/* LG */}
      <div className="h-[196px] w-[196px] min-[400px]:h-[400px] sm:h-[700px] min-[400px]:w-[400px] sm:w-[700px] border-[0.5px] sm:border border-[#587997] sm:border-primary-light dark:border-color-dark rounded-full relative  orbit">
        <span
          style={{
            backgroundSize: winWidth! > 400 ? '30px' : '15px',
            backgroundPosition: 'center'
          }}
          className="w-[5px] h-[5px] min-[400px]:h-4 sm:h-5 min-[400px]:w-4 sm:w-5 bg-[#eea300] rounded-full absolute top-[4.3rem] min-[400px]:top-[15.6rem] sm:top-[16rem] "
        />
      </div>

      {/* MD */}

      <div className="h-[140px] w-[140px] min-[400px]:h-[300px] sm:h-[500px] min-[400px]:w-[300px] sm:w-[500px] border-[0.5px] sm:border border-[#a48694] dark:border-gray-300 rounded-full absolute   orbit-md">
        <span
          style={{
            backgroundSize: winWidth! > 400 ? '30px' : '15px',
            backgroundPosition: 'center'
          }}
          className="w-[5px] h-[5px] min-[400px]:h-4 sm:h-5 min-[400px]:w-4 sm:w-5 bg-primary-light dark:bg-color-dark rounded-full absolute top-[5.4rem] min-[400px]:top-[5.8rem] sm:top-[19rem] "
        />
      </div>

      {/* SM */}

      <div className="w-[90px] h-[90px] min-[400px]:h-[200px] sm:h-[300px] min-[400px]:w-[200px] sm:w-[300px] border-[0.5px] sm:border border-[#587997] dark:border-color-dark sm:border-primary-light rounded-full absolute   orbit-sm">
        <span
          style={{
            backgroundSize: winWidth! > 400 ? '30px' : '15px',
            backgroundPosition: 'center'
          }}
          className="w-[5px] h-[5px] min-[400px]:h-4 sm:h-5 min-[400px]:w-4 sm:w-5 bg-[#eea300] rounded-full absolute top-[3.5rem] min-[400px]:top-[3rem] sm:top-[5.3rem] "
        />
      </div>
    </>
  );
};

export default Orbit;
