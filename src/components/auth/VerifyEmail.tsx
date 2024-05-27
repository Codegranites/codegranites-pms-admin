import React from 'react';
import LoadingSpinner from '../loaders/LoadingSpinner';

const VerifyEmail = ({ token }: { token?: string }) => {
  return (
    <div className="w-full sm:w-[450px] flex flex-col gap-y-6 items-center justify-center  ">
      <LoadingSpinner />
      <div className="p-4 md:p-10 flex items-center gap-x-2 bg-primary-light">
        <p className="text-lg md:text-2xl lg:text-4xl font-medium text-white">
          Verifiying Email
        </p>
        <div className="button--loader  ">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
