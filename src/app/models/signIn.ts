import { User } from './user';

export interface SignIn {
  success: string;
  message: string;
  user: User;
}
