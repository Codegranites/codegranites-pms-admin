'use client';

import { ArrowRight2, WalletMoney } from 'iconsax-react';
import Button from '@ui/Button';
import Image from 'next/image';

const Transaction = () => {
  return (
    <section className="flex flex-col w-full   lg:border-r-[#e1e1e1] h-full items-center justify-center lg:pb-16">
      <div className="flex w-full sm:px-5 items-center justify-between mb-6 border-b border-t  border-[#e1e1e1] h-[56px] relative sm:text-xl  text-header dark:text-gray-200 dark:border-primary-light font-medium">
        <div className="flex gap-2 items-center justify-center">
          <WalletMoney size="32" />
          <span>Transactions</span>
        </div>
        <Button
          className="flex gap-2 items-center justify-center bg-transparent text-header dark:text-gray-200 hover:bg-transparent"
          href="/admin-transactions"
        >
          <span>View All</span>
          <ArrowRight2 size="32" />
        </Button>
      </div>
      <Image
        src="/dashboard/transction.png"
        alt="empty transction"
        width={225}
        height={175}
      />
      <div className="items-center justify-center sm:max-w-[300px] xl:max-w-[450px]">
        <p className="text-header dark:text-gray-300 sm:font-medium lg:text-xl w-full  text-center">
          No transactions have been made yet!
        </p>
      </div>
    </section>
  );
};

export default Transaction;
