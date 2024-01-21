'use client';

import { Input } from '@/components/ui/Input';

import { Add, SearchNormal } from 'iconsax-react';

import { useState } from 'react';
import Button from '@ui/Button';

const NotNav = () => {
  return (
    <div className="w-full md:h-[56px] flex justify-between min-[450px]:gap-x-4 items-center flex-col md:flex-row gap-y-4 sm:pt-4">
      <div className="flex w-full max-w-2/3 gap-x-4">
        <Button
          intent={'primary'}
          className="text-white bg-primary-light w-[200px] h-[56px]"
        >
          All
        </Button>
        <Button
          intent={'secondary'}
          className="text-black bg-transparent w-[200px] items-center h-[56px]"
        >
          Messages
        </Button>
        <Button
          intent={'secondary'}
          className="text-black bg-transparent w-[200px] items-center h-[56px]"
        >
          Transactions
        </Button>
        <Button
          intent={'secondary'}
          className="text-black bg-transparent w-[200px] items-center h-[56px]"
        >
          Transactions
        </Button>
        <Button
          intent={'secondary'}
          className="text-black bg-transparent w-[200px] items-center h-[56px]"
        >
          Client
        </Button>
      </div>
    </div>
  );
};

export default NotNav;
