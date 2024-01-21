import React from 'react';
import AdminClientNav from '../../../components/admin/clients/AdminClientNav';
import AdminClientContainer from '../../../components/admin/clients/AdminClientContainer';

const ClientsAdmin = () => {
  return (
    <section className="w-full h-full min-[1140px]:px-9 px-3 pt-8 flex flex-col gap-y-6 md:gap-y-9 lg:gap-y-16">
      <AdminClientNav />

      <AdminClientContainer />
    </section>
  );
};

export default ClientsAdmin;
