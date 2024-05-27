import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isEmpty: boolean;
  title: string;
  Icon: FC;
  emptyIllustration: string;
  emptyText: string;
  Create?: FC;
}

function Container({
  children,
  isEmpty,
  title,
  Icon,
  emptyIllustration,
  emptyText,
  Create
}: Props) {
  return (
    <div
      className={`bg-white rounded-2xl ${
        isEmpty
          ? 'shadow-[0px_4px_40px_6px_rgba(0,0,0,0.06)]'
          : 'border border-[#E1E1E1]'
      }`}
    >
      <div className="rounded-2xl text-header">
        <div className="flex items-center py-6 px-8 border-b gap-2 border-b-[#E1E1E1]">
          <Icon />
          <span className="font-medium">{title}</span>
        </div>
        <div>
          {!isEmpty ? (
            <div className="py-20">
              <div className=" max-w-sm mx-auto aspect-[421/342] relative">
                <Image src={emptyIllustration} fill alt="Empty Illustration" />
              </div>
              <p className="text-center text-lg">{emptyText}</p>
              {Create && (
                <div className="flex justify-center h-12 mt-6">
                  <Create />
                </div>
              )}
            </div>
          ) : (
            /* tweaked the padding for small devices by adding 
						lg:p-14 instead of p-14 which will affect both screen.
						*/
            <div className="lg:px-14">
              <div className="border rounded-2xl border-[#CAC4D0]">
                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Container;
