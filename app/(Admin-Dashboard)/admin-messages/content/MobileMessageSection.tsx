'use client';

import { Suspense } from 'react';
import MessageSkeleton from '../../../../components/skeleton/MessageSkeleton';
import { useMessageCtx } from '../../../../context/MessageContext';
import { cn } from '../../../../utils/util';
import { Add, MessageAdd1 } from 'iconsax-react';
import { useStateCtx } from '../../../../context/StateContext';

const MobileMessageSection = () => {
  const {
    activeMessageTab,
    setActiveMessageTab,
    searchMsg,
    setSearchMsg,
    filterSearchMsgs,
    showBtn
  } = useMessageCtx();
  const { newMessageModal, setNewMessageModal } = useStateCtx();

  const messageLen = 50;
  return (
    <section
      className={cn(
        'flex justify-center w-full  lg:hidden px-2 min-[400px]:py-10 pb-10 max-[400px]:relative',
        {
          hidden: filterSearchMsgs.length === 0
        }
      )}
    >
      <button
        onClick={() => setNewMessageModal(true)}
        tabIndex={0}
        aria-label="new message"
        aria-haspopup
        aria-expanded={newMessageModal}
        id="new-message"
        type="button"
        className={cn(
          'fixed z-50 bottom-10 right-4 flex flex-nowrap  min-[500px]:hidden h-[40px] items-center  bg-primary/80  text-white rounded-lg  duration-500 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary transition-all',
          showBtn
            ? 'w-[160px] min-[400px]:w-[200px] gap-x-3 backdrop-blur-md '
            : 'w-[56px] '
        )}
      >
        {showBtn ? (
          <Add size={24} className={!showBtn ? 'absolute' : ''} />
        ) : (
          <MessageAdd1
            size={24}
            className={!showBtn ? 'absolute transition-all !duration-0' : ''}
          />
        )}

        <span
          className={cn(
            'transition-all duration-300 min-w-[100px]',
            showBtn ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          )}
        >
          New message
        </span>
      </button>
      <div className="flex w-full flex-col max-w-[687px] sm:h-[500px] hide-scroll overflow-y-auto">
        <Suspense fallback={<MessageSkeleton />}>
          {filterSearchMsgs.map(msg => (
            <div
              key={msg.id}
              className="w-full flex justify-between   border-t border-b border-gray-200 dark:border-primary-light py-2 gap-x-2"
            >
              <div className="flex w-full flex-col items-start justify-between gap-y-1 min-[400px]:gap-y-2">
                <h3 className="font-medium text-sm sm:text-base text-header dark:text-gray-100">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: msg.author.replace(
                        new RegExp(`(${searchMsg})`, 'gi'),
                        (match, group) =>
                          `<span style="color: black; background-color: ${
                            group.toLowerCase() === searchMsg.toLowerCase()
                              ? 'yellow'
                              : 'inherit'
                          }">${match}</span>`
                      )
                    }}
                  />{' '}
                  -{' '}
                  <span className="opacity-60 max-[400px]:text-xs">
                    {msg.stack}
                  </span>
                </h3>
                <p className="text-xs min-[400px]:text-sm sm:text-base text-header dark:text-gray-400">
                  {msg.message.length > messageLen
                    ? msg.message.slice(0, messageLen) + '...'
                    : msg.message}
                </p>
              </div>

              <div className="flex w-full  max-w-[130px] sm:max-w-[160px] flex-col items-end justify-between">
                <p className="text-xs sm:text-sm opacity-70 text-header dark:text-gray-300">
                  {msg.date}, {msg.time}
                </p>
                <span
                  className={cn('px-2  rounded-full text-sm', {
                    'bg-green-100 text-green-700': msg.status === 'sent',
                    'bg-yellow-100 text-yellow-900': msg.status === 'received',
                    'bg-red-100 text-red-900': msg.status === 'draft',
                    'bg-blue-100 text-blue-700': msg.status === 'inbox'
                  })}
                >
                  {msg.status}
                </span>
              </div>
            </div>
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default MobileMessageSection;
