'use client';

import { MESSAGES } from './messages';
import cn from '../../../../utils/util';
import { useMessageCtx } from '../../../../context/MessageContext';
import MessageSkeleton from '../../../../components/skeleton/MessageSkeleton';
import { Suspense } from 'react';

const MessageSection = () => {
  const {
    activeMessageTab,
    setActiveMessageTab,
    searchMsg,
    setSearchMsg,
    filterSearchMsgs
  } = useMessageCtx();
  const messageLen = 70;

  return (
    <section
      className={cn(
        'w-full hidden lg:flex flex-col justify-center my-6 border border-gray-200 mt-10 2xl:mt-16',
        {
          '!hidden': filterSearchMsgs.length === 0
        }
      )}
    >
      <div className="flex flex-nowrap items-center   w-full h-[64px] border-b border-gray-200 ">
        <span className="  w-full px-1 max-w-[60px] flex items-center justify-center border-r border-gray-200 h-full">
          <span className=" w-12 h-12 flex items-center justify-center rounded-full bg-[#e1e1e1]">
            S/N
          </span>
        </span>

        <span className=" font-medium w-full min-w-[390px] max-w-[400px] xl:max-w-[430px]  flex items-center  border-r border-gray-200 h-full pl-2">
          Message
        </span>
        <span className=" font-medium w-full max-w-[140px] lg:max-w-[149px] flex items-center  border-r border-gray-200 h-full text-center justify-center">
          Stack
        </span>
        <span className=" font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center border-r border-gray-200 h-full">
          Date
        </span>
        <span className=" font-medium w-full max-w-[100px] lg:max-w-[127px] flex items-center justify-center border-r border-gray-200 h-full">
          Time
        </span>
        <span className=" font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
          Status
        </span>
      </div>

      <div className="flex w-full h-[400px] hide-scroll overflow-y-auto flex-col">
        {filterSearchMsgs.map((message, index) => (
          <Suspense key={message.id} fallback={<MessageSkeleton />}>
            <div
              key={message.id}
              className={cn(
                'flex flex-nowrap  items-center  w-full h-[70px]  border-b border-gray-200 py-1 transition-all duration-300'
              )}
            >
              <span
                className="w-full max-w-[60px]  justify-center border-r border-gray-200 h-full flex items-center px-1 "
                key={index}
              >
                <span className=" flex items-center justify-center w-8 h-8 rounded-full bg-[#e1e1e1]">
                  {index + 1}
                </span>
              </span>
              <span className="font-medium w-full min-w-[390px] max-w-[400px] xl:max-w-[430px] flex-col    justify-center  border-r border-gray-200 h-full pl-2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: message.author.replace(
                      new RegExp(`(${searchMsg})`, 'gi'),
                      (match, group) =>
                        `<span style="color: black; background-color: ${
                          group.toLowerCase() === searchMsg.toLowerCase()
                            ? 'yellow'
                            : 'inherit'
                        }">${match}</span>`
                    )
                  }}
                />
                <span className="font-normal text-xs xl:text-sm flex items-center  border-r border-gray-200 ">
                  {message.message.length > messageLen
                    ? message.message.slice(0, messageLen) + '...'
                    : message.message}
                </span>
              </span>
              <span className="text-sm w-full max-w-[140px] lg:max-w-[149px] flex items-center justify-center  border-r border-gray-200 h-full text-center">
                {message.stack}
              </span>
              <span className="text-sm w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  border-r border-gray-200 h-full">
                {message.date}
              </span>
              <span className="text-sm w-full max-w-[100px] lg:max-w-[127px] flex items-center justify-center  border-r border-gray-200 h-full ">
                <span className="bg-[#e8e8e8] px-2 py-1 font-medium rounded-full">
                  {message.time}
                </span>
              </span>
              <span className="w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center   h-full">
                <span
                  className={cn('px-2 py-1 rounded-xl', {
                    'bg-green-100 text-green-700': message.status === 'sent',
                    'bg-yellow-100 text-yellow-900':
                      message.status === 'received',
                    'bg-red-100 text-red-900': message.status === 'draft',
                    'bg-blue-100 text-blue-700': message.status === 'inbox'
                  })}
                >
                  {message.status}
                </span>
              </span>
            </div>
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default MessageSection;
