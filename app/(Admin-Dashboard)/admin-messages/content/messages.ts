export type MessageProps = {
  id?: number;
  author: string;
  message: string;
  stack: string;
  date: string;
  time: string;
  status: string;
};

export const MESSAGES: MessageProps[] = [
  {
    id: 1,
    author: 'Stella Vinx',
    message: 'this is the message content this is the message content',
    stack: 'Designer',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'sent'
  },
  {
    id: 2,
    author: 'Matthew Lang',
    message:
      'this is the message content this is the message content this is the message content this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'received'
  },
  {
    id: 3,
    author: 'Llama Smith',
    message: 'this is the message content this is the message content',
    stack: 'AI Researcher',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'draft'
  },
  {
    id: 4,
    author: 'Avery Ains',
    message: 'this is the message content this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'inbox'
  },
  {
    id: 5,
    author: 'John Doe',
    message: 'this is the message content this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'sent'
  },
  {
    id: 6,
    author: 'John Doe',
    message: 'this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'draft'
  },
  {
    id: 7,
    author: 'John Doe',
    message: 'this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'inbox'
  },
  {
    id: 8,
    author: 'John Doe',
    message: 'this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'received'
  },
  {
    id: 9,
    author: 'John Doe',
    message: 'this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'draft'
  },
  {
    id: 10,
    author: 'John Doe',
    message: 'this is the message content',
    stack: 'App Developement',
    date: '11, Nov, 2023',
    time: '12:00pm',
    status: 'sent'
  }
];
