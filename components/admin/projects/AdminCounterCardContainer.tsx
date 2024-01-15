'use client';
import React from 'react';
import CounterCard from '../card/CounterCard';
import { PROJECT_COUNTERS } from '../../../libs/projects';

const AdminCounterCardContainer = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4  py-6">
      {PROJECT_COUNTERS.map(counter => (
        <CounterCard
          key={counter.label}
          count={counter.count}
          label={counter.label}
        />
      ))}
    </div>
  );
};

export default AdminCounterCardContainer;
