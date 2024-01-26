import React from 'react';
import useInView from '@/hooks/useInView';
import { cn, getInitials } from '@/utils/util';
import Link from 'next/link';
import { WorkspaceType } from '@/types';

const WorkSpaceCard: React.FC<WorkspaceType> = ({
  _id,
  name,
  description,
  projects
}) => {
  // const { setWorkspaceId } = useSession();
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

  // const handleOpenClick = () => {
  //   setWorkspaceId('WorkspaceId', (id ?? '').toString());
  // };

  return (
    <div
      ref={WorkSpaceRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'md:w-[500px] relative h-full sm:w-ful   flex flex-col p-[6px] rounded-lg xl:rounded-xl transition-all duration-1000 hover:delay-0 hover:duration-500 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.2)]   border border-gray-200 dark:border-primary hover:border-none card',
        isInView
          ? 'opacity-100 translate-y-0 delay-200 duration-1000'
          : ' opacity-0 translate-y-36'
      )}
    >
      <div className="card-border" />
      <div className="card-content flex-col flex bg-card dark:bg-gradient-to-br  from-primary-light  to-[#1b3c5a] p-2 pl-3 justify-start items-start">
        <div className="flex pb-4 items-center gap-x-3">
          <p className="bg-[#F3DE8A] text-[#fff] text-[1rem] p-1 rounded-full h-[30px] w-[30px] items-center justify-center text-center">
            {getInitials(name || '')}
          </p>
          <h2 className="text-[1.5rem] leading-10 text-header dark:text-gray-100 font-bold ">
            {name}
          </h2>
        </div>
        <div className="pb-4">
          <p className="text-[1rem] text-header dark:text-gray-300 leading-[38px] font-nmedium max-w-[524px]">
            {description}
          </p>
        </div>
        <div>
          <p className="text-[1rem] text-header dark:text-gray-300 font-normal pt-2 pb-4">
            Projects: {projects?.length || 0}
          </p>
        </div>
        <div>
          <Link
            href={`/dashboard`}
            className="text-primary rounded-lg bg-white border border-primary h-[40px] w-[185px] px-4 py-2 flex items-center justify-center font-medium hover:opacity-70 transition-all duration-300"
          >
            Open
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceCard;

{
  /* <div className="flex pb-4 items-center gap-x-3"></div> */
}
