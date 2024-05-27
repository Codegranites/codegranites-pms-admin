/* eslint-disable react/no-unescaped-entities */

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import Button from '@ui/Button';
import LoadingSpinner from '../loaders/LoadingSpinner';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false,
  loading: () => <LoadingSpinner color="border-white" />
});

const Hero = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0 bg-primary">
        <Image
          src="/landing-bg.webp"
          alt="hero image"
          width={1440}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0 bg-primary">
        <Image
          src="/landing-mobile.webp"
          alt="hero image"
          width={380}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full sm:bg-black/50 lg:bg-black/70 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[85%] 2xl:max-w-[90%]  items-center">
          <h2 className="max-[400px]:text-base max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl text-center xl:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            <TypewriterComponent
              component="span"
              options={{
                autoStart: true,
                delay: 100,
                loop: true,
                strings: [
                  'Empower your project journey with CodeGranites',
                  'Transform Your Project Journey: Empower with CodeGranites',
                  'Unlock Possibilities: Empower Your Project Journey with CodeGranites',
                  'Collaborate and Empower Your Project Journey with CodeGranites',
                  'Pioneer Your Project Journey with CodeGranites: Embrace Innovation',
                  'Drive Success: Empower Your Project Journey with CodeGranites'
                ],
                deleteSpeed: 50
              }}
            />
          </h2>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            Your Ultimate Command Center for Effortless Project Management.
            Elevate Collaboration, Monitor Progress, and Achieve Milestones with
            Confidence. Sign Up Today for a Smarter Approach to Project Success
          </p>
          <div className="mt-3 lg:mt-6 w-full justify-center flex gap-x-5 lg:gap-x-10 [&>button]:border-white [&>button]:border [&>button]:px-4 [&>button]:lg:px-12 [&>button]:py-2 [&>button]:lg:py-4 [&>button]:rounded-md [&>button:last-child]:bg-white [&>button:last-child]:text-primary [&>button]:font-medium [&>button]:lg:font-semibold [&>button]:text-white [&>button]:max-[390px]:text-sm max-[350px]:flex-col gap-y-3">
            <Button
              href="/get-started"
              size="lg"
              className="bg-white py-6 text-lg px-12 text-primary hover:bg-white"
            >
              GetStarted
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
