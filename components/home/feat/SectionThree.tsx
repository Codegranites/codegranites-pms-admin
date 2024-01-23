import React from 'react';
import Image from 'next/image';
import useInView from '../../../hooks/useInView';
import { cn } from '@/utils/util';

const SectionThree = () => {
  const CardRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView({ ref: CardRef });
  return (
    <div
      className={cn(
        'hidden md:flex item-center space-x-16 justify-center md:justify-between max-w-[1239px] text-header',
        isInView
          ? 'opacity-100 translate-y-0 delay-300 duration-1000'
          : ' opacity-0 translate-y-36'
      )}
      ref={CardRef}
    >
      <div>
        <Image
          src="/home/SectionThree.svg"
          alt="client page"
          width={619}
          height={411}
        />
      </div>
      <div className="items-center justify-center self-center ">
        <h2 className="text-[28px] text-header dark:text-gray-50 leading-[48px] font-semibold mb-4">
          Project Milestones
        </h2>
        <p className="max-w-[551px] text-[18px] font-normal text-header dark:text-gray-200">
          Chart your course to success with precision using our Project
          Milestones feature. Experience the thrill of achievement as you
          effortlessly set, track, and conquer critical project milestones. From
          ideation to completion, CodeGranites empowers your team to celebrate
          victories along the journey. Elevate your project experience – where
          each milestone becomes a stepping stone towards unparalleled success
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
