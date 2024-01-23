import { Folder2 } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';
import { ProjectCardProps } from '../../../libs/projects';
import useInView from '../../../hooks/useInView';
import { cn } from '../../../utils/util';
import { useStateCtx } from '../../../context/StateContext';

const ProjectCardAdmin = ({
  status,
  title,
  project_owner,
  end_date,
  id
}: ProjectCardProps) => {
  const projectCardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: projectCardRef });
  const { projectSearchTerm } = useStateCtx();

  const encryptString = (str: string): string => {
    const buffer = Buffer.from(str);
    return buffer.toString('base64');
  };
  const encryptTitle = encryptString(title!);

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
      ref={projectCardRef}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-[454px] h-[261px]  flex items-center justify-center pb-1  p-[2px] border border-gray-300 dark:border-primary dark:p-1 rounded-xl sm:rounded-2xl admin-card"
    >
      <div className="card-border" />
      <div className="card-content w-full h-full flex flex-col items-start gap-y-4 bg-white dark:bg-gradient-to-br  from-primary-light  to-[#1b3c5a] min-[1310px]:p-4 max-[1140px]:p-4 p-1 justify-center max-[360px]:[&>p]:text-[12px]">
        <Folder2 variant="Bold" className="text-header dark:text-gray-200 " />
        <p className="text-sm text-header dark:text-gray-200">
          Project Title:{' '}
          <strong>
            <span
              dangerouslySetInnerHTML={{
                __html: title.replace(
                  new RegExp(`(${projectSearchTerm})`, 'gi'),
                  (match, group) =>
                    `<span style="color: black; background-color: ${
                      group.toLowerCase() === projectSearchTerm.toLowerCase()
                        ? 'yellow'
                        : 'inherit'
                    }">${match}</span>`
                )
              }}
            />
          </strong>
        </p>
        <p className="text-sm text-header dark:text-gray-200 flex items-center gap-x-1 xl:gap-x-2">
          Project Status:{' '}
          <span
            className={cn(
              'relative w-[100px] min-[404px]:w-[130px] xl:w-[150px] h-[8px] border  rounded-md',
              {
                'border-[#eea300] ': status === 'in-progress',
                'border-[#008d36] ': status === 'completed',
                'border-black/90 ': status === 'pending'
              }
            )}
          >
            <span
              className={cn(
                'absolute h-full  bg-black rounded-md transition-all duration-1000',
                {
                  'bg-[#eea300] w-1/2': status === 'in-progress',
                  'bg-[#008d36] w-full': status === 'completed',
                  'bg-black/90 w-[5%]': status === 'pending'
                }
              )}
            />
          </span>{' '}
          <span
            className={cn('text-[11px] xl:text-sm max-lg:text-sm', {
              'max-[1158px]-[11px]': status === 'in-progress'
            })}
          >
            ({status})
          </span>
        </p>
        <p className="text-sm text-header dark:text-gray-200">
          Project Owner: <strong>{project_owner}</strong>{' '}
          <Link href="" className="text-primary-light dark:text-[#34bae7]">
            (View Profile)
          </Link>
        </p>
        <p className="text-sm text-header dark:text-gray-200">
          Project end date: <strong>{end_date}</strong>
        </p>
        <Link
          href={`/admin-projects/details?id=${id}&project_title=${encryptTitle}`}
          type="button"
          tabIndex={0}
          className="text-primary dark:text-color-dark  dark:border-color-dark border-primary rounded-lg  border h-[32px] px-4 py-2 flex items-center font-medium hover:opacity-70 transition-all duration-300"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCardAdmin;
