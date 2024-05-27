'use client';

import Image from 'next/image';
import React, { Suspense, useState } from 'react';
import { cn } from '../../utils/util';
import useInView from '../../hooks/useInView';
import { handleMouseEnter } from '../../utils/text-effect';
import Orbit from './Orbit';
import LoadingSpinner from '../loaders/LoadingSpinner';

const Midsec = () => {
  const MidsecRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: sliderRef });
  const isInView2 = useInView({ ref: MidsecRef });
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="my-8 max-md:pt-12 lg:my-20 w-full flex flex-col items-center">
      <div
        ref={MidsecRef}
        className={cn(
          'flex flex-col gap-y-5 lg:gap-y-10 items-center w-full max-w-[1000px] px-2 sm:px-4',
          isInView
            ? 'opacity-100 translate-y-0 md:delay-300 duration-500'
            : ' opacity-0 translate-y-36'
        )}
      >
        <h2
          className="font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header dark:text-gray-50 mb-4"
          data-value="Meet Our Super Dashboard"
          onMouseEnter={handleMouseEnter}
        >
          Meet Our Super Dashboard
        </h2>
        <p className="w-full text-center text-base sm:text-lg text-header dark:text-gray-200">
          CodeGranites Super Dashboard is not just a tool; it&apos;s your
          co-pilot in the journey of project mastery. Streamline tasks, amplify
          collaboration, and chart your course to success like never before
        </p>
      </div>
      <div
        className={cn(
          'flex-col md:flex-row  flex w-full  md:justify-between mt-8 px-2 sm:px-4 lg:px-8 rounded-lg py-2 lg:py-4 items-center  min-[900px]:gap-5 gap-3 overflow-hidden'
        )}
      >
        <div
          ref={sliderRef}
          className={cn(
            'w-full  h-full lg:min-h-[750px] flex items-center justify-center max-md:jusc relative ',
            {
              'opacity-100 translate-y-0 delay-1000 duration-1000': isInView2,
              'opacity-0 translate-y-36': !isInView2
            }
          )}
        >
          <div className=" absolute z-10 justify-center items-center min-h-[572px] h-full w-full hidden sm:flex max-w-[800px]">
            <Image
              priority
              loading="eager"
              src="/dashboardfull.png"
              alt={'dashboard preview'}
              width={1000}
              height={700}
              className=""
              quality={100}
              draggable={false}
              onLoad={() => {
                window?.setTimeout(() => {
                  setImgLoaded(true);
                }, 1000);
              }}
            />
          </div>

          <div
            className={cn(
              'relative flex items-center justify-start -mr-5 min-[400px]:-mr-20 scale-0 ',
              {
                'scale-100 transition-all duration-1000': imgLoaded
              }
            )}
          >
            <Orbit />
          </div>
          <div
            className={cn(
              'relative flex items-center justify-end -ml-5 min-[400px]:-ml-20 scale-0 ',
              {
                'scale-100 transition-all duration-1000': imgLoaded
              }
            )}
          >
            <Orbit />
          </div>

          <div className="absolute z-10 justify-center items-center  h-full w-full flex sm:hidden min-[400px]:px-4 max-[400px]:w-[221px]">
            <Image
              src="/dashboardfull.png"
              loading="eager"
              alt="hero image"
              width={500}
              height={300}
              priority
              quality={100}
              draggable={false}
              className=" object-cover"
              onLoad={() => {
                window?.setTimeout(() => {
                  setImgLoaded(true);
                }, 1000);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Midsec;
