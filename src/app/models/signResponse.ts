import { User } from './user';

export interface SignResponse {
  success: string;
  message: string;
  user: User;
}
