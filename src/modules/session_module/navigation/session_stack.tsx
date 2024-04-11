import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationScreenOptions} from '../../../common/infrastructure/utils/navigation';
import HomeStack from '../modules/home_module/navigation/home_drawer';

import {sessionRoutes} from './session_routes';

const Stack = createNativeStackNavigator();

export default function SessionStack() {
  return (
    <Stack.Navigator screenOptions={navigationScreenOptions}>
      <Stack.Screen name={sessionRoutes.homeStack} component={HomeStack} />
    </Stack.Navigator>
  );
}
