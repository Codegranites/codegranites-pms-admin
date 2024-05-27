import Image from 'next/image';
import React from 'react';

const Butt = () => {
  return (
    <section className="relative max-h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0">
        <Image
          src="/home/butt.svg"
          alt="hero image"
          width={1440}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0">
        <Image
          src="/home/img.svg"
          alt="hero image"
          width={380}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/40 justify-center px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[80%]  items-center">
          <p className="max-[400px]:text-base  text-center max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            Code Granites – Elevating Ideas, Empowering Innovation.
          </p>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            Join us on the journey of digital transformation
          </p>
          <div className="mt-3 lg:mt-6 w-full justify-center flex gap-x-5 lg:gap-x-10 [&>button]:border-white [&>button]:border [&>button]:px-4 [&>button]:lg:px-12 [&>button]:py-2 [&>button]:lg:py-4 [&>button]:rounded-md [&>button:last-child]:bg-white [&>button:last-child]:text-primary [&>button]:font-medium [&>button]:lg:font-semibold [&>button]:text-white [&>button]:max-[390px]:text-sm max-[350px]:flex-col gap-y-3">
            <button type="button">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Butt;
