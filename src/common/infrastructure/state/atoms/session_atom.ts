import {atom} from 'jotai';

import {Session} from '@supabase/supabase-js';

export const defaultSession: UserSession = {
  isLoggedIn: true,
  session: {
    access_token: '',
    refresh_token: '',
    expires_in: 0,
    token_type: '',
    user: {
      id: '',
      app_metadata: {},
      user_metadata: {},
      aud: '',
      created_at: '',
    },
  },
};

interface UserSession {
  isLoggedIn: boolean;
  session: Session;
}

const sessionAtom = atom<UserSession>(defaultSession);

export default sessionAtom;
