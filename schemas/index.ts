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
