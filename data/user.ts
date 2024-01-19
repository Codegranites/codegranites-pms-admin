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

export const signinUser = async () => {
  'use server';
  try {
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
