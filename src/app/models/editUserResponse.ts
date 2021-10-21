import { User } from './user';

export interface EditUserResponse {
  success: boolean;
  message: string;
  user: User;
}
