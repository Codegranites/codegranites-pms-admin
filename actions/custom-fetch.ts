'use server';

import { getCredentials } from '@/auth';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

interface RefreshTokenProps {
  token: string;
  status: string;
  message: string;
}

const MAX_TIME_REFRESH = 60 * 1000; // 1 minute in milliseconds

/**
 * A server action to handle custom fetch requests
 *
 * @param path the BE path, e.g /auth/login
 * @param init the request body/content
 * @param req cookies header
 * @returns
 */

// Function to handle custom fetch requests
export const customFetch = async (
  path: string,
  init: RequestInit | undefined,
  req: NextRequest
) => {
  const cookie = cookies();
  // Get the user credentials
  const credentials = getCredentials(req);

  if (!credentials) {
    return { message: 'Unauthorized', status: 401 };
  }

  const theFetchRequest = makeFetch(path, credentials.token, init);

  if (credentials.expires! - (Date.now() + MAX_TIME_REFRESH) < 0) {
    // Try to refresh the token
    const newToken = (await refreshToken(
      credentials.token
    )) as RefreshTokenProps;
    if (newToken) {
      // Update the credentials
      const { token } = newToken;
      cookie.set('access_token', JSON.stringify(token), {
        maxAge: 60 * 60 * 24 * 1, // 1 day
        sameSite: 'strict',
        httpOnly: true,
        path: '/',
        priority: 'high'
      });

      // Re-try the fetch request
      return theFetchRequest(newToken.token);
    }

    // otherwise return response
    return newToken;
  }

  // token is refreshed
  return theFetchRequest();
};

function makeFetch(
  path: string,
  accessToken: string,
  init: RequestInit | undefined
): (newAccessToken?: string) => Promise<any> {
  return (newAccessToken?: string) => {
    return new Promise(resolve => {
      fetch(`${process.env.NEXT_PUBLIC_BASEURL}${path}`, {
        ...init,
        headers: {
          ...init?.headers,
          Authorization: `Bearer ${accessToken ?? newAccessToken}`
        }
      })
        .then(res => res.json())
        .then(data => resolve(data));
    });
  };
}

const refreshToken = async (tokenToRefresh: string) => {
  return new Promise(resolve => {
    fetch(`${process.env.NEXT_PUBLIC_BASEURL}/auth/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: tokenToRefresh })
    })
      .then(res => res.json())
      .then(data => resolve(data));
  });
};
