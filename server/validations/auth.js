import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'The password must be at least 6 characters long').isLength({ min: 6 }),
  body('fullName', 'Enter a name').isLength({ min: 3 }),
  body('phone', 'Phone number must be at least 9 characters').isLength({ min: 9 }),
  body('avatarUrl', 'Invalid avatar link').optional().isURL(),
];
