import {
  SignInWithPasswordParameters,
  SignUpWithPasswordParameters,
} from '../interfaces';

export default abstract class AuthDatasource {
  abstract signinWithPassword(
    parameters: SignInWithPasswordParameters,
  ): Promise<any>;
  abstract signUp(parameters: SignUpWithPasswordParameters): Promise<any>;
}
