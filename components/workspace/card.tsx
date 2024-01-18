import React from 'react';
import useInView from '@/hooks/useInView';
import { WorkspaceCardProps } from '@/types';
import { cn } from '@/utils/util';
import Link from 'next/link';
import { useSession } from '@/context/sessionProvider';

const WorkSpaceCard: React.FC<WorkspaceCardProps> = ({
  id,
  logo,
  name,
  description,
  projectCount
}) => {
  const { setWorkspaceId } = useSession();
  const WorkSpaceRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: WorkSpaceRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const rect = target?.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--border--x', `${x}px`);
    target.style.setProperty('--border--y', `${y}px`);
  };

  const handleOpenClick = () => {
    setWorkspaceId('WorkspaceId', (id ?? '').toString());
  };

  return (
    <div
      // href={`/${name.toLowerCase()}/dashboard`}
      ref={WorkSpaceRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'w-[700px] h-full  bg-card sm:w-[369px] flex flex-col justify-start items-start p-[16px] rounded-lg xl:rounded-xl transition-all duration-1000 hover:delay-0 hover:duration-500 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.2)]   border border-gray-200 hover:border-none card',
        isInView
          ? 'opacity-100 translate-y-0 delay-200 duration-1000'
          : ' opacity-0 translate-y-36'
      )}
    >
      <div className="flex pb-4 items-center gap-x-3">
        <p className="bg-[#F3DE8A] text-[#fff] text-[1rem] p-1 rounded-full h-[30px] w-[30px] items-center justify-center text-center">
          {logo}
        </p>
        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold ">
          {name}
        </h2>
      </div>
      <div className="pb-4">
        <p className="text-[1rem] text-[#282828] leading-[38px] font-nmedium max-w-[524px]">
          {description}
        </p>
      </div>
      <div>
        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">
          Projects: {projectCount}
        </p>
      </div>
      <div>
        <button
          className="text-primary rounded-lg bg-white border border-primary h-[40px] w-[185px] px-4 py-2 flex items-center justify-center font-medium hover:opacity-70 transition-all duration-300"
          onClick={handleOpenClick}
        >
          <Link href={`/${name.toLowerCase()}/dashboard`}>Open</Link>
        </button>
      </div>
    </div>
  );
};

export default WorkSpaceCard;
