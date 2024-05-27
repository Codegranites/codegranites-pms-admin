'use client';

import React, { useState } from 'react';
import Button from '@ui/Button';
import { toast } from 'react-toastify';
import { Input } from '@/components/ui/Input';
import { useStateCtx } from '@/context/StateContext';

// Mock user data
const mockUserData = {
  fullname: 'John Doe',
  username: 'john_doe',
  jobTitle: 'Software Engineer',
  organization: 'Tech Co.'
};

// Simulate updating user data in the backend
const updateUserInBackend = async (userData: {
  fullname: string;
  username: string;
  jobTitle: string;
  organization: string;
}) => {
  /*
  try {
    const response = await fetch('/api/updateUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, error: 'Backend error' };
  }
  */

  return { success: true, message: 'User updated successfully', error: false };
};

function UpdateForm() {
  const { user } = useStateCtx();
  const [formData, setFormData] = useState(mockUserData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Simulate updating user data in the backend
    const result = await updateUserInBackend(formData);
    if (result.success) {
      toast.success('User updated successfully');
      // Handle success, e.g., show a success message
    } else if (result?.error) {
      toast.error(`Error updating user: ${result.error}`);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="w-[620px] max-w-[680px] px-[32px] justify-center items-center dark:text-white">
      <form className="w-[500px]">
        <label className="font-semibold text-2xl">
          Full Name
          <Input
            type="text"
            name="fullname"
            placeholder="enter fullname"
            value={user.name ?? formData.fullname}
            onChange={handleChange}
            className="text-lg font-normal w-[500px] h-[60px] dark:bg-white text-black"
          />
        </label>
        <br />
        <label className="font-semibold text-2xl ">
          Username{' '}
          <span className="font-normal text-sm">
            (What do you want to be called?)
          </span>
          <Input
            type="text"
            name="username"
            placeholder="enter userName"
            value={user.name ?? formData.username}
            onChange={handleChange}
            className="text-lg font-normal w-[500px] h-[60px] dark:bg-white text-black"
          />
        </label>
        <br />
        <label className="font-semibold text-2xl mb-2 dark:text-white">
          Job Title
          <Input
            type="text"
            name="jobTitle"
            placeholder="enter job description"
            value={formData.jobTitle}
            onChange={handleChange}
            className="text-lg font-normal w-[500px] h-[60px] dark:bg-white text-black"
          />
        </label>
        <br />
        <label className="font-semibold text-2xl mb-2">
          Organization{' '}
          <Input
            type="text"
            name="organization"
            placeholder="enter organization name"
            value={formData.organization}
            onChange={handleChange}
            className="text-lg font-normal w-[500px] h-[60px] dark:bg-white text-black"
          />
        </label>
        <br />
      </form>
      <Button
        intent={'primary'}
        onClick={handleSubmit}
        className="w-[250px] h-[70px] dark:bg-white dark:text-primary text-[20px] font-medium leading-4 "
      >
        Update Profile
      </Button>
    </div>
  );
}

export default UpdateForm;
