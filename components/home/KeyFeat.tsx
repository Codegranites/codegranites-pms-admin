import React from 'react';
import { cn } from '../../utils/util';
import useInView from '../../hooks/useInView';
import { handleMouseEnter } from '../../utils/text-effect';
import SectionOne from './feat/Sectionone';
import SectionTwo from './feat/SectionTwo';
import SectionThree from './feat/SectionThree';
import Mobile from './feat/Mobile';

const KeyFeat = () => {
  const KeyFeatRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView({ ref: titleRef });
  const isInView = useInView({ ref: KeyFeatRef });

  return (
    <section className="h-full w-full flex flex-col items-center mb-8 lg:mb-20 mt-8 gap-y-5 lg:gap-y-8 xl:gap-y-12 2xl:gap-y-20">
      <h2
        ref={titleRef}
        onMouseEnter={handleMouseEnter}
        data-value="More Features"
        className={cn(
          'font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header dark:text-gray-50',
          isInView2
            ? 'opacity-100 translate-y-0 delay-300 duration-1000'
            : ' opacity-0 translate-y-36'
        )}
      >
        Some key features
      </h2>
      <div
        ref={KeyFeatRef}
        className={cn(
          'w-full flex flex-col md:gap-y-10 xl:gap-y-12 2xl:gap-y-16 mt-8 place-items-center opacity-0 translate-y-48',

          isInView ? 'animate-slideUp' : ' '
        )}
      >
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Mobile />
      </div>
    </section>
  );
};

export default KeyFeat;
