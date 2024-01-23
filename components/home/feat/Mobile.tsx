import React from 'react';
import Image from 'next/image';
import useInView from '../../../hooks/useInView';
import { cn } from '@/utils/util';
import { handleMouseEnter } from '@/utils/text-effect';

const SectionOne = () => {
  const CardRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView({ ref: CardRef });
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView1 = useInView({ ref: worksRef });
  const isInView2 = useInView({ ref: titleRef });
  const thirdhRef = React.useRef<HTMLHeadingElement>(null);
  const isInView3 = useInView({ ref: thirdhRef });
  const forthRef = React.useRef<HTMLHeadingElement>(null);
  const isInView4 = useInView({ ref: forthRef });
  return (
    <div
      className={cn(
        'flex md:hidden flex-col item-center space-y-8 justify-center max-w-sm text-header dark:text-gray-50 px-4',
        isInView
          ? 'opacity-100 translate-y-0 delay-300 duration-1000'
          : ' opacity-0 translate-y-36'
      )}
      ref={CardRef}
    >
      <div
        className={cn(
          'items-center justify-center mb-4 text-center',
          isInView1
            ? 'opacity-100 translate-y-0 delay-300 duration-1000'
            : ' opacity-0 translate-y-36'
        )}
        ref={worksRef}
      >
        <h2
          ref={titleRef}
          onMouseEnter={handleMouseEnter}
          data-value="Clients page"
          className={cn(
            'text-[28px] leading-[48px] font-semibold text-header dark:text-gray-50 items-center justify-center',
            isInView2
              ? 'opacity-100 translate-y-0 delay-300 duration-1000'
              : ' opacity-0 translate-y-36'
          )}
        >
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
      <div>
        <Image
          loading="eager"
          src="/home/SectionOne.svg"
          alt="client page"
          width={354}
          height={411}
        />
      </div>
      <div className="items-center justify-center mb-4 text-center">
        <h2
          ref={thirdhRef}
          onMouseEnter={handleMouseEnter}
          data-value="Projects page"
          className={cn(
            'text-[28px] leading-[48px] font-semibold text-header dark:text-gray-50 items-center justify-center',
            isInView3
              ? 'opacity-100 translate-y-0 delay-300 duration-1000'
              : ' opacity-0 translate-y-36'
          )}
        >
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
      <div
      //   ref={forthRef}
      //   className={
      //     "isInView4 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36'"
      //   }
      >
        <Image
          src="/home/SectionTwo.svg"
          alt="client page"
          width={619}
          height={411}
        />
      </div>
      <div>
        <div className="items-center justify-center self-center text-center">
          <h2
            ref={worksRef}
            onMouseEnter={handleMouseEnter}
            data-value="Project Milestones"
            className={cn(
              'text-[28px] leading-[48px] font-semibold text-header dark:text-gray-50 items-center justify-center',
              isInView1
                ? 'opacity-100 translate-y-0 delay-300 duration-1000'
                : ' opacity-0 translate-y-36'
            )}
          >
            Project Milestones
          </h2>
          <p className="max-w-[551px] text-[18px] font-normal text-header dark:text-gray-200">
            Chart your course to success with precision using our Project
            Milestones feature. Experience the thrill of achievement as you
            effortlessly set, track, and conquer critical project milestones.
            From ideation to completion, CodeGranites empowers your team to
            celebrate victories along the journey. Elevate your project
            experience – where each milestone becomes a stepping stone towards
            unparalleled success
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/home/SectionThree.svg"
          alt="client page"
          width={619}
          height={411}
        />
      </div>
    </div>
  );
};

export default SectionOne;
