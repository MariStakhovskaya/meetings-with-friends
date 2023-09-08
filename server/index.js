import express from 'express';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/userController.js';

mongoose
  .connect(
    'mongodb+srv://mariastachovskide:7xLAbOA27C6jiGtp@happyhours.pyu9vln.mongodb.net/happyhours?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login);

app.post('/auth/register', registerValidation, UserController.register);

app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(1234, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
