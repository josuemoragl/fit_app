import * as React from 'react';
import {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  PaperProvider,
} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {useAtom} from 'jotai';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import sessionAtom, {
  defaultSession,
} from './src/common/infrastructure/state/atoms/session_atom';
import MainStack from './src/common/presentation/navigation/main_navigation';
import useTheme from './src/common/presentation/theme/hooks/use_theme';
import {ThemeProvider} from './src/common/presentation/theme/theme_provider';
import {
  Brightness,
  ThemeData,
} from './src/common/presentation/theme/themeData/interfaces';
import {supabase} from './src/supabase';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

interface AppProps {
  theme: ThemeData;
}

function App({theme}: AppProps) {
  const isDarTheme = theme.colorScheme.brightness === Brightness.dark;
  const navigationTheme = isDarTheme ? DarkTheme : DefaultTheme;

  const appTheme = {
    ...navigationTheme,
    colors: {
      ...navigationTheme.colors,
      background: theme.colorScheme.background.value,
      card: theme.cardTheme.color.value,
    },
  };

  const paperCurrentTheme: MD3Theme = isDarTheme ? MD3DarkTheme : MD3LightTheme;

  const paperTheme: MD3Theme = {
    ...paperCurrentTheme,
    colors: {
      ...paperCurrentTheme.colors,
      primary: theme.colorScheme.primary.value,
    },
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer theme={appTheme}>
        <PaperProvider theme={paperTheme}>
          <ApolloProvider client={client}>
            <MainStack />
          </ApolloProvider>
        </PaperProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

function ThemeWrapper(): React.ReactElement {
  const theme = useTheme();
  return <App theme={theme} />;
}

export default function AppWrapper(): React.ReactElement {
  const [_, setSession] = useAtom(sessionAtom);
  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({data: {session}}) => {
        if (session) {
          setSession({isLoggedIn: true, session});
        }
      })
      .finally(() => {
        setTimeout(() => {
          SplashScreen.hide();
        }, 1000);
      });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession({isLoggedIn: true, session});
      } else {
        setSession(defaultSession);
      }
    });
  }, [setSession]);

  return (
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  );
}
