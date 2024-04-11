import {
  SignInWithPasswordParameters,
  SignUpWithPasswordParameters,
} from '../interfaces';

export default abstract class AuthRepository {
  abstract signinWithPassword(
    parameters: SignInWithPasswordParameters,
  ): Promise<any>;
  abstract signUp(parameters: SignUpWithPasswordParameters): Promise<any>;
}
