import { StaticImageData } from 'next/image';
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6
} from '../public';

export type AdminClientCardProps = {
  id?: number;
  image: string | StaticImageData;
  name: string;
  job_title: string;
  email: string;
  number_projects?: number;
  gender?: string;
  country?: string;
  phone?: string;
  city?: string;
  address?: string;
  client_id?: string;
  bio?: string;
  website?: string;
  projects?: string[];
};

export const ADMIN_CLIENTS: AdminClientCardProps[] = [
  {
    id: 1,
    image: client1,
    name: 'Shane Black',
    job_title: 'CEO Engineer',
    email: 'wvX8M@example.com',
    number_projects: 5,
    gender: 'Male',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 2,
    image: client2,
    name: 'Stephenie Smith',
    job_title: 'Software Engineer',
    email: 'wvX8M@example.com',
    number_projects: 2,
    gender: 'female',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 3,
    image: client3,
    name: 'Suzie Black',
    job_title: 'CEO Engineer',
    email: 'wvX8M@example.com',
    number_projects: 2,
    gender: 'female',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 4,
    image: client4,
    name: 'Shane Black',
    job_title: 'Software Engineer',
    email: 'wvX8M@example.com',
    number_projects: 5,
    gender: 'Male',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 5,
    image: client5,
    name: 'Carl Black',
    job_title: 'Software Engineer',
    email: 'wvX8M@example.com',
    number_projects: 5,
    gender: 'Male',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 6,
    image: client6,
    name: 'Lee Peters',
    job_title: 'Software Engineer',
    email: 'wvX8M@example.com',
    number_projects: 5,
    gender: 'Male',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 7,
    image: client1,
    name: 'Shane Black',
    job_title: 'Software Engineer',
    email: 'wvX8M@example.com',
    number_projects: 5,
    gender: 'Male',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 8,
    image: client2,
    name: 'Shane Black',
    job_title: 'Software Engineer',
    email: 'wvX8M@example.com',
    number_projects: 5,
    gender: 'female',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  },
  {
    id: 9,
    image: client3,
    name: 'Shane Black',
    job_title: 'Software Engineer',
    email: 'wvX8M@example.com',
    number_projects: 5,
    gender: 'female',
    country: 'United States',
    phone: '+1 123 456 7890',
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    client_id: '12345',
    bio: `I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation`
  }
];
