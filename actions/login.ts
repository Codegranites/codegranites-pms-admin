'use server';

import { LoginSchema } from '@/schemas';
import * as z from 'zod';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { jwtDecode } from 'jwt-decode';
import { UserDetails } from '@/types';
const BaseUrl = 'https://pms-backend-rvoy.onrender.com';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const cookie = cookies();
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: 'Login Failed. Please check your email and password.'
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const data = await fetch(`${BaseUrl}/auth/login`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        credentials: 'include'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    console.log(data.status);
    const res = await data.json();
    if (data.status === 200 || res.ok) {
      signIn(res.token);
      cookie.set('access_token', res.token, {
        maxAge: 60 * 60 * 24 * 1, // 1 day
        httpOnly: true,
        path: '/',
        priority: 'high'
      });
      const decodedToken = jwtDecode(res.token) as UserDetails;
      if (decodedToken) {
        const user = {
          email: decodedToken.email,
          name: decodedToken.name,
          accountId: decodedToken.accountId,
          role: decodedToken.role
        };
        cookie.set('user', JSON.stringify(user), {
          maxAge: 60 * 60 * 24 * 1, // 1 day

          path: '/',
          priority: 'high'
        });
      }
      console.log(res);

      return {
        success: 'Login successful!',
        redirect: DEFAULT_LOGIN_REDIRECT,
        user: decodedToken
      };
    }
    if (data.status === 400) {
      return {
        error: 'Email or Phone number already exist'
      };
    }
    if (data.status === 404) {
      return {
        error: 'User not found, sign up instead!'
      };
    }
    if (data.status === 500) {
      return {
        error: 'Something went wrong.'
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
};
