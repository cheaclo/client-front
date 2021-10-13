import { Response } from './response';
import { User } from './user';

export interface SignIn {
  response: Response;
  user: User;
}
