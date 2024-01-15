'use client';
// pages/NotificationPreferencesPage.tsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NotificationPreferencesPage: React.FC = () => {
  const [openAll, setOpenAll] = useState(true);
  const [receiveEmail, setReceiveEmail] = useState(false);
  const [receiveMessage, setReceiveMessage] = useState(false);
  const [receiveClient, setReceiveClient] = useState(false);
  const [receiveTransaction, setReceiveTransaction] = useState(false);

  const handlePreferenceChange = (preference: string, value: boolean) => {
    toast.info(
      `${preference} preference is ${value ? 'enabled' : 'disabled'}`,
      {
        position: toast.POSITION.TOP_CENTER
      }
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Receive notifications in Email{' '}
      </h2>
      <div className="flex items-center justify-between mb-4">
        <div className="">Receive notifications in Email </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={openAll}
            onChange={() => {
              setOpenAll(!openAll);
              handlePreferenceChange('Open All Notifications', !openAll);
            }}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default NotificationPreferencesPage;
