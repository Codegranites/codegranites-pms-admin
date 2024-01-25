import { useThemeContext } from '@/context/ThemeCtx';
import { cn } from '@/utils/util';
import Image from 'next/image';
import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';

const ThemeButtons = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div className="flex items-center border border-gray-300 dark:border-primary-light p-[2px] rounded-full w-[115px] justify-center">
      <button
        type="button"
        className={cn(
          'w-[33px] h-[33px] p-2',
          theme === 'light' && 'bg-black/10  rounded-full '
        )}
        onClick={() => setTheme('light')}
      >
        <MdOutlineLightMode className="text-header dark:text-gray-300" />
      </button>

      <button
        type="button"
        className={cn(
          'w-[33px] h-[33px]  p-2',
          theme === 'dark' &&
            'bg-black/10  rounded-full dark:bg-primary-light/70'
        )}
        onClick={() => setTheme('dark')}
      >
        <BsMoon className="text-header dark:text-gray-300" />
      </button>
      <button
        type="button"
        className={cn(
          'w-[33px] h-[33px] p-2',
          theme === 'system' &&
            'bg-black/10  rounded-full dark:bg-primary-light/70'
        )}
        onClick={() => setTheme('system')}
      >
        <FiMonitor className="text-header dark:text-gray-300" />
      </button>
    </div>
  );
};

export default ThemeButtons;
