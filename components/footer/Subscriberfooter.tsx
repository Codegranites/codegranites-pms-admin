'use client';

import React, { useState } from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';
import { toast } from 'react-toastify';
import { subscribeToEmail } from '@/app/api/subscribe';

const SubscribeFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await subscribeToEmail({ email });

      console.log('Response from subscribeToEmail:', response);

      toast.success('Subscription successful!');

      setEmail('');
    } catch (error) {
      console.error('Error from subscribeToEmail:', error);
      toast.error('Error subscribing to email. Please try again.');
    }
  };

  return (
    <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] flex flex-col border border-gray-300 rounded-lg p-2 sm:px-2 sm:py-4 max-[550px]:py-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label
          htmlFor="subscribe"
          className="font-medium text-sm sm:text-base text-color-600 "
        >
          Subscribe to our newsletter
        </label>
        <div className="w-full flex border border-gray-300  rounded-lg pl-2 pr-1 py-1 mt-1 sm:mt-2 max-[550px]:mt-2 justify-between">
          <input
            type="email"
            id="subscribe"
            name="email"
            placeholder="Enter your email.."
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={email}
            onChange={e => setEmail(e.target.value.toLowerCase().trim())}
            className="border-none outline-none rounded-lg w-full pr-2"
          />
          <button
            type="submit"
            className="w-[30px] sm:w-[40px] h-[26px] sm:h-[36px] bg-[#292D32] flex justify-center items-center text-white text-2xl lg:text-3xl rounded-md "
          >
            <MdOutlineChevronRight />
          </button>
        </div>
      </form>
      <div className="hidden lg:flex flex-col gap-y-3 mt-10">
        <p className="font-medium text-lg text-color-600 ">About Us</p>
        <p className="text-sm text-color-normal">
          Innovators in digital solutions, blending creativity with expertise to
          elevate ideas and empower innovation. Your trusted partner for
          cutting-edge software development, where challenges become
          opportunities and visions become reality.
        </p>
      </div>
    </div>
  );
};

export default SubscribeFooter;
