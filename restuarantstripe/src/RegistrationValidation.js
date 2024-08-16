import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username: Yup.string()
      .max(20, 'Username cannot exceed 20 characters')
      .matches(/^[a-zA-Z0-9]+$/, 'No special characters allowed')
      .required('Username is required').min(3,'Username must have 3 characters atleast'),
    email: Yup.string()
      .email('Invalid email format')
      .matches(/@/, 'Email must be valid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .required('Password is required').matches(/[0-9]/, 'Password must contain at least one number') .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });