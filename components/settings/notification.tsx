'use client';
import React, { useState } from 'react';
import { Notification } from '@/types';
import Image from 'next/image';
import Button from '@ui/Button';

const mockData: Notification[] = [
  {
    id: 1,
    type: 'notification',
    message: 'This is a notification message.',
    date: '2023-01-01',
    time: '12:00 PM'
  },
  {
    id: 2,
    type: 'message',
    message: 'You have a new message.',
    date: '2023-01-02',
    time: '01:30 PM'
  },
  {
    id: 3,
    type: 'client',
    message: 'New client registered.',
    date: '2023-01-03',
    time: '03:45 PM'
  },
  {
    id: 4,
    type: 'transaction',
    message: 'Transaction completed successfully.',
    date: '2023-01-04',
    time: '05:15 PM'
  },
  {
    id: 5,
    type: 'notification',
    message: 'Another notification.',
    date: '2023-01-05',
    time: '08:00 AM'
  },
  {
    id: 6,
    type: 'message',
    message: 'You received a message.',
    date: '2023-01-06',
    time: '10:45 AM'
  },
  {
    id: 7,
    type: 'client',
    message: 'Client update: Important information.',
    date: '2023-01-07',
    time: '02:30 PM'
  },
  {
    id: 8,
    type: 'transaction',
    message: 'New transaction initiated.',
    date: '2023-01-08',
    time: '04:20 PM'
  },
  {
    id: 9,
    type: 'notification',
    message: 'A special notification for you.',
    date: '2023-01-09',
    time: '06:15 PM'
  },
  {
    id: 10,
    type: 'message',
    message: 'Important message: Please read.',
    date: '2023-01-10',
    time: '09:30 AM'
  },
  {
    id: 11,
    type: 'client',
    message: 'Client account update completed.',
    date: '2023-01-11',
    time: '11:55 AM'
  },
  {
    id: 12,
    type: 'transaction',
    message: 'Transaction pending approval.',
    date: '2023-01-12',
    time: '03:10 PM'
  },
  {
    id: 13,
    type: 'notification',
    message: 'Special offer just for you!',
    date: '2023-01-13',
    time: '05:45 PM'
  },
  {
    id: 14,
    type: 'message',
    message: 'You have a new private message.',
    date: '2023-01-14',
    time: '07:20 AM'
  },
  {
    id: 15,
    type: 'client',
    message: 'Client feedback received.',
    date: '2023-01-15',
    time: '10:00 AM'
  },
  {
    id: 16,
    type: 'transaction',
    message: 'Successful payment processed.',
    date: '2023-01-16',
    time: '12:15 PM'
  },
  {
    id: 17,
    type: 'notification',
    message: 'A new notification has arrived.',
    date: '2023-01-17',
    time: '02:30 PM'
  },
  {
    id: 18,
    type: 'message',
    message: 'New message alert.',
    date: '2023-01-18',
    time: '04:45 PM'
  },
  {
    id: 19,
    type: 'client',
    message: 'Client account update in progress.',
    date: '2023-01-19',
    time: '07:00 PM'
  },
  {
    id: 20,
    type: 'transaction',
    message: 'Transaction failed: Insufficient funds.',
    date: '2023-01-20',
    time: '09:15 AM'
  }
];

const NotificationPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredNotifications =
    activeFilter === 'all'
      ? mockData
      : mockData.filter(notification => notification.type === activeFilter);

  return (
    <div className="mx-auto">
      <div className="flex items-center mb-4">
        {['all', 'notification', 'messages', 'client', 'transaction'].map(
          filter => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`mr-2 p-2 border rounded-md  w-[170px] h-[60px] text-[#9C9C9C] font-normal text-lg ${
                activeFilter === filter
                  ? 'bg-primary-light w-[170px] h-[60px] text-white'
                  : 'bg-white'
              }`}
            >
              {filter}
            </Button>
          )
        )}
      </div>
      <hr className="mb-4" />
      {filteredNotifications.length > 0 ? (
        filteredNotifications.map(notification => (
          <div key={notification.id} className="mb-4">
            <div className="flex justify-between items-center text-lg mb-2">
              <div className="font-normal">{notification.message}</div>
              <div className="text-black">
                {notification.date}, {notification.time}
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center">
          <Image
            src="/emptystate.svg"
            alt="No messages"
            width={500}
            height={320}
            className="mb-4"
          />
          <p className="text-black">You have no notifications yet</p>
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
