'use client';

import React, { useState } from 'react';
import LangPrefences from '@/components/settings/preference';
import DeleteAccount from '@/components/admin/modals/deleteAccount';
import Button from '@ui/Button';
import ThemePrefences from '@/components/settings/theme';

const AccountPreference = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDelete = () => {
    // Implement  delete logic here
    console.log('Workspace deleted');
    // Close the modal after deletion
    setIsModalOpen(false);
  };
  return (
    <div className="flex-col justify-between h-full  md:p-[50px] p-[20px]">
      <div className="flex gap-y-8 flex-col">
        <LangPrefences />
        <ThemePrefences />
      </div>
      <div className="flex-grow">
        <Button
          onClick={() => setIsModalOpen(true)}
          size={'md'}
          className="bg-transparent border-error border hover:bg-error w-[250px] h-[70px] text-xl font-medium hover:text-white text-error"
        >
          Delete Account
        </Button>
        <DeleteAccount
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default AccountPreference;
