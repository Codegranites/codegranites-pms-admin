'use client';

import React, { useState } from 'react';
import DashNav from '@/components/dashboard/navs/dashnav';
import Project from './components/project';
import Transaction from './components/transaction';
import History from './components/history';
import NewClientModal from '@/components/admin/clients/NewClient';

const AdminDashboard = () => {
  return (
    <>
      <section className="min-h-[1140px] w-full flex flex-col  pt-8 h-full">
        <DashNav />
        <div className="flex-col flex lg:flex-row flex-1  w-full sm:px-3 mt-8 py-6 mb-6  h-full ">
          <div className="lg:w-[60%] w-full h-full flex-1">
            <Project />
          </div>
          <div className="flex-col lg:w-[40%] w-full h-full flex-1">
            <History />
            <Transaction />
          </div>
        </div>
      </section>
      <NewClientModal />
    </>
  );
};

export default AdminDashboard;
