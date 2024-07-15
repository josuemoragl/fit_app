import {AuthResponse, AuthTokenResponsePassword} from '@supabase/supabase-js';

import AuthDatasource from '../../domain/datasources/auth_datasource';
import {
  SignInWithPasswordParameters,
  SignUpWithPasswordParameters,
} from '../../domain/interfaces';

export default class SupabaseDataSource extends AuthDatasource {
  supabase;
  constructor(client: any) {
    super();
    this.supabase = client;
  }
  async signinWithPassword(
    parameters: SignInWithPasswordParameters,
  ): Promise<AuthTokenResponsePassword> {
    return await this.supabase.auth.signInWithPassword(parameters);
  }
  async signUp(
    parameters: SignUpWithPasswordParameters,
  ): Promise<AuthResponse> {
    return await this.supabase.auth.signUp(parameters);
  }
}
