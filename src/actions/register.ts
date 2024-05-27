'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

const BaseUrl = 'https://pms-backend-rvoy.onrender.com';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(values);
  if (!validatedFields.success) {
    return {
      error: 'Login Failed. Please check your email and password.'
    };
  }
  try {
    const data = await fetch(`${BaseUrl}/account/register`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        credentials: 'include'
      },
      body: JSON.stringify(values)
    });
    console.log(data.status);
    const res = await data.json();
    if (data.status === 201 || res.ok) {
      console.log(res);

      return {
        success: 'Account created successfully, check your email!'
      };
    }
    if (data.status === 400) {
      return {
        error: 'Email or Phone number already exist'
      };
    }

    return {
      error: res.message
    };
  } catch (error) {
    console.log(error);
    return {
      error: 'Something went wrong.'
    };
  }

  // return { success: 'Login successful, check your email!' };
};
