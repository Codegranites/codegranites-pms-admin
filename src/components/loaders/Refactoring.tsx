import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const Refactoring = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-full lg:scale-150">
      <LoadingSpinner />
      <p className="animate-pulse text-3xl">Refactoring</p>
    </div>
  );
};

export default Refactoring;
