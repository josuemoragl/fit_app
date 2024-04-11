import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationScreenOptions} from '../../../../../common/infrastructure/utils/navigation';
import {signUpRoutes} from './signup_routes';
import SignUpScreen from '../screens/signup_screen';

const Stack = createNativeStackNavigator();

export default function SignUpStack() {
  return (
    <Stack.Navigator screenOptions={navigationScreenOptions}>
      <Stack.Screen name={signUpRoutes.signUpScreen} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
