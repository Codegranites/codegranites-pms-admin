import useInView from '../../../hooks/useInView';
import { CardProps } from '@/types';
import { cn } from '../../../utils/util';
import Image from 'next/image';
import React from 'react';

const Card = ({ title, description, icon }: CardProps) => {
  const workRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: workRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const rect = target?.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--border--x', `${x}px`);
    target.style.setProperty('--border--y', `${y}px`);
  };

  return (
    <div
      ref={workRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full h-[380px]  sm:w-[369px] flex justify-center items-center p-[2px] rounded-lg xl:rounded-xl transition-all duration-1000 hover:delay-0 hover:duration-500 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.2)]  dark:border-primary  border border-gray-200 hover:border-none card',
        isInView
          ? 'opacity-100 translate-y-0 delay-200 duration-1000'
          : ' opacity-0 translate-y-36'
      )}
    >
      <div className="card-border" />
      <div className="card-content w-full h-full flex flex-col items-center p-2 bg-card dark:bg-gradient-to-br  from-primary-light  to-[#1b3c5a] justify-center">
        <div className="flex h-[80px] w-[80px] bg-white dark:bg-primary justify-center items-center">
          <Image src={icon} alt="icon" width={48} height={48} />
        </div>
        <div className="flex flex-col items-center [&>p:last-child]:text-center gap-y-4 mt-4 sm:mt-7">
          <p className="text-header dark:text-gray-200 font-bold">{title}</p>
          <p className="text-header dark:text-gray-200 text-base leading-7">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
