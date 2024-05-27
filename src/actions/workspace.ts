'use server';

import Calls from '@/app/api/call';
import { CreateWorkSpaceSchema, InviteToWorkspaceSchema } from '@/schemas';
import { cookies } from 'next/headers';
import * as z from 'zod';

const BaseUrl =
  process.env.NEXT_PUBLIC_WORKSPACEURL ??
  'https://codegranite-api.onrender.com';

const $Http = Calls(BaseUrl);

export const createWorkspace = async (
  values: z.infer<typeof CreateWorkSpaceSchema>
) => {
  const validatedFields = CreateWorkSpaceSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Input error. Please check your input.'
    };
  }

  const authToken = cookies()?.get('access_token')?.value;

  if (!authToken) {
    return {
      error: 'Unauthorized. Missing access token.'
    };
  }

  const config = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  };
  // const { workspaceName, description } = validatedFields.data;

  const description = validatedFields.data.description;
  const name = validatedFields.data.workspaceName;

  const values1 = { name, description };

  try {
    const res = await $Http.post('/workspace/create', values1, config);
    if (res.status === 201) {
      return {
        success: 'Workspace created successfully'
      };
    } else if (res.status === 401) {
      return {
        error: 'Unauthorized. Invalid access token.'
      };
    } else if (res.status === 404) {
      return {
        error: 'Unable to create workspace. Resource not found.'
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
    console.error('API request failed:', error);
    return {
      error: 'An error occurred while processing the request.'
    };
  }
};

export const getWorkspace = async () => {
  const authToken = cookies()?.get('access_token')?.value;
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
    const res = await $Http.get('/workspace/view', config);
    if (res.status === 201) {
      return {
        success: 'Workspace retrieved successfully',
        workspace: res.data.data
      };
    } else if (res.status === 401) {
      return {
        error: 'Unauthorized. Invalid access token.'
      };
    } else if (res.status === 500) {
      return {
        error: 'Server error'
      };
    } else {
      return {
        error: 'Unknown error occurred. Please try again later.'
      };
    }
  } catch (error) {
    return {
      error: 'An error occurred while processing the request.'
    };
  }
};

export const InviteClient = async (props: {
  email: string;
  workspaceId: any;
}) => {
  const authToken = cookies()?.get('access_token')?.value;

  if (!authToken) {
    return {
      error: 'Unauthorized. Missing access token.'
    };
  }

  const config = {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  };

  try {
    const res = await $Http.post('/workspace/invite', props, config);
    if (res.status === 200) {
      return {
        success: 'Invite sent successfully'
      };
    } else if (res.status === 401) {
      return {
        error: 'Unauthorized. Invalid access token.'
      };
    } else if (res.status === 404) {
      return {
        error: 'Unable to create workspace. Resource not found.'
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
    console.error('API request failed:', error);
    return {
      error: 'An error occurred while processing the request.'
    };
  }
};
