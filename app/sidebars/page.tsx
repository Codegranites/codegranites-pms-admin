import React from 'react';
import SidebarAdmin from '../../components/sidebars/SidebarAdmin';
import SidebarMod from '../../components/sidebars/SidebarMod';

const Sidebars = () => {
  return (
    <section className="w-full relative flex justify-between">
      {/* <SidebarAdmin /> */}
      <SidebarMod />
    </section>
  );
};

export default Sidebars;
