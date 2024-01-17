'use client';

import { FolderCheck, Send, X } from 'lucide-react';
import { cn } from '../../../../utils/util';
import { useEffect, useState } from 'react';

import { useStateCtx } from '../../../../context/StateContext';
import WordCounter from '../../../../components/admin/card/WordCounter';
import Image from 'next/image';
import { Minus } from 'iconsax-react';

type FormProps = {
  receiver: string;
  subject: string;
  message: string;
  file: File;
};

const NewMessageModal = () => {
  const { newMessageModal, setNewMessageModal, user } = useStateCtx();
  const [saveForm, setSaveForm] = useState(false);
  const [clearForm, setClearForm] = useState(false);
  const [isMaximize, setIsMaximize] = useState(true);

  const [formData, setFormData] = useState<FormProps>({
    receiver: '',
    subject: '',
    message: '',
    file: {} as File
  });

  const messageLen = 250;

  const isDisabled =
    !formData.receiver || !formData.subject || !(formData.message.length > 3);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewMessageModal(false);
  };

  useEffect(() => {
    const readLocal = localStorage.getItem('new-message');
    if (readLocal) {
      setFormData(JSON.parse(readLocal));
    }
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 top-0 left-0  transition-all  z-[99] backdrop-blur-sm',
          newMessageModal
            ? 'opacity-100 duration-500'
            : 'opacity-0 pointer-events-none duration-300'
        )}
        onClick={() => setNewMessageModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="new-message"
        className={cn(
          'pt-2 min-[376px]:pt-4 sm:py-6   flex flex-col w-[98%]  h-[400px] min-[376px]:h-[422px]  min-[500px]:w-[417px] justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 z-[999]  transition-all opacity-0 select-none px-2 sm:px-4 md:px-6 lg:px-8',
          newMessageModal
            ? 'scale-100 duration-700 opacity-100 rounded-xl md:rounded-2xl'
            : 'scale-0 duration-300 pointer-events-none',
          isMaximize
            ? 'sm:h-[660px] sm:w-[617px] md:w-[700px] duration-500'
            : 'sm:h-[460px] '
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between w-full border-b border-header  ',
            isMaximize ? 'sm:pb-3 pb-1' : 'pb-1'
          )}
        >
          <div className="flex items-center gap-x-2">
            <Image
              src={user?.image!}
              alt={user?.name!}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-header font-semibold sm:text-lg">{user?.name}</p>
          </div>

          <div className="flex items-center gap-x-2">
            <button
              disabled={isDisabled}
              type="button"
              title="save"
              className="relative group disabled:opacity-60 disabled:pointer-events-none"
              onClick={() => {
                setSaveForm(true);
                if (!(formData.message.length > 3)) return;

                window?.localStorage.setItem(
                  'new-message',
                  JSON.stringify(formData)
                );

                window?.setTimeout(() => {
                  setNewMessageModal(false);
                  setSaveForm(false);
                }, 1500);
              }}
            >
              {!isDisabled && (
                <span className="absolute z-10 bg-primary/80 text-white rounded-md text-xs px-2 py-1 -top-7 -right-[0.6rem] before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rotate-45 before:bg-gradient-to-tl from-primary to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200 pointer-events-none">
                  {saveForm ? 'saving' : 'save'}
                </span>
              )}
              <FolderCheck size={24} />
            </button>

            {/* EXPAND */}
            <button
              type="button"
              title="save"
              className="relative group/expand  hidden sm:inline-block "
              onClick={() => setIsMaximize(!isMaximize)}
            >
              <span className="absolute z-10 bg-blue-700/80 text-white rounded-md text-xs px-2 py-1 -top-7 -right-[1.1rem] before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rotate-45 before:bg-gradient-to-tl from-blue-700 to-blue-700/20 opacity-0 group-hover/expand:opacity-100 transition-all duration-500 group-hover/expand:duration-200 pointer-events-none">
                {isMaximize ? 'normal' : 'expand'}
              </span>
              {isMaximize ? (
                <span className="w-6 h-6 rounded-md border-2 border-header flex ml-[2px]" />
              ) : (
                <Minus size={24} />
              )}
            </button>

            {/* CLOSE || CLEAR */}
            <button
              type="button"
              tabIndex={0}
              aria-label="Close"
              onClick={() => {
                setSaveForm(false);
                if (isDisabled) {
                  setNewMessageModal(false);
                  return;
                }
                setClearForm(true);
                window?.setTimeout(() => {
                  setClearForm(false);
                  setNewMessageModal(false);
                  window?.localStorage.removeItem('new-message');
                  setFormData({
                    receiver: '',
                    subject: '',
                    message: '',
                    file: {} as File
                  });
                }, 1200);
              }}
              className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full group/close relative "
            >
              <span className="absolute z-10 bg-red-700 text-white rounded-md text-xs px-2 py-1 -top-7 -right-[0.6rem] before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rotate-45 before:bg-red-700 opacity-0 group-hover/close:opacity-100 transition-all duration-700 group-hover/close:duration-200 pointer-events-none ">
                {clearForm && formData.message.length > 3
                  ? 'clearing'
                  : isDisabled
                    ? 'close'
                    : 'clear'}
              </span>
              <X size={24} />
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={cn(
            'flex w-full flex-col    h-full items-start',
            isMaximize
              ? 'sm:gap-y-6 lg:gap-y-8 gap-y-2 sm:pt-8 pt-4'
              : 'gap-y-2 pt-4'
          )}
        >
          <div className="flex items-center  w-full relative">
            <span
              className={cn(
                'absolute left-2 sm:left-3 text-header',
                isMaximize ? 'sm:font-medium' : ''
              )}
            >
              To:
            </span>
            <input
              type="email"
              placeholder="receiver..."
              id="receiver"
              name="receiver"
              className={cn(
                'w-full rounded-md sm:rounded-lg border border-gray-200  pr-2 pl-12 sm:pl-16 md:pr-4 outline-none focus-visible:border focus-visible:border-primary-light text-sm sm:text-base',
                isMaximize ? 'py-2 sm:py-4 ' : 'py-2'
              )}
              value={formData.receiver}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="flex items-center  w-full relative">
            <span
              className={cn(
                'absolute left-2 sm:left-3 text-header',
                isMaximize ? 'sm:font-medium' : ''
              )}
            >
              Subject:
            </span>
            <input
              type="text"
              placeholder="subject..."
              id="subject"
              name="subject"
              className={cn(
                'w-full rounded-md sm:rounded-lg border border-gray-200  pr-2 pl-20 sm:pl-24 md:pr-4 outline-none focus-visible:border focus-visible:border-primary-light text-sm sm:text-base',
                isMaximize ? 'py-2 sm:py-4 ' : 'py-2'
              )}
              value={formData.subject}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col   w-full">
            <textarea
              placeholder="message..."
              id="message"
              name="message"
              maxLength={messageLen}
              className={cn(
                'w-full rounded-md border border-gray-200 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light h-[150px]  resize-none sidebar-scroll text-xs min-[376px]:text-sm sm:text-base',
                isMaximize ? 'sm:h-[230px] lg:h-[250px] mb-2' : 'sm:h-[185px]'
              )}
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
            <WordCounter word={formData.message} length={messageLen} />
          </div>

          <div className="flex w-full justify-between items-center ">
            <div
              className={cn(
                'flex items-center ',
                isMaximize ? 'gap-x-4' : 'gap-x-2'
              )}
            >
              <div>
                <label
                  className="flex items-center gap-x-2   cursor-pointer"
                  htmlFor="file"
                >
                  <button type="button" className="pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12.5 23.5C15.54 23.5 18 21.04 18 18V6.5H16.5V18C16.5 20.21 14.71 22 12.5 22C10.29 22 8.5 20.21 8.5 18V5.5C8.5 4.83696 8.76339 4.20107 9.23223 3.73223C9.70107 3.26339 10.337 3 11 3C11.663 3 12.2989 3.26339 12.7678 3.73223C13.2366 4.20107 13.5 4.83696 13.5 5.5V16C13.5 16.55 13.05 17 12.5 17C11.95 17 11.5 16.55 11.5 16V6.5H10V16C10 16.663 10.2634 17.2989 10.7322 17.7678C11.2011 18.2366 11.837 18.5 12.5 18.5C13.163 18.5 13.7989 18.2366 14.2678 17.7678C14.7366 17.2989 15 16.663 15 16V5.5C15 3.29 13.21 1.5 11 1.5C8.79 1.5 7 3.29 7 5.5V18C7 21.04 9.46 23.5 12.5 23.5Z"
                        fill="#4E5256"
                      />
                    </svg>
                  </button>
                </label>
                <input
                  type="file"
                  hidden
                  accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, video/*"
                  name="file"
                  id="file"
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

              {/* EMOJI TRIGGER */}
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M15.5 11.5C15.8978 11.5 16.2794 11.342 16.5607 11.0607C16.842 10.7794 17 10.3978 17 10C17 9.60218 16.842 9.22064 16.5607 8.93934C16.2794 8.65804 15.8978 8.5 15.5 8.5C15.1022 8.5 14.7206 8.65804 14.4393 8.93934C14.158 9.22064 14 9.60218 14 10C14 10.3978 14.158 10.7794 14.4393 11.0607C14.7206 11.342 15.1022 11.5 15.5 11.5Z"
                    fill="#4E5256"
                  />
                  <path
                    d="M8.5 11.5C8.89782 11.5 9.27936 11.342 9.56066 11.0607C9.84196 10.7794 10 10.3978 10 10C10 9.60218 9.84196 9.22064 9.56066 8.93934C9.27936 8.65804 8.89782 8.5 8.5 8.5C8.10218 8.5 7.72064 8.65804 7.43934 8.93934C7.15804 9.22064 7 9.60218 7 10C7 10.3978 7.15804 10.7794 7.43934 11.0607C7.72064 11.342 8.10218 11.5 8.5 11.5Z"
                    fill="#4E5256"
                  />
                  <path
                    d="M12 18.5C14.28 18.5 16.22 16.84 17 14.5H7C7.78 16.84 9.72 18.5 12 18.5Z"
                    fill="#4E5256"
                  />
                  <path
                    d="M11.99 2.5C6.47 2.5 2 6.98 2 12.5C2 18.02 6.47 22.5 11.99 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 11.99 2.5ZM12 20.5C7.58 20.5 4 16.92 4 12.5C4 8.08 7.58 4.5 12 4.5C16.42 4.5 20 8.08 20 12.5C20 16.92 16.42 20.5 12 20.5Z"
                    fill="#4E5256"
                  />
                </svg>
              </button>
            </div>
            <button
              type="submit"
              tabIndex={0}
              aria-label="Remove"
              disabled={isDisabled}
              className={cn(
                'rounded-lg bg-primary-light text-white  px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light flex items-center gap-x-2',
                isMaximize
                  ? 'px-8 gap-x-5 h-[50px]'
                  : 'min-[450px]:w-[91px] h-[41px]'
              )}
            >
              <Send size={20} /> Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewMessageModal;
