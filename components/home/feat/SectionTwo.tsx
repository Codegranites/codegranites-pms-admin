import React from 'react';
import Image from 'next/image';
import useInView from '../../../hooks/useInView';
import { cn } from '@/utils/util';

const SectionTwo = () => {
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
      <div className="items-center justify-center self-center ">
        <h2 className="text-[28px] leading-[48px] font-semibold mb-4 text-header dark:text-gray-50">
          Projects page
        </h2>
        <p className="max-w-[551px] text-[18px] font-normal text-header dark:text-gray-200">
          Unleash the power of organized innovation with our Projects Page
          feature. Navigate your project landscape effortlessly, with a visually
          intuitive interface that puts control back in your hands. From
          inception to completion, monitor progress, allocate resources, and
          celebrate milestones with precision. CodeGranite&apos;s Projects Page
          redefines project management, making complexity simple and success
          tangible
        </p>
      </div>
      <div>
        <Image
          src="/home/SectionTwo.svg"
          alt="client page"
          width={619}
          height={411}
        />
      </div>
    </div>
  );
};

export default SectionTwo;
