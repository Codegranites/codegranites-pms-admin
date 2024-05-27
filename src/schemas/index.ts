import * as z from 'zod';
import validator from 'validator';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, {
    message: 'Password is required'
  })
});

export const RegisterSchema = z.object({
  fullName: z.string().min(3, {
    message: 'Full name is required'
  }),
  phoneNumber: z.string().refine(validator.isMobilePhone, {
    message: 'Invalid phone number'
  }),
  email: z.string().email(),

  password: z.string().min(6, {
    message: 'Password must be at least 6 characters'
  })
});

export const CreateWorkSpaceSchema = z.object({
  workspaceName: z.string().min(5, {
    message: 'Workspace Name is requried'
  }),
  description: z.string().min(8, {
    message: 'Workspace Description must be at least 8 characters'
  })
});

export const InviteToWorkspaceSchema = z.object({
  email: z.string().email(),
  workspaceId: z.string().min(6, {
    message: 'an error occured'
  })
});
