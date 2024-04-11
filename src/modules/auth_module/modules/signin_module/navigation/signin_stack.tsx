import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationScreenOptions} from '../../../../../common/infrastructure/utils/navigation';
import SignInScreen from '../screens/signin_screen';

import {signinRoutes} from './signin_routes';

const Stack = createNativeStackNavigator();

export default function SignInStack() {
  return (
    <Stack.Navigator screenOptions={navigationScreenOptions}>
      <Stack.Screen name={signinRoutes.signinScreen} component={SignInScreen} />
    </Stack.Navigator>
  );
}
