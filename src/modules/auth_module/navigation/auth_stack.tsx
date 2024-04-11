import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationScreenOptions} from '../../../common/infrastructure/utils/navigation';
import SignInStack from '../modules/signin_module/navigation/signin_stack';
import SignUpStack from '../modules/signup_module/navigation/signup_stack';

import {authRoutes} from './auth_routes';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={navigationScreenOptions}>
      <Stack.Screen name={authRoutes.signinStack} component={SignInStack} />
      <Stack.Screen name={authRoutes.signupStack} component={SignUpStack} />
    </Stack.Navigator>
  );
}
