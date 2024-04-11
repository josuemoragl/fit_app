import React from 'react';
import {useAtomValue} from 'jotai';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from '../../../modules/auth_module/navigation/auth_stack';
import SessionStack from '../../../modules/session_module/navigation/session_stack';
import sessionAtom from '../../infrastructure/state/atoms/session_atom';
import {navigationScreenOptions} from '../../infrastructure/utils/navigation';

import {mainRoutes} from './main_routes';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const session = useAtomValue(sessionAtom);

  if (!session.isLoggedIn) {
    return (
      <Stack.Navigator screenOptions={navigationScreenOptions}>
        <Stack.Screen name={mainRoutes.authSTack} component={AuthStack} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={navigationScreenOptions}>
      <Stack.Screen name={mainRoutes.sessionStack} component={SessionStack} />
    </Stack.Navigator>
  );
}
