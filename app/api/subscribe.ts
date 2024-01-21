import Calls from './call';
import { toast } from 'react-toastify';
import { ContactFormProps } from '@/types';
import { ApiResponse } from '@/types';

const BaseUrl = 'https://codegranites-backend.onrender.com/api/email';
const $Http = Calls(BaseUrl);

export const ContactUs = async (props: ContactFormProps): Promise<any> => {
  try {
    if (
      !props.firstname ||
      !props.lastname ||
      !props.email ||
      !props.phonenumber ||
      !props.companyname ||
      !props.subject ||
      !props.message
    ) {
      showToast('error', 'All fields are required');
      throw new Error('All fields are required');
    }

    const res = (await $Http.post('/contact', props)) as ApiResponse;

    if (res?.status === 200) {
      showToast('success', 'Thank you for contacting us!');
      console.log('sucess');
    } else {
      showToast(
        'error',
        'An unexpected error occurred. Please try again later.'
      );
      console.log('error');
    }

    return res?.data;
  } catch (error) {
    if (isApiResponseError(error)) {
      handleApiError(error);
      throw error.response.data || { message: error.message };
    } else {
      console.error('Unhandled error:', error);
      throw {
        message: 'An unexpected error occurred. Please try again later.'
      };
    }
  }
};

const isApiResponseError = (error: any): error is ApiResponse => {
  return (
    error?.response?.status !== undefined && error?.response?.data !== undefined
  );
};

const showToast = (type: 'success' | 'error', message: string): void => {
  toast[type](message);
};

const handleApiError = (error: ApiResponse): void => {
  if (error.response.status === 400) {
    handleValidationErrors(error.response.data?.errors);
  } else {
    showToast('error', 'An unexpected error occurred. Please try again later.');
  }
};

const handleValidationErrors = (
  validationErrors: Record<string, string> | undefined
): void => {
  if (validationErrors) {
    Object.values(validationErrors).forEach(error => showToast('error', error));
  } else {
    showToast('error', 'User already exists. Please sign in to continue.');
  }
};

export const subscribeToEmail = async (data: { email: string }) => {
  try {
    const res = await $Http.post('/subscribe', data);
    return res?.data;
  } catch (e: any) {
    throw e?.response?.data || { message: e.message };
  }
};
