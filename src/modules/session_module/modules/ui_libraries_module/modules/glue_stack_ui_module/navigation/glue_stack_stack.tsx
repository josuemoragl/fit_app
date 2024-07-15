import React from 'react';

import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationScreenOptions} from '../../../../../../../common/infrastructure/utils/navigation';
import {useTheme} from '../../../../../../../common/presentation/theme';
import {Brightness} from '../../../../../../../common/presentation/theme/themeData/interfaces';
import UILibrariesMainScreen from '../screens/main';
import TypographyScreen from '../screens/typography';

import {glueStackRoutes} from './glue_stack_routes';

const Stack = createNativeStackNavigator();

export default function GlueSTackStack() {
  const theme = useTheme();
  return (
    <GluestackUIProvider
      config={config}
      colorMode={
        theme.colorScheme.brightness === Brightness.dark ? 'dark' : 'light'
      }>
      <Stack.Navigator
        screenOptions={navigationScreenOptions}
        initialRouteName={glueStackRoutes.main}>
        <Stack.Screen
          name={glueStackRoutes.main}
          component={UILibrariesMainScreen}
        />
        <Stack.Screen
          name={glueStackRoutes.typografy}
          component={TypographyScreen}
        />
      </Stack.Navigator>
    </GluestackUIProvider>
  );
}
