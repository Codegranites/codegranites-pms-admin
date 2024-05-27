// import Calls from './call';
// import { toast } from 'react-toastify';

// export const BaseUrl = 'https://pms-backend-rvoy.onrender.com/';

// const $AuthHttp = Calls(BaseUrl);

// export async function changePassword(props: {
//     accountId: string,
//     oldPassword: string,
//     newPassword: string
// }): Promise<{ status: number }> {
//   try {
//     const resetResponse = await $AuthHttp.post('/setting/password', props);
//     console.log(resetResponse)

//     if (resetResponse.status === 200) {
//       toast.success('Password Reset successfully');
//     }
//     return resetResponse;
//   } catch (error) {
//     console.log(error);
//     toast.error('An error occured');
//     return { status: 400 };
//   }
// }

// // james@#$2D

'use server';

import Calls from '@/app/api/call';
import { CreateWorkSpaceSchema } from '@/schemas';
import { cookies } from 'next/headers';
import * as z from 'zod';

const BaseUrl =
  process.env.NEXT_PUBLIC_BASEURL ?? 'https://pms-backend-rvoy.onrender.com';

const $Http = Calls(BaseUrl);

export const changePassword = async (props: {
  accountId: string;
  oldPassword: string;
  newPassword: string;
}) => {
  const authToken = cookies()?.get('access_token');

  if (!authToken) {
    return {
      error: 'Unauthorized. Missing access token.'
    };
  }

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  };

  try {
    const res = await $Http.post('/setting/password', props, config);
    console.log(res);
    if (res.status === 200) {
      return {
        success: 'Password Changed successfully'
      };
    } else if (res.status === 500) {
      return {
        error: 'Internal server error'
      };
    } else {
      return {
        error: res.data ?? 'Unknown error occurred. Please try again later.'
      };
    }
  } catch (error) {
    console.log(error);
    console.error('API request failed:', error);
    return {
      error: 'An error occurred while processing the request.'
    };
  }
};
