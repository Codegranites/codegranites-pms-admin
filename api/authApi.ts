import Calls from './call';
import { toast } from 'react-toastify';

const BaseUrl = 'https://pms-backend-rvoy.onrender.com/';

const $AuthHttp = Calls(BaseUrl);

export const signUpUser = async (props: {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await $AuthHttp.post('/account/register', props);
    if (res?.status === 201) {
      toast.success('Registration successful!');
    }
    return res?.data;
  } catch (e: any) {
    if (e?.response?.status === 400) {
      if (e?.response?.data?.message === 'Validation failed') {
        const validationErrors = e?.response?.data?.errors;
        for (const errorKey in validationErrors) {
          toast.error(validationErrors[errorKey]);
        }
      } else {
        toast.error('User already exist. Please signin to continue.');
      }
    } else if (e?.response?.status === 409) {
      toast.error('Invalid Inputs');
    } else {
      toast.error(
        'An error occurred during registration. Please try again later.'
      );
    }
    throw e?.response?.data || { message: e.message };
  }
};

export const loginUser = async (props: { email: string; password: string }) => {
  try {
    const loginResponse = await $AuthHttp.post('/auth/login', props);

    if (loginResponse.status === 200) {
      console.log(loginResponse);
      console.log('Login successful');
      toast.success('Login successful');
      const token = loginResponse.data.token!;
      console.log(token);
      const userId = loginResponse.data.data.userId!;

      // if (token && userId) {
      // 	console.log('User ID:', userId);
      // 	console.log('Token:', token);
      // 	localStorage.setItem('authToken', token);
      // 	localStorage.setItem('userId', userId);
      // } else {
      // 	console.error('Error extracting token from login response.');
      // 	toast.error('An error occurred while extracting the token.');
      // }
    }

    console.log('Login response', loginResponse);
    return loginResponse?.data;
  } catch (e: any) {
    console.log('Login call error from API call', e);
    if (e?.response?.status === 404) {
      toast.error('Invalid credentials. Please check your email and password.');
    } else if (!e?.response) {
      toast.error('Network error. Please check your internet connection.');
    } else {
      toast.error('An error occurred during login. Please try again later.');
    }
    throw e?.response?.data || { message: e.message };
  }
};

export async function resetPassword(props: { email: string }) {
  try {
    const resetResponse = await $AuthHttp.post(
      `/account/${props.email}/send-reset-password-link`,
      props
    );

    if (resetResponse.status === 200) {
      toast.success('Password Reset link successfully sent');
    }
    return resetResponse;
  } catch (error) {
    toast.error('An error occured');
    return error;
  }
}

// james@#$2D
