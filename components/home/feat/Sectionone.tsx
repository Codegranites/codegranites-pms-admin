import React from 'react';
import Image from 'next/image';
import useInView from '@/hooks/useInView';
import { cn } from '@/utils/util';

const SectionOne = () => {
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
          src="/home/SectionOne.svg"
          alt="client page"
          width={619}
          height={411}
        />
      </div>
      <div className="items-center justify-center self-center mb-4 text-header dark:text-gray-50">
        <h2 className="text-[28px] leading-[48px] font-semibold">
          Clients page
        </h2>
        <p className="max-w-[551px] text-[18px] font-normal text-header dark:text-gray-200">
          Revolutionize client connections with our Clients Page feature.
          Immerse yourself in intuitive client management, effortlessly
          centralizing contacts and project histories. Uncover nuanced insights
          in seconds, fostering meaningful connections that transcend
          transactions. CodeGranites redefines client engagement – where every
          detail matters, and relationships flourish effortlessly
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
