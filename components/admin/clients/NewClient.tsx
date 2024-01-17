'use client';

import { X } from 'lucide-react';

import { useEffect, useRef, useState } from 'react';

import { Add } from 'iconsax-react';
import { useStateCtx } from '../../../context/StateContext';

import { cn } from '../../../utils/util';
import Image from 'next/image';

type FormProps = {
  id?: number;
  image: File | Blob | undefined;
  name: string;
  job_title: string;
  email: string;
  phone: string;

  number_projects?: number;

  project?: string;
};

const NewClientModal = () => {
  const { createClientModal, setCreateClientModal } = useStateCtx();
  const [addInput, setAddInput] = useState([1]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<FormProps>({
    image: undefined,
    name: '',
    job_title: '',
    email: '',
    phone: '',
    project: ''
  });

  const isDisabled =
    !formData.image ||
    !formData.name ||
    !formData.job_title ||
    !formData.email ||
    !formData.phone;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateClientModal(false);
  };

  useEffect(() => {
    const readLocal = localStorage.getItem('create-client');
    if (readLocal) {
      setFormData(JSON.parse(readLocal));
    }
  }, []);

  useEffect(() => {
    if (!(formData.name.length > 3)) return;
    const newForm = { ...formData, image: undefined };

    localStorage.setItem('create-client', JSON.stringify(newForm));
  }, [formData]);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]',
          createClientModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setCreateClientModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="create-client"
        aria-modal
        className={cn(
          'py-6   flex flex-col w-[98%] sm:w-[95%]  min-[500px]:h-[750px] 2xl:h-[820px] max-w-[1000px] h-[600px] max-h-[1458px]  justify-between items-start bg-white backdrop-blur-lg  fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ',
          createClientModal
            ? '-translate-x-1/2 duration-700 opacity-100 sm:rounded-xl md:rounded-2xl'
            : '-translate-x-full duration-300 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-lg md:text-2xl font-medium text-header">
            Add Client
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setCreateClientModal(false)}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <section className="w-full h-full overflow-y-auto hide-scroll pt-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col md:flex-row gap-4 gap-y-8 md:gap-8  py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
          >
            {/* Client Image */}
            <div
              ref={scrollRef}
              className="flex w-[300px] h-[300px] max-md:w-full max-md:justify-center "
            >
              {formData.image ? (
                <div className="flex flex-col gap-y-2 h-full w-full relative overflow-hidden rounded-lg">
                  <Image
                    width={300}
                    height={300}
                    src={URL.createObjectURL(formData.image!)}
                    alt="Client"
                    className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:duration-700 hover:scale-150"
                  />
                  {/* @ts-ignore */}
                  <span className="absolute bottom-1 left-0 bg-gradient-to-r from-white via-white/50 to-white/5 px-2 w-full text-left font-medium">
                    {/* @ts-ignore */}
                    {formData.image?.name.length > 20
                      ? // @ts-ignore
                        formData.image?.name.slice(0, 20) + '...'
                      : // @ts-ignore
                        formData.image?.name}
                  </span>
                  <button
                    type="button"
                    tabIndex={0}
                    aria-label="Remove image"
                    onClick={() =>
                      setFormData({ ...formData, image: undefined })
                    }
                    className="text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full bg-white/60 backdrop-blur-sm absolute top-1 right-1 w-8 h-8 flex items-center justify-center hover:text-red-500 hover:bg-white/80 hover:brightness-150 transition-all duration-700 hover:duration-200"
                    title="Remove image"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <div
                  className={cn(
                    'flex w-full h-full min-h-[300px] items-center justify-center bg-[#f6f6f6] px-8',
                    {
                      hidden: formData.image
                    }
                  )}
                >
                  <label
                    htmlFor="client-image"
                    className="cursor-pointer flex flex-col items-center justify-center gap-y-3"
                  >
                    <button
                      role="span"
                      type="button"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center pointer-events-none"
                      tabIndex={-1}
                      aria-hidden
                    >
                      <Add size={24} color="#535353" />
                    </button>
                    <span className="text-xs sm:text-sm w-full text-center text-[#535353]">
                      Upload Profile photo
                    </span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="client-image"
                    name="image"
                    className="hidden"
                    onChange={e => {
                      const file = e.target.files && e.target.files[0];
                      setFormData({ ...formData, [e.target.name]: file });
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex w-full flex-col gap-y-4 sm:gap-y-6 pt-8 md:pt-0">
              {/* Client name */}
              <div className="flex flex-col  gap-y-2 w-full">
                <label htmlFor="client-name" className="font-medium">
                  Client name
                </label>
                <input
                  type="text"
                  placeholder="Enter name..."
                  id="client-name"
                  name="name"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.name}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

              {/* Client Title */}
              <div className="flex flex-col  gap-y-2 w-full">
                <label htmlFor="job_title" className="font-medium">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="e.g CEO..."
                  id="job_title"
                  name="job_title"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.job_title}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

              {/* Client Email */}
              <div className="flex flex-col  gap-y-2 w-full">
                <label htmlFor="email" className="font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.email}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

              {/* Client Phone */}
              <div className="flex flex-col  gap-y-2 w-full">
                <label htmlFor="phone" className="font-medium">
                  Phone number
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter phone..."
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.phone}
                  onChange={e => {
                    const inputVal = e.target.value;
                    const isValid = /^\+?\d*$/.test(inputVal);
                    if (isValid) {
                      setFormData({ ...formData, [e.target.name]: inputVal });
                    }
                  }}
                />
              </div>

              {/* Project Title*/}
              <div className="flex flex-col  gap-y-2 w-full">
                <label htmlFor="project" className="font-medium">
                  Project title
                </label>
                <input
                  type="text"
                  required
                  placeholder="Project title..."
                  id="project"
                  name="project"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.project}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

              <div className="flex w-full justify-end items-center gap-x-2 sm:gap-x-3 md:gap-x-6 mt-6">
                <button
                  type="button"
                  tabIndex={0}
                  aria-label="Cancel"
                  onClick={() => {
                    window?.localStorage.removeItem('create-client');
                    setFormData({
                      name: '',
                      job_title: '',
                      email: '',
                      phone: '',

                      image: undefined,

                      project: ''
                    });
                    setCreateClientModal(false);
                  }}
                  className={cn(
                    'rounded-lg border border-primary text-primary min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
                  )}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  tabIndex={0}
                  disabled={isDisabled}
                  aria-label="Remove"
                  className={cn(
                    'rounded-lg bg-primary-light text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light'
                  )}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default NewClientModal;
