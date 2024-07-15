import {AppState} from 'react-native';

import {SUPABASE_KEY, SUPABASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

import 'react-native-url-polyfill/auto';

export default function useSupabase() {
  console.log({SUPABASE_URL, SUPABASE_KEY});

  const init = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        debug: true,
      },
    });

    AppState.addEventListener('change', state => {
      if (state === 'active') {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    return supabase;
  };

  return {
    init,
  };
}
