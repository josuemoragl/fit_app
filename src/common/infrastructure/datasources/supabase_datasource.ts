import {AuthResponse, AuthTokenResponsePassword} from '@supabase/supabase-js';

import {supabase} from '../../../supabase';
import AuthDatasource from '../../domain/datasources/auth_datasource';
import {
  SignInWithPasswordParameters,
  SignUpWithPasswordParameters,
} from '../../domain/interfaces';

export default class SupabaseDataSource extends AuthDatasource {
  async signinWithPassword(
    parameters: SignInWithPasswordParameters,
  ): Promise<AuthTokenResponsePassword> {
    return await supabase.auth.signInWithPassword(parameters);
  }
  async signUp(
    parameters: SignUpWithPasswordParameters,
  ): Promise<AuthResponse> {
    return await supabase.auth.signUp(parameters);
  }
}
