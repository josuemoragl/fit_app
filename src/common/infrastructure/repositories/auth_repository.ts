import AuthDatasource from '../../domain/datasources/auth_datasource';
import {
  SignInWithPasswordParameters,
  SignUpWithPasswordParameters,
} from '../../domain/interfaces';
import AuthRepository from '../../domain/repositories/auth_repository';

export default class AuthRepositoryImpl extends AuthRepository {
  constructor(private datasource: AuthDatasource) {
    super();
  }
  async signinWithPassword(
    parameters: SignInWithPasswordParameters,
  ): Promise<any> {
    return await this.datasource.signinWithPassword(parameters);
  }
  async signUp(parameters: SignUpWithPasswordParameters): Promise<any> {
    return await this.datasource.signUp(parameters);
  }
}
