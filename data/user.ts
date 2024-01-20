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
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/auth/login`, {
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

    const res = await data.json();
    if (data.status === 200 || res.ok) {
      console.log(res);

      return res;
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
    throw new Error('Something went wrong');
  }
};
