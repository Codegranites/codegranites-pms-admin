import { login } from '@/actions/login';

export const getUserById = async (id: string) => {
  try {
    // logic here
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    return {
      id: '123',
      name: 'John Doe',
      email,
      password: null
    };
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const signinUser = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const data = await login({ email, password });
  if (data?.error) {
    throw new Error(data.error);
  }
  return data?.token;
};
