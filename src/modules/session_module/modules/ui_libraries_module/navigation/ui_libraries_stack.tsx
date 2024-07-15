import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationScreenOptions} from '../../../../../common/infrastructure/utils/navigation';
import GlueSTackStack from '../modules/glue_stack_ui_module/navigation/glue_stack_stack';
import UILibrariesMainScreen from '../screens/main';

import {uiLibrariesRoutes} from './ui_libraries_routes';

const Stack = createNativeStackNavigator();

export default function UILibrariesStack() {
  return (
    <Stack.Navigator
      screenOptions={{...navigationScreenOptions, headerShown: true}}
      initialRouteName={uiLibrariesRoutes.main}>
      <Stack.Screen
        name={uiLibrariesRoutes.main}
        component={UILibrariesMainScreen}
      />
      <Stack.Screen
        name={uiLibrariesRoutes.glueStack}
        component={GlueSTackStack}
      />
    </Stack.Navigator>
  );
}
